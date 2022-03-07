import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom"
import { readDeck, readCard, updateCard } from "../utils/api";
import Breadcrumb from "../Layout/Breadcrumb";
import CardForm from "../Layout/CardForm";

function EditCard() {

    const [ deck, setDeck ] = useState({})
    const [cards, setCards] = useState([])
    const { deckId, cardId } = useParams()
    const [card, setCard] = useState({})
    const history = useHistory()

    useEffect(()=>{
        async function getDeck() {
            const response = await readDeck(deckId)
            setCards(response.cards)
            setDeck(response)
        } getDeck()
    }, [])

    useEffect(()=>{
        async function getCard() {
            const response = await readCard(cardId)
            setCard(response)
        } getCard()
    }, [])

    const changeHandle = ({target})=> {
        setCard({...card, [target.name]: target.value})
    }

    const submitHandle = async (event)=> {
        event.preventDefault()
        await updateCard(card)
        history.push(`/decks/${deckId}`)
    }

    const doneLink = `/decks/${deckId}`

    const linkName= "Cancel"
    const buttonName = "Submit"

    return (
        <div>
            <Breadcrumb currentPage={`Edit Card ${cardId}`} deckName={`Deck ${deck.name}`} />
            <h1>Edit Card</h1>
            <CardForm submitHandle={submitHandle} changeHandle={changeHandle} form={card} doneLink={doneLink} linkName={linkName} buttonName={buttonName} />
        </div>
    )

}

export default EditCard