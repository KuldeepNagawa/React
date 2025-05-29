import './App.css';
import LudoBoard from "./LudoBoard.jsx";
import TodoList from "./TodoList.jsx";
import Lottery from "./Lottery.jsx";
import Ticket from "./Ticket.jsx";
import TicketNum from './TicketNum.jsx';
import { sum } from './helper.js';


function App() {
  let winCondition = (ticket) =>{
    return ticket[0] === 0;
  }
  return (
    <>
      <Lottery n={3} winCondition={winCondition}/>
    </>
  )
}

export default App
