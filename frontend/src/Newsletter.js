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
  const { loading, setLoading } = useState(false);

  const handleSubmit = (e) => {
    const em = { email: email.toLowerCase() };
    axios
      .post("http://localhost:8000/api/newsletters/", em)
      .then((res) => {
        if (res.status === 201) {
          NotificationManager.success(
            `You ${email} has subscribed`,
            "Subscribed!"
          );
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          NotificationManager.error(
            `Your Email:${email} has already been subscribed, please enter another email`,
            "Error Occured!"
          );
        }
      });
    console.log(`Form submitted, ${email}`);
    e.preventDefault();
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
      <>{loading ? <div>Loading...</div> : <></>}</>
      <NotificationContainer />
    </div>
  );
}

export default Newsletter;
