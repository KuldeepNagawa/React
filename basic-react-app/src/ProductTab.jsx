import Product from "./Product.jsx";
import "./ProductTab.css"

function ProductTab() {
    return (
     <div className="ProductTAb">
      <Product title="mobile" price="20,000"/>
      <Product title="laptop" price="50,000"/>
      <Product title="pen" price="10 "/>
     </div>
    );
}

export default ProductTab;