import React, { useState, useEffect } from "react";
import { readDeck, deleteDeck } from "../utils/api";
import Breadcrumb from "../Layout/Breadcrumb";
import { Link, useParams, useHistory, useRouteMatch } from "react-router-dom"
import CardsList from "./CardsList";

function Deck() {
    const [deck, setDeck] = useState({})
    const { deckId } = useParams()
    const history = useHistory()
    const { url } = useRouteMatch()

    useEffect(()=>{
        async function getDeck() {
            const response = await readDeck(deckId)
            setDeck(response)
        } getDeck()
    }, [])
    
    const deleteHandle = (deck) => {
        if (window.confirm("Delete this deck?")) {
            deleteDeck(deck)
            .then(history.push("/"))
          } 
    }

    return (
        <div>
            <Breadcrumb currentPage={deck.name} />
            <h3>{deck.name}</h3>
            <p>{deck.description}</p>
            <div>
                <Link to={`/decks/${deckId}/edit`} className="btn btn-secondary">Edit</Link>
                <Link to={`/decks/${deckId}/study`} className="btn btn-primary mx-3">Study</Link>
                <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary mx-3">+ Add Cards</Link>
                <button type="button" className="btn btn-danger float-right" onClick={()=> deleteHandle(deck.id)}>Delete</button>
            </div>
            <div className="my-3">
                <h1>Cards</h1>
                <CardsList deckId={deckId} cards={deck.cards} />
            </div>
        </div>
    )

}

export default Deck

//