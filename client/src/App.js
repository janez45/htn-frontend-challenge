import { Fragment } from "react";
import "./App.css";

import ListEvents from "./components/ListEvents.js";
import EventCard from "./components/EventCard.js";

function App() {
  return (
    <Fragment>
      <div className="App">
        <ListEvents />
      </div>
    </Fragment>
  );
}

export default App;
