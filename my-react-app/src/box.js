import './box.css';
import Score from './BT';
function TextBox(props) {
    const{des,URL,Topic,header} = props;
    return (
        <header className="text-box">
            <div className="kaopat">
            <h2>{Topic}</h2>
            <h3>{header}</h3>
                <p>{des}</p>
            </div>
            <div className = "img1"> <img src = {URL} alt = "kaopat"/> </div>
            
            <div className='score'><Score></Score></div>

        </header>
    );

}

export default TextBox;