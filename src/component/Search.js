import React, { useEffect, useState } from "react";

function Search() {
  const [serachinput, setserachinput] = useState("");
  const [data, setData] = useState();
  const baseUrl = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    apiData();
  }, []);

  function apiData() {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }

  return (
    <>
      <div style={{ textAlign: "center", margin: "50px" }}>
        <input
          type="text"
          value={serachinput}
          onChange={(e) => setserachinput(e.target.value)}
        />

        {data &&
          data
            .filter((data) => data.title.match(new RegExp(serachinput, "i")))
            .map((item, index) => {
              console.log(item);
              return (
                <div key={index}>
                  <p>{item.id}</p>
                  <p>{item.title}</p>
                  <p>{item.body}</p>
                </div>
              );
            })}
      </div>
    </>
  );
}

export default Search;
