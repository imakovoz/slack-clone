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
    this.setState({ visible: visible });
  }

  render() {
    return (
      <div id="DashboardContainer">
        <LeftNav
          updateModal={this.updateModal}
          modalVis={this.state.visible}
          threads={this.props.threads}
        />
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
        <Modal
          updateModal={this.updateModal}
          visibility={this.state.visible}
          createThread={this.props.createThread}
        />
      </div>
    );
  }
}

export default withRouter(Dashboard);
