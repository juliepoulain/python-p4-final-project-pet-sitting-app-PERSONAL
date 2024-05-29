import React, { useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import OwnerProfile from "./OwnerProfile";
import Homepage from "./Homepage";
import VisitPage from "./VisitPage";
import PetsList from "./PetsList";
import SeeMorePetCard from "./SeeMorePetCard";
import Login from "./Login";
import SitterProfile from "./SitterProfile";

function App() {
  const [ownerId, setOwnerId] = useState("");

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/owner/:id">
            <OwnerProfile ownerId={ownerId} setOwnerId={setOwnerId} />
          </Route>
          <Route exact path="/">
            <Homepage ownerId={ownerId} />
          </Route>
          <Route exact path="/visit/:id">
              <VisitPage ownerId={ownerId} />
          </Route>
          <Route exact path="/login">
            <Login ownerId={ownerId} setOwnerId={setOwnerId} />
          </Route>
          <Route exact path="/sitters/:id">
            <SitterProfile />
          </Route>
          <Route exact path="/pets/:ownerId">
            <PetsList />
          </Route>
          <Route exact path="/pets/:id">
            <SeeMorePetCard />
          </Route>

          {/* here is where we should add more routes (home, pets, etc) */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
