import React, { Fragment, useState, useEffect } from "react";

const EventCard = ({ event }) => {
  return (
    <Fragment>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{event.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{event.event_type}</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default EventCard;
