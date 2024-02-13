import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import getProducts from "./services/products.js";
import ProductListing from "./components/productsListing/ProductListing.jsx";
function App() {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    (async () => {
      let data = await getProducts();
      console.log("Data received: ", data);
      if (data) {
        setProducts(data.products);
      }
    })();
  },[skip]);

  const handlePagination = useCallback(() => {
    setSkip(skip+10);
    console.log("skip is",skip);
  }, [skip])
  return (
    <>
      <h1>Home</h1>
      <ProductListing products={products} handler={handlePagination}/>
    </>
  );
}

export default App;
