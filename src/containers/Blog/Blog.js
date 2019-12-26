import React, { Component } from "react";
import Posts from "./Posts/Posts";
import NewPost from '../Blog/NewPost/NewPost'

import { Route,Link } from "react-router-dom";
// Link prevent page reloading when we click it.
import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <Link to='/'> Home</Link>
              </li>
              <li>
                <Link to={{
                  pathname:'/new-post',
                  hash:'#submit',
                  search:'?quick-submit=true'
                }}>New Post</Link>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path='/' exact render={()=> <h1>eee</h1>}/> // exact show us only one rendered path
        <Route path='/'  render={()=> <h1>eee2</h1>}/> */}
         {/* render is for short info messages. */}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default Blog;
