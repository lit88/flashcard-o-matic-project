import React from "react";
import DeckList from "./DeckList";
import { Link } from "react-router-dom"

function Home() {


return (
    <div>
        <Link to="/decks/new" className="btn btn-secondary">+ Create Deck</Link>
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <DeckList />
        </div>
    </div> 
    )
}

export default Home