import React from "react";
import { Link, withRouter } from "react-router-dom";
import $ from "jquery";

class ChatHistory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div id="ChatLogContainer"></div>;
  }
}

export default withRouter(ChatHistory);
