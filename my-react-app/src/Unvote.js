import React from "react";
import './Bt.css';

class Unvote extends React.Component {
    onTrigger = () => {
        this.props.parentCallback("Unvote");
    };
  
    render() {
      return (
        <div className = "Vote">
          <button onClick={this.onTrigger}>Click to Unvote</button>
        </div>
      );
    }
}
export default Unvote;