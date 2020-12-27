import { useState, useEffect } from "react";
import axios from "axios";
const index = () => {
  const [state, setState] = useState();
  useEffect(() => {
    axios.get("https://animermaid.herokuapp.com/anime/").then((res) => {
      setState(res.data.results);
    });
  }, []); // See Note 2
  return <div>{state && JSON.stringify(state)}</div>;
};

export default index;
