import React, { Component } from "react"; 
import { FaAlignRight } from "react-icons/fa";
export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="footer">
        <div className="foot-center">
          <div className="foot-header">          
            {/* <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button> */}
          </div>
           
        </div>
      </nav>
    );
  }
}