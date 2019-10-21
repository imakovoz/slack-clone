import React from "react";
import { Link, withRouter } from "react-router-dom";

class LeftNav extends React.Component {
  constructor(props) {
    super(props);
    this.addThread = this.addThread.bind(this);
  }

  addThread(e) {
    e.preventDefault();
    console.log("modalVis");
    console.log(this.props.modalVis);
    if (this.props.modalVis) {
      this.props.updateModal(false);
    } else {
      this.props.updateModal(true);
    }
  }

  render() {
    return (
      <div id="LeftNav">
        <div id="newThread">
          <span>Threads</span>
          <img
            src="https://cdn2.iconfinder.com/data/icons/circles-2/100/sign-plus-512.png"
            onClick={this.addThread}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(LeftNav);
