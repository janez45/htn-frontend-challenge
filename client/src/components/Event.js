import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Event = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [relatedEvents, setRelatedEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const getEvent = async () => {
    try {
      const response = await fetch(
        `https://api.hackthenorth.com/v3/events/${id}`
      );
      const jsonData = await response.json();
      setEvent(jsonData);
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEvent();
  }, []);

  if (loading) return <h3>Loading...</h3>;
  if (!event) return <h3>Event not found.</h3>;

  return (
    <Fragment>
      <h3>Event ID: {id}</h3>
      <h1>Name: {event.name}</h1>
      <h5>Events you might be interested in: {id}</h5>
      <button type="button" class="btn btn-link">
        Link
      </button>
    </Fragment>
  );
};

export default Event;
