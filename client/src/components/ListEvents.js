import React, { Fragment, useState, useEffect } from "react";
import EventCard from "./EventCard";

const ListEvents = () => {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    try {
      const response = await fetch("https://api.hackthenorth.com/v3/events");
      const jsonData = await response.json();
      setEvents(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  // TODO: For each, create a card
  return (
    <Fragment>
      {events.map((event) => (
        <EventCard event={event} />
      ))}
    </Fragment>
  );
};

export default ListEvents;
