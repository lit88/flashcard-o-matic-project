import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom"
import { deleteCard, readDeck } from "../utils/api";

function CardsList({deckId}) {

    const [cards, setCards] = useState([])

    const history = useHistory()

    useEffect(()=>{
        async function getDeck() {
            const response = await readDeck(deckId)
            setCards(response.cards)
        } getDeck()
    }, [])

    const deleteHandle = (card) => {
        if (window.confirm("Delete this card?")) {
            deleteCard(card)
            .then(history.push("/"))
          } 
    }

    return (
        <div>
        {cards.map((card)=>
            <div className="card">
                <div className="row g-0">
                    <div className="col-md-6">
                    <div className="card-body">
                        <p className="card-text">{card.front}</p>
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="card-body">
                        <p className="card-text">{card.back}</p>
                        <button type="button" className="btn btn-danger float-right my-3" onClick={()=> deleteHandle(card.id)}>Delete</button>
                        <Link to={`/decks/${deckId}/cards/${card.id}/edit`} className="btn btn-secondary float-right m-3">Edit</Link>
                    </div>
                    </div>
                </div>
            </div>
        )
}
        </div>
    )
        
}

export default CardsList

