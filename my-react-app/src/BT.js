import React from 'react';
import './Bt.css';
import Vote from './Vote';
import Unvote from './Unvote';

class Score extends React.Component {
    state = {msg: "Min"
    }
    handleCallback = (num) =>{
        if (num === 'Vote'){
            if (this.state.msg === 9 ){
                this.setState({msg: "Max"})
            }
            else if (this.state.msg === 'Min'){
                this.setState({msg: 1})
            }
            else if (this.state.msg === 'Max'){
                alert("Can not vote more")
            }
            else{
                this.setState({msg: this.state.msg +1 })
            }
        }
        if (num === 'Unvote'){
            if (this.state.msg === 0 ){
                this.setState({msg: "Min"})
            }
            else if (this.state.msg === 'Min'){
                alert("Can not unvote")
            }
            else if (this.state.msg === 'Max'){
                this.setState({msg: 9})
            }
            else{
                this.setState({msg: this.state.msg -1 })
            }
        }
        
    }
    render() {
        const {msg} = this.state;
        return(
            <div className = "BT">
                <div className = "Vote">
                    <Vote parentCallback = {this.handleCallback}/>   
                </div>
                <div className = "Score"> 
                    <h2>{msg}</h2> 
                </div>
                <div className = "Unvote">
                    <Unvote parentCallback = {this.handleCallback}/>   
                </div>
            </div>
        );
    }
}

export default Score;