import './App.css';
import {useState, useEffect} from "react";


function App() {

  
  function refreshPage() {
    window.location.reload(false);
  }


  const URL ="http://www.thecocktaildb.com/api/json/v1/1/";

  const [drink, setDrinks] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const detail = "random.php";
    const address = URL + detail;
    console.log(address);
    fetch(address)
    .then(res => res.json())
    .then(
      (result) => {
        setError(null);
        setIsLoading(true);
        setDrinks(result.drinks)
      },(error) => {
        setError(error);
      }
    )

  }, [])

  if(error) {
    return <p>{error.message}</p>
  }else if (!isLoading) {
    return <p>Loading...</p>
  }else {
    return (
    <div id="ulkoasu">
      <h1>Random coctail</h1>
      {drink.map(drink => (
        <div key={drink.idDrink}>
          <h3>{drink.strDrink}</h3>
          <ul>
            <ol>{drink.strMeasure1} {drink.strIngredient1}</ol>
            <ol>{drink.strMeasure2} {drink.strIngredient2}</ol>
            <ol>{drink.strMeasure3} {drink.strIngredient3}</ol>
            <ol>{drink.strMeasure4} {drink.strIngredient4}</ol>
            <ol>{drink.strMeasure5} {drink.strIngredient5}</ol>
            <ol>{drink.strMeasure6} {drink.strIngredient6}</ol>
            <ol>{drink.strMeasure7} {drink.strIngredient7}</ol>
            <ol>{drink.strMeasure8} {drink.strIngredient8}</ol>
          </ul>
          <p>{drink.strInstructions}</p>
        </div>

      ))}
      <div>
        <button onClick={refreshPage}>Click to get new drink</button>
      </div>

    </div>
    
      )
  }
}
export default App;
