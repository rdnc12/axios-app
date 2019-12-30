import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null
  };

  componentDidMount() {
    console.log(this.props);
    this.LoadData();
    
  }

  // we do it for selecting other post on the same page and reload again.
  // we see other post when we click it.
  componentDidUpdate(){
    this.LoadData();
  }

  LoadData(){
    // we reach that match.params.id
    if (this.props.match.params.id) {
      // this line prevent infinitive loop. when we fetch the data from database
      // we should only new data be called.
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id) // + convert to number
      ) {
        axios
          .get("/posts/" + this.props.match.params.id)
          .then(response => {
            this.setState({ loadedPost: response.data });
            //console.log(response);
          });
      }
    }
  }
  deletePostHandler = () => {
    axios
      .delete("/posts/" + this.props.match.params.id)
      .then(response => {
        console.log(response);
      });
  };

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.match.params.id) {
      post = <p style={{ textAlign: "center" }}>Loading...!</p>;
    }
    // this line make post selectable.
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button onClick={this.deletePostHandler} className="Delete">
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;

// nested route
// FullPost component that we use match.params.id all over in the component.
// ComponentDidUpdate=> if the post component or if component in general is alredy loaded
// through routing because the router will not unmount the old one and mount the same one
// again with different data, it will reuse the old one and just adjust the route parameter,
// It will be called because the props changed.
// We receive a new props with a new match object with a new params object with the ID.