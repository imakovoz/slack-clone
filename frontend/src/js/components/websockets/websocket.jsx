import React from "react";
import { Link, withRouter } from "react-router-dom";
import Dashboard from "../dashboard/dashboard.jsx";

class WebsocketClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ws: null,
      chatHistory: ["test"]
    };
    console.log(this);
  }

  // single websocket instance for the own application and constantly trying to reconnect.

  componentDidMount() {
    this.props.fetchUsers().then(() => {
      this.connect();
    });
  }

  // timeout = 250; // Initial timeout duration as a class variable

  /**
   * @function connect
   * This function establishes the connect with the websocket and also ensures constant reconnection if connection closes
   */
  connect() {
    var ws = new WebSocket("ws://127.0.0.1:1337");
    let that = this; // cache the this
    var connectInterval;

    // websocket onopen event listener
    ws.onopen = () => {
      console.log("connected websocket main component");

      this.setState({ ws: ws });

      that.timeout = 250; // reset timer to 250 on open of websocket connection
      clearTimeout(connectInterval); // clear Interval on on open of websocket connection
    };

    // websocket onclose event listener
    ws.onclose = e => {
      console.log(
        `Socket is closed. Reconnect will be attempted in ${Math.min(
          10000 / 1000,
          (that.timeout + that.timeout) / 1000
        )} second.`,
        e.reason
      );

      that.timeout = that.timeout + that.timeout; //increment retry interval
      connectInterval = setTimeout(this.check, Math.min(10000, that.timeout)); //call check function after timeout
    };

    // websocket onerror event listener
    ws.onerror = err => {
      console.error(
        "Socket encountered error: ",
        err.message,
        "Closing socket"
      );

      ws.close();
    };

    ws.onmessage = e => {
      try {
        var json = JSON.parse(e.data);
        this.setState({ chatHistory: json.data });
      } catch (e) {
        console.log("Invalid JSON: ", e.data);
        return;
      }
    };
  }

  /**
   * utilited by the @function connect to check if the connection is close, if so attempts to reconnect
   */
  check() {
    const { ws } = this.state;
    if (!ws || ws.readyState == WebSocket.CLOSED) this.connect(); //check if websocket instance is closed, if so call `connect` function.
  }

  render() {
    return (
      <Dashboard
        chatHistory={this.state.chatHistory}
        websocket={this.state.ws}
        currentUser={this.props.currentUser}
        users={this.props.users}
      />
    );
  }
}

export default withRouter(WebsocketClass);
