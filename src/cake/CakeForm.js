import { useState } from "react";
const CakeForm = ({onNewCakeSubmission}) => {
  
    const [name, setName] = useState("")
    const [ingredients, setIngredients] = useState("")
    const [price, setPrice] = useState("")
    const [rating, setRating] = useState("")

    const updateName = (event) =>{
        setName(event.target.value)
    }
    const updateIngredients = (event) =>{
        setIngredients(event.target.value)
    }
    const updatePrice = (event) =>{
        setPrice(event.target.value)
    }
    const updateRating = (event) =>{
        setRating(event.target.value)
    }

 
    const handleSubmitForm = (event) => {
    event.preventDefault()
        const newCake = {
        name: name,
        ingredients: ingredients.split(','),
        price: price,
        rating: rating,
        }
        
        setName("")
        setIngredients("")
        setPrice("")
        setRating("")
        onNewCakeSubmission(newCake)

    }

   
    return ( 

        <section>

            <h2>Add new cakes here !</h2>
            <form onSubmit={(event)=> handleSubmitForm(event)}>
            <label htmlFor="name-input"> Name:</label>
            <input
            type="text"
            id ="name-input"
            onInput={(event) => updateName (event)}
            value = {name}
            />
            <label htmlFor="ingredients-input" >Ingredients:</label>
            <input
            type="text"
            id ="ingredients-input"
            onInput={(event) => updateIngredients (event)}
            value = {ingredients}
            />
            <label htmlFor="price-input"> Price:</label>
            <input
            type="text"
            id ="price-input"
            onInput={(event) => updatePrice (event)}
            value = {price}
            />
            <label htmlFor="rating-input"> Rating:</label>
            <input
            type="text"
            id ="rating-input"
            onInput={(event) => updateRating (event)}
            value = {rating}
            />
            <input type ="submit" value="Add new cake"></input>
            </form>



        </section>

     );
}
 
export default CakeForm;