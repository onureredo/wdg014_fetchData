import { useState, useEffect } from 'react';

function Fetch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  //   const fetchData = () => {
  //     fetch('https://api.quotable.io/random2')
  //       .then((response) => response.json())
  //       .then((parsedData) => {
  //         // console.log(parsedData);
  //         setData(parsedData);
  //       })
  //       .catch((error) => console.error(error));
  //   };

  const fetchData = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(`${response.status} ${response.statusText}`);
      })
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <div>
      <h2>FETCH-API</h2>
      {error ? (
        <p>Error: {error}</p>
      ) : data ? (
        <div>
          <h3>{data.author}</h3>
          <p>{data.content}</p>
        </div>
      ) : (
        <p>Loading....</p>
      )}
      <button onClick={fetchData}>FETCH</button>
    </div>
  );
}

export default Fetch;
