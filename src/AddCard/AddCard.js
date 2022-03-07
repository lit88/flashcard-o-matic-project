import React, { useState, useEffect } from "react";
import Breadcrumb from "../Layout/Breadcrumb";
import { readDeck, createCard } from "../utils/api";
import { useParams } from "react-router-dom"
import CardForm from "../Layout/CardForm";

function AddCard() {
    const [deck, setDeck] = useState({})
    const { deckId } = useParams()
    const [formData, setFormData] = useState({front: "Front side of card", back: "Back side of card"})

    useEffect(()=>{
        async function getDeck() {
            const response = await readDeck(deckId)
            setDeck(response)
        } getDeck()
    }, [])

    const changeHandle = ({target})=> {
        setFormData({...formData, [target.name]: target.value})
    }

    const submitHandle = async (event)=> {
        event.preventDefault()
        await createCard(deckId, formData)
        setFormData({front: "Front side of card", back: "Back side of card"})
    }

    const doneLink = `/decks/${deckId}`

    const linkName = "Done"
    const buttonName = "Save"

    return (
        <div>
            <Breadcrumb currentPage="Add Card" deckName={deck.name} />
            <h3>{deck.name}: Add Card</h3>
            <CardForm submitHandle={submitHandle} changeHandle={changeHandle} form={formData} doneLink={doneLink} linkName={linkName} buttonName={buttonName} />
        </div>
    )
    
}

export default AddCard