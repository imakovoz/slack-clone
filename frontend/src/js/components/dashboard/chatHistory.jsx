import React from "react";
import { Link, withRouter } from "react-router-dom";
import $ from "jquery";
import Message from "./message.jsx";

class ChatHistory extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    var element = document.getElementById("ChatLogContainer");
    element.scrollTop = element.scrollHeight;
  }
  render() {
    if (
      this.props &&
      this.props.chatHistory &&
      this.props.users &&
      this.props.chatHistory[0] &&
      this.props.users[0]
    ) {
      return (
        <div id="ChatLogContainer">
          <ul>
            {this.props.chatHistory.map((message, i) => {
              var messageUser = this.props.users.find(e => {
                return e._id === message.sender_id;
              });
              if (message.thread_id === this.props.thread) {
                return (
                  <Message
                    currentUser={this.props.currentUser}
                    message={message}
                    key={i}
                    messageUser={messageUser}
                  />
                );
              }
            })}
          </ul>
        </div>
      );
    } else {
      return <div id="ChatLogContainer" />;
    }
  }
}

export default withRouter(ChatHistory);
