import axios from "axios";
import React, { useEffect, useState } from "react";
import "./DisplayAll.css";

function DisplayAll() {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    (async function fetchData() {
      await axios
        .get("http://localhost:8000/api/newsletters/")
        .then((res) => setEmails(res.data))
        .catch((err) => console.log(err));
      console.log("here", emails);
    })();
  }, []);

  const listItems = emails.map((e) => <li key={e.id}>{e.email}</li>);

  return (
    <div className="container">
      <ul>{listItems}</ul>
    </div>
  );
}

export default DisplayAll;
