import React from "react";

function DisplayAll() {
  //   const [emails, setEmails] = useState([]);
  useEffect(() => {
    (async function fetchData() {
      await axios
        .get("http://localhost:8000/api/newsletters/")
        .then((res) => setEmails(res.data))
        .catch((err) => console.log(err));
      console.log("here", emails);
    })();
  }, []);
  return <div></div>;
}

export default DisplayAll;
