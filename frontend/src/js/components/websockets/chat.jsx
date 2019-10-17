import React from "react";
import { Link, withRouter } from "react-router-dom";
import $ from "jquery";

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleText = this.handleText.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.websocket === null && this.props.websocket !== null) {
      const { websocket } = this.props;
      try {
        websocket.send(this.props.currentUser.email); //send data to the server
      } catch (error) {
        console.log(error); // catch error
      }
    }
    debugger;
  }

  handleSubmit(e) {
    e.preventDefault();
    const { websocket } = this.props; // websocket instance passed as props to the child component.

    try {
      websocket.send(this.state.text); //send data to the server
    } catch (error) {
      console.log(error); // catch error
    }
  }

  handleText(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div>
        <div id="content"></div>
        <div>
          <form onSubmit={this.handleSubmit} id="ChatForm">
            <input
              type="text"
              value={this.state.text}
              onChange={this.handleText}
              placeholder="Send your message"
              id="ChatInput"
            />
            <button id="ChatSubmit">Send</button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(Chat);
