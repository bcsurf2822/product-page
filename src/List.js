import { useEffect, useState } from "react";
import ProductDetails from "./ProductDetail";

const Page = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await fetch("http://localhost:8000/products");
      const productsData = await response.json();
      const dataArray = productsData.data;
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
    <ProductDetails products={products} load={loading} />
  </div>
  );
};

export default Page;
