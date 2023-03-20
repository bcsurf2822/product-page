import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ProductDetails from "./ProductDetail";

const Page = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  async function fetchData(query) {
    try {
      if (query) {
        const queryResponse = await fetch(`http://localhost:8000/products${query}`);
      }
      const response = await fetch("http://localhost:8000/products");
      console.log(response)
      const productsData = await response.json();
      const dataArray = productsData.products
      console.log(dataArray)

      setProducts(dataArray);
      setLoading(false);
    } catch (error) {
      console.error("Data Error", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <NavBar />
    <ProductDetails products={products} load={loading} />
  </div>
  );
};

export default Page;
