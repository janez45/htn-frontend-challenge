import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import ListEvents from "./components/ListEvents.js";
import EventCard from "./components/EventCard.js";

const NotFound = () => {
  return (
    <Fragment>
      <h1>Not Found</h1>
    </Fragment>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListEvents />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
