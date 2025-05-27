import Product from "./Product.jsx";
import "./ProductTab.css"

function ProductTab() {
    let options = ["hi-tech","durable", "fast"];
    return (
     <div className="ProductTAb">
      <Product title="mobile" price={20000} features={options}/>
      <Product title="laptop" price={50000}/>
      <Product title="pen" price={10}/>
     </div>
    );
}

export default ProductTab;