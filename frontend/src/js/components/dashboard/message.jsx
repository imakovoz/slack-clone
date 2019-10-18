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

    if (interval > 1) {
      return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

  render() {
    if (this.props.messageUser) {
      console.log(this.timeSince(Date.parse(this.props.messageUser.createdAt)));
      return (
        <div id="message">
          <div id="messageProfPic">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTesxZm8btteYcVa4pysyn3qoGGetej1oNzOZX6uL5zHzN6vNM6" />
          </div>
          <div id="rightMessageContainer">
            <div id="rightMessageTop">
              <div id="messageProfile">{this.props.messageUser.firstname}</div>
              <div>
                {this.timeSince(Date.parse(this.props.messageUser.createdAt))}
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
