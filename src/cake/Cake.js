const Cake = ({cake}) => {


  

  return (
    <div className = "cake">
      <h3>{cake.cakeName}</h3>
      <h4>Ingredients:</h4>
      <ul>
        {cake.ingredients.map(ingredient => {
          return <li key={cake.id}>{ingredient}</li>
        })}
      </ul>
      <p>Rating: {cake.rating}</p>
      <p>Price: £{cake.price}</p>
      <button>Sell Cake</button>

    </div>
  )
}

export default Cake;