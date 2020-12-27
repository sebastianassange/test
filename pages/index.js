import { useState, useEffect } from "react";
import axios from "axios";
const index = (props) => {
  const [state, setState] = useState();
  useEffect(() => {
    axios.get("https://animermaid.herokuapp.com/anime/").then((res) => {
      setState(res.data.results);
    });
  }, []); // See Note 2
  return (
    <div>
      <div>{state && JSON.stringify(state)}</div>
      <br></br>
      <br></br>
      <br></br>
      {props.data && JSON.stringify(props.data)}
    </div>
  );
};

export default index;
export async function getStaticProps(context) {
  const res = await fetch("https://animermaidpp.com/anime/");
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
