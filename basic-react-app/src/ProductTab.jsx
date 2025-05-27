import Product from "./Product.jsx";
import "./ProductTab.css"

function ProductTab() {
    let styles = {
         display: "flex",
         flexWrap: "wrap",
         justifyCOntent: "center",
         allignItems: "center"
    }
    return (
     <div style={styles}>
      <Product title="Logitech MX Master" idx={0}/>
      <Product title="Apple Pencil {2nd Gen}" idx={1}/>
      <Product title="Zebronics Zeb-transformer" idx={2}/>
      <Product title="Peptonics Toad 23"idx={3}/>
     </div>
    );
}

export default ProductTab;