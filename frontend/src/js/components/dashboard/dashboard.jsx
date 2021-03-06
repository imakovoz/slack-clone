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
      visible: false,
      thread: 0
    };

    this.handleText = this.handleText.bind(this);
    this.updateModal = this.updateModal.bind(this);
    this.updateThread = this.updateThread.bind(this);
  }

  updateThread(threadID) {
    var changedThread = this.props.threads.find(e => {
      return e._id === threadID;
    });
    this.setState({ thread: changedThread });
  }

  handleText(e) {
    this.setState({ text: e.target.value });
  }

  updateModal(visible) {
    this.setState({ visible: visible });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.threads.length > 0 && this.state.thread === 0) {
      this.setState({ thread: this.props.threads[0] });
    }
  }

  render() {
    // console.log(this.state.thread);
    return (
      <div id="DashboardContainer">
        <LeftNav
          updateModal={this.updateModal}
          modalVis={this.state.visible}
          threads={this.props.threads}
          deleteThread={this.props.deleteThread}
          updateThread={this.updateThread}
        />
        <ChatHistory
          websocket={this.props.websocket}
          currentUser={this.props.currentUser}
          chatHistory={this.props.chatHistory}
          users={this.props.users}
          thread={this.state.thread}
        />
        <Chat
          websocket={this.props.websocket}
          currentUser={this.props.currentUser}
          thread={this.state.thread}
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
