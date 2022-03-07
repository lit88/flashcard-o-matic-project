import React, { useState, useEffect } from "react";
import { listDecks } from "../utils/api";
import { Link, useHistory } from "react-router-dom";
import { deleteDeck } from "../utils/api";

function DeckList() {
    const [decks, setDecks] = useState([])
    const history = useHistory()

    useEffect(()=> {
    async function decksArray() {
        const response = await listDecks()
        setDecks(response)
    }
    decksArray() }, [])

    const deleteHandle = (deck) => {
        if (window.confirm("Delete this deck?")) {
            deleteDeck(deck)
            .then(history.push("/"))
          } 
    }
   
    
return (
    <div>
        {decks.map((deck)=> 
    <div className="col">
        <div className="card m-3">
            <div className="card-body row justify-content-between mx-1">
                <h5 className="card-title">{deck.name}</h5>
                <p className="float-right"><small className="text-muted">{deck.cards.length} cards</small></p>
            </div>
            <div className="card-body">
                <p className="card-text">{deck.description}</p>
                <Link to={`/decks/${deck.id}`} className="btn btn-secondary">View</Link>
                <Link to={`/decks/${deck.id}/study`} className="btn btn-primary mx-3">Study</Link>
                <button type="button" className="btn btn-danger float-right" onClick={()=> deleteHandle(deck.id)}>Delete</button>
            </div>
        </div>
    </div>
)}
    </div>
)

}

export default DeckList