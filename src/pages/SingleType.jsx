import axios from "axios";
import { useEffect, useState } from "react";

const SingleType = ({ partialURL }) => {
  console.log(`${partialURL}.jsx running...`);
  const [page, setPage] = useState({});
  const [error, setError] = useState(null);

  //   TODO: Is useEffect used correctly here?
  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/${partialURL}`)
      .then((response) => {
        console.log("Status: ", response.status, "\nResponse: ", response.data);
        setPage(response.data.data.attributes);
      })
      .catch((response) => {
        setError(response.message);
        console.log(`Error in ${partialURL}.jsx, message: ${response.message}`);
      });
  }, [partialURL]);

  return (
    <div>
      <h1>{page.title}</h1>
      <p>{page.body}</p>
    </div>
  );
};

export default SingleType;
