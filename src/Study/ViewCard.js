import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom"
import { readDeck } from "../utils/api";

function ViewCard() {
    const [cards, setCards] = useState([])
    const [cardIndex, setCardIndex] = useState(0)
    const history = useHistory()
    const { deckId } = useParams()
    const [cardFront, setCardFront] = useState(true)

useEffect(()=>{
    async function getDeck() {
        const response = await readDeck(deckId)
        setCards(response.cards)
    } getDeck()
}, [])

const flipHandle = () => {
    setCardFront(()=> !cardFront)
}


const nextHandle = () => {
    if (cardIndex === cards.length -1){
        if(window.confirm("Restart cards? Click 'cancel' to return to home page.")){
            setCardIndex(0)  
            setCardFront(true)
        } else {
            history.push("/")
        }
    }
    else {
    setCardIndex(cardIndex +1)
    setCardFront(true)
    }
}

if(cards.length < 3){
    return (
        <div>
            <h2>Not enough cards.</h2>
            <p>You need at least 3 cards to study. There are {cards.length} cards in this deck.</p>
            <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary">+ Add Cards</Link>
        </div>
    )
}

return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">card {cardIndex +1} of {cards.length}</h5>
        <p className="card-text"> {cardFront ? cards[cardIndex].front : cards[cardIndex].back} </p>
        <button onClick={flipHandle} className="btn btn-secondary mx-3">Flip</button>
        {cardFront ? <p></p> : <button type="button" className="btn btn-primary" onClick={nextHandle}>Next</button>}
      </div>
    </div>
   
    )
}

export default ViewCard