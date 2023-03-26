import axios from "axios";
import { useEffect, useState } from "react";

const Homepage = () => {
  console.log("Homepage.jsx running...");
  const [homepage, setHomepage] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/homepage")
      .then((response) => {
        console.log("Status: ", response.status, "\nResponse: ", response.data);
        setHomepage(response.data.data.attributes);
      })
      .catch((response) => {
        console.log(
          "Error in Homepage.jsx GET request. Status: ",
          response.message
        );
      });
  }, []);

  return (
    <div>
      <h1>{homepage.Title}</h1>
      <p>{homepage.Body}</p>
    </div>
  );
};

export default Homepage;
