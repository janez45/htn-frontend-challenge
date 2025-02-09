import React, { Fragment, useState, useEffect } from "react";

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
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{events[0].name}</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListEvents;
