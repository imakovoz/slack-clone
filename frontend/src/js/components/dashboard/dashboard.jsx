import React from "react";
import { Link, withRouter } from "react-router-dom";
import Chat from "./chat.jsx";
import ChatHistory from "./chatHistory.jsx";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };

    this.handleText = this.handleText.bind(this);
  }

  handleText(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div id="DashboardContainer">
        <div id="LeftNav"></div>
        <ChatHistory
          websocket={this.props.websocket}
          currentUser={this.props.currentUser}
          chatHistory={this.props.chatHistory}
          users={this.props.users}
        />
        <Chat
          websocket={this.props.websocket}
          currentUser={this.props.currentUser}
        />
      </div>
    );
  }
}

export default withRouter(Dashboard);
