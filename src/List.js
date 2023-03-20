import { useEffect, useState } from "react";
import Nav from "./NavBar";
import ProductDetails from "./ProductDetail";

const Page = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [search, setSearch] = useState("");

  const fetchData = async (query, category, sort) => {
    setLoading(true);

    const api = "http://localhost:8000/products"
    const parameters = {
      query: query || undefined,
      sort: sort || undefined,
      category: category || undefined
    };

    api.search = new URLSearchParams(parameters).toString();

    try {
      const response = await fetch(api);
      const data = await response.json();
      setProducts(data.products)
    } catch (err) {
      console.error("Error", err);
    } finally {
      setLoading(false);
    }
  }

  // async function fetchData(query) {
  //   try {
  //     if (!query) {
  //       query = "";
  //     }
  //     const response = await fetch(`http://localhost:8000/products${query}`);
  //     console.log(response)
  //     const productsData = await response.json();
  //     const dataArray = productsData.products
  //     console.log(dataArray)

  //     setProducts(dataArray);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error("Data Error", error);
  //     setLoading(false);
  //   }
  // }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
    <Nav onSearch={fetchData} />
    <ProductDetails products={products} load={loading} />
  </div>
  );
};

export default Page;
