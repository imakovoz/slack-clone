import React from "react";
import { Link, withRouter } from "react-router-dom";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createThread(this.state).then(() => {
      this.setState({ name: "", description: "" });
      this.props.updateModal(false);
    });
  }

  handleName(e) {
    this.setState({ name: e.target.value });
  }

  handleDescription(e) {
    this.setState({ description: e.target.value });
  }

  render() {
    var visibility = "none";

    if (this.props.visibility === true) {
      visibility = "flex";
    }
    return (
      <div id="modal" style={{ display: visibility }}>
        <h2>Create Channel</h2>
        <span>
          Channels are where your members communicate. They're best when
          organized around a topic - #proj-budget, for example.
        </span>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <div id="channelName">
            <span>#</span>
            <input
              type="text"
              placeholder="e.g. plan-budget"
              onChange={this.handleName}
            ></input>
          </div>
          <label>Description</label>
          <input type="text" onChange={this.handleDescription}></input>
          <label className="subLabel">What’s this channel about?</label>
        </form>
        <div id="modalSubmitBtn">
          <button onClick={this.handleSubmit}>Create</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Modal);
