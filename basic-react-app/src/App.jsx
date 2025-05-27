import './App.css'
import Title from './Title.jsx';
import ProductTab from './ProductTab.jsx';
import MsgBox from "./MsgBox.jsx";



function App() {
  return (<div>
    <MsgBox userName="Kuldeep" textColor="blue"/>;
    <ProductTab/>;
  </div>);
}

export default App
