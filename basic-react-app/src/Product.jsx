import "./Product.css";
import Price from "./Price.jsx";
function Product({title,idx}) {
    let oldPrice = ["12,495", "11,900", "1,599", "599"];
    let newPrice = ["8,999", "9,199", "899", "278"];
    let Description =[
        ["8,000 DPI", "5 Programmable buttons"],
        ["intuitive surface", "designed for iPad Pro"],
        [ "design for iPad Pro","intuitive surface"],
        [ "wireless", "optical orientation"]
    ];
    return (
        <div className="Product" style={{backgroundColor: "skyblue"}}>
            <h4>{title}</h4>
            <p>{Description[idx][0]}</p>
            <p>{Description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    );
} 

export default Product;