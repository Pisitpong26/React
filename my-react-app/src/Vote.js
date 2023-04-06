import React from "react";
import './Bt.css';
class Vote extends React.Component {
    onTrigger = () => {
        this.props.parentCallback("Vote");
    };
  
    render() {
      return (
        <div className = "Vote">
          <button onClick={this.onTrigger}>Click to Vote</button>
        </div>
      );
    }
}
export default Vote;