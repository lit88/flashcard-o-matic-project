import React, { useState } from "react";
import Breadcrumb from "../Layout/Breadcrumb";
import { createDeck } from "../utils/api";
import { useHistory } from "react-router-dom"
import DeckForm from "../Layout/DeckForm";

function CreateDeck() {
    const history = useHistory()
    const [formData, setFormData] = useState({name: "Deck Name",
    description: "Brief description of the deck"})
    
    const changeHandle = ({target})=> {
        setFormData({...formData, [target.name]: target.value})
    }

    const submitHandle = async (event)=> {
        event.preventDefault()
        const response = await createDeck(formData)
        history.push(`/decks/${response.id}`)
        }

        const cancelLink= "/"
    

return (
    <div>
        <Breadcrumb currentPage="Create Deck" />
        <h1>Create Deck</h1>
        <DeckForm submitHandle={submitHandle} changeHandle={changeHandle} form={formData} cancelLink={cancelLink}/>
    </div>
)
}

export default CreateDeck