import React, { Fragment, useState, useEffect } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const formatTime = (time) => {
  var t = new Date(time);
  var formatted = moment(t).format("MMMM Do YYYY, h:mm:ss a");
  return formatted;
};

const EventCard = ({ event }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/events/${id}`);
  };

  return (
    <Fragment>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{event.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{event.event_type}</h6>
          <p class="card-text">
            {formatTime(event.start_time)} - {formatTime(event.end_time)}
          </p>
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/events/${event.id}`)}
          >
            Learn more
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default EventCard;
