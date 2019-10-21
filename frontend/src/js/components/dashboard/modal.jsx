import React from "react";
import { Link, withRouter } from "react-router-dom";

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var visibility = "none";

    if (this.props.visibility === true) {
      visibility = "flex";
    }
    return (
      <div id="modal" style={{ display: "flex" }}>
        <h2>Create Channel</h2>
        <span>
          Channels are where your members communicate. They're best when
          organized around a topic - #proj-budget, for example.
        </span>
        <form>
          <label>Name</label>
          <input type="text" placeholder="e.g. plan-budget"></input>
          <label>Description</label>
          <input type="text"></input>
          <label className="subLabel">What’s this channel about?</label>
        </form>
        <div id="modalSubmitBtn">
          <button>Create</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Modal);
