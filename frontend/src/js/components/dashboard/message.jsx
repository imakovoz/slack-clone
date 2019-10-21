import React from "react";
import { Link, withRouter } from "react-router-dom";

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
  }

  timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 0) {
      if (interval < 2) {
        return interval + " year";
      } else {
        return interval + " years";
      }
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 0) {
      if (interval < 2) {
        return interval + " month";
      } else {
        return interval + " months";
      }
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 0) {
      if (interval < 2) {
        return interval + " day";
      } else {
        return interval + " days";
      }
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 0) {
      if (interval < 2) {
        return interval + " hour";
      } else {
        return interval + " hours";
      }
    }
    interval = Math.floor(seconds / 60);
    if (interval > 0) {
      if (interval < 2) {
        return interval + " minute";
      } else {
        return interval + " minutes";
      }
    }
    return "Less than a minute";
  }

  render() {
    if (this.props.messageUser) {
      return (
        <div id="message">
          <div id="messageProfPic">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTesxZm8btteYcVa4pysyn3qoGGetej1oNzOZX6uL5zHzN6vNM6" />
          </div>
          <div id="rightMessageContainer">
            <div id="rightMessageTop">
              <div id="messageProfile">
                {this.props.messageUser.firstname}{" "}
                {this.props.messageUser.lastname}
              </div>
              <div>
                {this.timeSince(Date.parse(this.props.message.createdAt))} ago
              </div>
            </div>
            <div id="messageText">{this.props.message.message}</div>
          </div>
        </div>
      );
    } else {
      return <div id="message" />;
    }
  }
}

export default withRouter(Message);
