// this component help us load a component asynchrounously i.e only when it's needed.
import React, { Component } from "react";

const AsyncComponent = importComponent => {
  return class extends Component {
    state = {
      component: null // this property will be set to the dynamically loaded and the code for this will get implemented in ComponentDidMount.
    };
    componentDidMount() {
      importComponent().then(cmp => {
        this.setState({ component: cmp.default });
      });
    }

    render() {
        const C =this.state.component;
        return C ?<C {...this.props}/> :null;
    }
  };
};

export default AsyncComponent;
