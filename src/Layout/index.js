import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Home/Home";
import Study from "../Study/Study"
import CreateDeck from "../CreateDeck/CreateDeck"
import Deck from "../Deck/Deck"
import EditDeck from "../EditDeck/EditDeck"
import AddCard from "../AddCard/AddCard"
import EditCard from "../EditCard/EditCard"

function Layout() {

  
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/decks/new">
            <CreateDeck />
          </Route>
          <Route exact path="/decks/:deckId">
            <Deck />
          </Route>
          <Route exact path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route exact path="/decks/:deckId/edit">
           <EditDeck />
          </Route>
          <Route exact path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>
          <Route exact path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        {/* TODO: Implement the screen starting here */}
        
      </div>
    </div>
  );
}

export default Layout;
