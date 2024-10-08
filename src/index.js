import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating
        color="powderblue"
        maxRating={10}
        onSetRating={setMovieRating}
      />

      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={5}
      messages={["terrible", "bad", "ok", "good", "amazing"]}
      defaultRating={3}
    />
    <StarRating maxRating={20} />
    <StarRating size={100} color="blue" />
    <Test />
  </React.StrictMode>
);
