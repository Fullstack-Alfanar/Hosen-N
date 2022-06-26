import "./App.css";
import Shoes from "./Shoes";
import Clock from "./Time";
function App() {
  return (
    <div className="App">
      <Clock />
      <header className="App-header">
        <div className="container">
          <Shoes name="Adidas" size={40} price={"150$"} img={"https://static.onecms.io/wp-content/uploads/sites/23/2022/03/30/adidas-womens-cloudfoam-pure-running-shoe-tout.jpg"}/>
          <Shoes name="Nike" size={43} price={"180$"} img={"https://s3.amazonaws.com/nikeinc/assets/84925/Sp19_BB_Nike_Adapt_20181218_NIKE0538_Detail5_rectangle_1600.jpg"}/>
          <Shoes name="Replay" size={42} price={"120$"} img={"https://en.officeshoes.hu/product_images/2022ss/big/rs630069t-003.jpg"}/>
          <Shoes name="Dodge & Gabbana" size={45} price={"250$"} img={"https://img.ihahabags.ru/201906/s-489178-dolce-gabbana-d-g-shoes-for-women.jpg"}/>
          <Shoes name="New Balance" size={44} price={"220$"} img={"https://i8.amplience.net/s/scvl/96754_210552_SET/3"}/>
        </div>
      </header>
    </div>
  );
}

export default App;
