import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom"
import { readDeck, updateDeck } from "../utils/api";
import Breadcrumb from "../Layout/Breadcrumb";
import DeckForm from "../Layout/DeckForm";

function EditDeck() {

    const [deck, setDeck] = useState({})
    const { deckId } = useParams()
    const history = useHistory()

    useEffect(()=>{
        async function getDeck() {
            const response = await readDeck(deckId)
            setDeck(response)
        } getDeck()
    }, [])

    const changeHandle = ({target})=> {
        setDeck({...deck, [target.name]: target.value})
    }

    const submitHandle = async (event)=> {
        event.preventDefault()
        const response = await updateDeck(deck)
        history.push(`/decks/${response.id}`)
        }

        const cancelLink = `/decks/${deckId}`

    return (
        <div>
            <Breadcrumb currentPage="Edit Deck" deckName={deck.name} />
            <h1>Edit Deck</h1>
            <DeckForm submitHandle={submitHandle} changeHandle={changeHandle} form={deck} cancelLink={cancelLink} />
        </div>
    )

}

export default EditDeck