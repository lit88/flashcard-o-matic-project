import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function Breadcrumb({ currentPage, deckName }) {
    const {url, path} = useRouteMatch()
    const partsOfURL = url.split('/').slice(1, -1)
    const partsForMap = path.split('/').filter((part)=> part !== "decks").slice(1, -1)
   
    if(partsForMap.includes("cards")) {
        const indexCard = partsForMap.indexOf("cards")
        partsForMap.splice(indexCard) }

    const newLink = partsForMap.map((part, index)=> 
                <li class="breadcrumb-item"><Link to={`/${partsOfURL.slice(0, index + 2 ).join("/")}`}>
                    {deckName}</Link></li> )

    return (
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                {newLink}
                <li class="breadcrumb-item active" aria-current="page">{currentPage}</li>
            </ol>
        </nav>
    )
}

export default Breadcrumb