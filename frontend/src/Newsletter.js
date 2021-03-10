import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Newsletter.css";

function Newsletter() {
  const [emails, setEmails] = useState([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    (async function fetchData() {
      await axios
        .get("http://localhost:8000/api/newsletters/")
        .then((res) => setEmails(res.data))
        .catch((err) => console.log(err));
      console.log("here", emails);
    })();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const em = { email: email };
    axios
      .post("http://localhost:8000/api/newsletters/", em)
      .catch((e) => alert("duplicate value entered"));
    console.log(`Form submitted, ${email}`);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form__group">
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
        <button type="submit">Subscribe</button>
      </form>
      {emails.map((e) => (
        <p>{e.email}</p>
      ))}
    </div>
  );
}

export default Newsletter;
