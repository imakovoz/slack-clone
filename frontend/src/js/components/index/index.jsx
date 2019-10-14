import React from "react";
import { Link, withRouter } from "react-router-dom";

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>This index page</div>;
  }
}

export default withRouter(Index);
