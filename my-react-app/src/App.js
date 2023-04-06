import './App.css';
import TextBox from './box';

function App() {
  return (
    <div className="Container">
      <div className= "Ahan">
        <h1>
          โหวตอาหาร
        </h1>
      </div>
      <TextBox Topic = "อาหารคาว" header = "ข้าวผัด" des = "Fried rice is the ultimate family-friendly dish that yields maximum flavor without fuss.Loaded with tender sauteed veggies and delicious bits of scrambled egg,this top-rated recipe makes it easy to recreate a takeout favorite from home in just 20 minutes." URL = "/img/kaopat.jpg"/>
      <TextBox Topic = "อาหารหวาน" header = "บัวลอย" des = "In Thai the word bua means “lotus” and loy means “floating,” so put together the name of this coconut milk dessert translates as “floating lotus.” More specifically the lotus reference is with regards to the seeds since these little sticky rice dumplings are a similar size." URL = "/img/bauloy.jpg"/>
    </div>
  );
}

export default App;
