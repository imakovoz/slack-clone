import React from "react";
import { Link, withRouter } from "react-router-dom";
import Chat from "./chat.jsx";
import ChatHistory from "./chatHistory.jsx";
import LeftNav from "./leftNav.jsx";
import Modal from "./modal.jsx";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      visible: false
    };

    this.handleText = this.handleText.bind(this);
    this.updateModal = this.updateModal.bind(this);
  }

  handleText(e) {
    this.setState({ text: e.target.value });
  }

  updateModal(visible) {
    console.log(visible);
    this.setState({ visible: visible });
  }

  render() {
    return (
      <div id="DashboardContainer">
        <LeftNav updateModal={this.updateModal} modalVis={this.state.visible} />
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
        <Modal visibility={this.state.visible} />
      </div>
    );
  }
}

export default withRouter(Dashboard);
