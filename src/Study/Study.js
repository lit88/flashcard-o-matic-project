import React, { useState, useEffect } from "react";
import { readDeck } from "../utils/api";
import Breadcrumb from "../Layout/Breadcrumb"
import { useParams } from "react-router-dom"
import ViewCard from "./ViewCard";

function Study() {
    const [deck, setDeck] = useState({})
    const { deckId } = useParams()

    useEffect(()=>{
        async function getDeck() {
            const response = await readDeck(deckId)
            setDeck(response)
        } getDeck()
    }, [])
    
    return (
        <div>
            <Breadcrumb currentPage="Study" deckName={deck.name} />
            <h1>Study: {deck.name}</h1>
            <ViewCard />
        </div>
    )
}

export default Study