import React, { Component } from "react";
import Posts from "./Posts/Posts";
import AsynComponent from '../../hoc/AsyncComponent';
//import NewPost from "../Blog/NewPost/NewPost";
 
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
// Link prevent page reloading when we click it.
// NavLink has some props to change styling.

// Switch tells the react-router: only load one of the routes.
import "./Blog.css";

const AsyncNewPost=AsynComponent(()=>{
  return import("../Blog/NewPost/NewPost")
});

class Blog extends Component {
  state = {
    auth: true
  };
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline"
                  }}
                  activeClassName="my-active"
                  exact
                  to="/posts/"
                >
                  {" "}
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true"
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path='/' exact render={()=> <h1>eee</h1>}/> // exact show us path which has exact name. 
        <Route path='/'  render={()=> <h1>eee2</h1>}/> */}
        {/* render is for short info messages. */}

        <Switch>
          {this.state.auth ? (
            <Route path="/new-post" component={AsyncNewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          {/* catching unknown routes. Handling 404 case with a route without a path */}
          <Route render={()=> <h1>Not Authenticated/Found</h1>} />
          {/* <Redirect from="/" to="/posts" /> */}
          {/* <Route path="/" component={Posts} /> redirect to /posts */}
        </Switch>
      </div>
    );
  }
}

export default Blog;

// an absolute path is always appended to our domain.(for example /new-post. this append our link at the end)
// a relative path = this.props.match.url +/new-post
