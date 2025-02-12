import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";

import ListEvents from "./components/ListEvents.js";
import Event from "./components/Event.js";

const NotFound = () => {
  return (
    <Fragment>
      <h1>Not Found</h1>
    </Fragment>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/events" replace />} />
        <Route path="/events" element={<ListEvents />} />
        <Route path="/events/:id" element={<Event />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
