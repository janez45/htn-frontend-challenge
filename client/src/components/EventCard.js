import React, { Fragment, useState, useEffect } from "react";

const EventCard = ({ event }) => {
  return (
    <Fragment>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{event.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{event.event_type}</h6>
          <p class="card-text">
            Time: {event.start_time} - {event.end_time}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default EventCard;
