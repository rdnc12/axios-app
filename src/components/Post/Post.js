import React from "react";
import { withRouter } from "react-router-dom";
// withRouter is a higher order component(hoc) which we use by wraping
// our export with it. withRouter(Post)
// adds these props to other components
// this is one way for you to get access to routing related props which
// you might need for calling push on the history prop or for getting
// information about the loaded route.
import "./Post.css";

const Post = props => (
  <article className="Post" onClick={props.clicked}>
    <h1>{props.title}</h1>
    <div className="Info">
      <div className="Author">{props.author}</div>
    </div>
  </article>
);

export default withRouter(Post);
