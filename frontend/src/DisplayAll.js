import axios from "axios";
import React, { useEffect, useState } from "react";

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

  return (
    <div>
      {emails.map((e) => (
        <p>{e.email}</p>
      ))}
    </div>
  );
}

export default DisplayAll;
