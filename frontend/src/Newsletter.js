import React, { useEffect, useState } from "react";
import "react-notifications/lib/notifications.css";

import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import axios from "axios";
import "./Newsletter.css";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [error, setError] = useState(false);
  const [errormsg, setErrormsg] = useState("");
  const { loading, setLoading } = useState(false);

  function validAge(age) {
    if (parseInt(age) < 1) {
      return false;
    } else if (!age) {
      return false;
    }
    return true;
  }

  function sendData() {
    const em = { email: email.toLowerCase(), age: age };
    axios
      .post("http://localhost:8000/api/newsletters/", em)
      .then((res) => {
        if (res.status === 201) {
          NotificationManager.success(
            `You ${email} has subscribed`,
            "Subscribed!"
          );
          setEmail("");
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          NotificationManager.error(
            `Your Email:${email} has already been subscribed, please enter another email`,
            "Error Occured!"
          );
        } else if (err.response.status === 500) {
          NotificationManager.error(errormsg, "Error Occured");
        }
      });

    console.log(`Form submitted, ${email}`);
  }

  const handleSubmit = (e) => {
    // Validate email and Age
    if (validAge(age)) {
      sendData();
    } else {
      NotificationManager.error("Invalid Age", "Error Occured!");
    }
    e.preventDefault();
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form__group">
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email to subscribe"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>

        <input
          type="text"
          placeholder="Enter your Age"
          value={age}
          onChange={(e) => setAge(e.currentTarget.value)}
        />
        <button type="submit" disabled={!email && !age}>
          {" "}
          📧 Subscribe
        </button>
      </form>
      <>{loading ? <div>Loading...</div> : <></>}</>
      <NotificationContainer />
    </div>
  );
}

export default Newsletter;
