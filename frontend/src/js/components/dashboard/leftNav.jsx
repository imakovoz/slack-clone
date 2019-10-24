import React from "react";
import { Link, withRouter } from "react-router-dom";

class LeftNav extends React.Component {
  constructor(props) {
    super(props);
    this.addThread = this.addThread.bind(this);
    this.deleteThread = this.deleteThread.bind(this);
    this.updateThread = this.updateThread.bind(this);
  }

  addThread(e) {
    e.preventDefault();
    if (this.props.modalVis) {
      this.props.updateModal(false);
    } else {
      this.props.updateModal(true);
    }
  }

  openThread(e) {
    e.preventDefault();
  }

  deleteThread(e) {
    e.preventDefault();
    this.props.deleteThread(e.target.className);
    // console.log("initial delete", e.target.className);
  }

  updateThread(e) {
    this.props.updateThread(e.target.className);
  }

  render() {
    // console.log(this.props.threads);
    if (this.props.threads[0]) {
      return (
        <div id="LeftNav">
          <div id="newThread">
            <span>Threads</span>
            <img
              src="https://cdn2.iconfinder.com/data/icons/circles-2/100/sign-plus-512.png"
              onClick={this.addThread}
              id="addThread"
            />
          </div>
          <ul id="threadsContainer">
            {this.props.threads.map((thread, i) => {
              return (
                <div className="threadListing" key={i}>
                  <span onClick={this.updateThread} className={thread._id}>
                    # {thread.title}
                  </span>
                  <span onClick={this.deleteThread} className={thread._id}>
                    X
                  </span>
                </div>
              );
            })}
          </ul>
        </div>
      );
    } else {
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
}

export default withRouter(LeftNav);
