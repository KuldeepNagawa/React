import { useState , useEffect} from "react";

export default function Counter (){
    let [countx , setCountx ] = useState(0);
    let [county , setCounty ] = useState(0);

    let inccCountx = () => {
        setCountx((currCount)  => currCount + 1);
    }

    let inccCounty = () => {
        setCounty((currCount)  => currCount + 1);
    }

    useEffect (function printSomething() {
        console.log("this is a side-efect");
    }, [countx]);

    return (
        <div>
            <h3>Countx = {countx} </h3>
            <button onClick={inccCountx}>+1</button>
            <h3>County = {county} </h3>
            <button onClick={inccCounty}>+1</button>
        </div>
    )
}