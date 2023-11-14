import React, { useState, useEffect } from "react";

function Joke() {
  const [joke, setjoke] = useState(null);
  useEffect(() => {
    const url = "https://dad-jokes.p.rapidapi.com/random/joke";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "47e7d5b613msh85ede1f6ac13ca2p1f5f66jsn2098a362f9e4",
        "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
      },
    };

    try {
      const response = fetch(url, options);
      const result = response.json();

      setjoke(result);
      console.log(result);
      //     .then((response) => response.json())
      //     .then((data) => {
      //         setjoke(data[0].joke);
      //         console.log(data);
      //     })
      //     .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
      // .then((response) => response.json())
      // .then((data) => {
      //     setjoke(data[0].joke);
      //     console.log(data);
      // })
      // .catch((error) => console.log(error));
    }
  }, []);
  return (
    <div>
      <h2>joke of the day:</h2>
      {joke && <p>{joke} </p>}
    </div>
  );
}

export default Joke;
