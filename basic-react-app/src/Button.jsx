function handleClick(event) {
    console.log("Hello!");
    console.log(event);
}

function printBye() {
    console.log("bye!");
}
export default function Button(){
    return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p onMouseOver={printBye}>Hey Everyone bye bye</p>
      </div>);
} 