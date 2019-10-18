import React from "react";
import { Link, withRouter } from "react-router-dom";

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleText = this.handleText.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { websocket } = this.props; // websocket instance passed as props to the child component.

    try {
      var obj = {
        currentUser: this.props.currentUser,
        text: this.state.text,
        route: "message"
      };
      websocket.send(JSON.stringify(obj)); //send data to the server
      this.setState({ text: "" });
    } catch (error) {
      console.log(error); // catch error
    }
  }

  handleText(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div id="InputContainer">
        <form onSubmit={this.handleSubmit} id="ChatForm">
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleText}
            placeholder="Send your message"
            id="ChatInput"
          />
        </form>
      </div>
    );
  }
}

export default withRouter(Chat);
