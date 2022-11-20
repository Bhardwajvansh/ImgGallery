import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
import Search from "./Search";

const Img = () => {
  const [arr, setarr] = useState([]);
  const [term, setterm] = useState("");
  const [load, setload] = useState(true);
  const link = `https://pixabay.com/api/?key=30719184-dac1bc6b8a4351ad85d3492b8&q=${term}`;
  useEffect(() => {
    fetch(link)
      .then((res) => res.json())
      .then((data) => {
        setarr(data.hits);
        console.log(arr);
        setload(false);
      });
  }, [term]);
  return (
    <>
      <div>
        <Search searchtext={(text) => setterm(text)} />
      </div>
      {!load && arr.length == 0 ? (
        <h1 style={{ textAlign: "center" }}>No images Found...</h1>
      ) : load ? (
        <h1 style={{ textAlign: "center" }}>LOADING...</h1>
      ) : (
        <div
          style={{ display: "flex", flexWrap: "wrap", margin: "100px 100px" }}
        >
          {arr.map((ele) => (
            <Card
              key={ele.id}
              user={ele.user}
              link={ele.largeImageURL}
              tags={ele.tags}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Img;
