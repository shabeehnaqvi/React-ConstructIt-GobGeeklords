import React, { useEffect, useState } from "react";

function Jobs() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    console.log("=======");
    fetch("http://localhost:3001/users1")
      .then((response) => response.json())
      .then((data) => {
        console.log("=======", cards);
        setCards(data);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <p>Jobs</p>
      {cards.map((info) => {
        return (
          <div>
            <h1>{info.name}</h1>
            <div class="card text-center">
              <div class="card-header">Featured</div>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="/home" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
              <div class="card-footer text-muted">2 days ago</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Jobs;
