import { useEffect, useState } from "react";
import Nav from "./NavBar";
import ProductDetails from "./ProductDetail";




const Page = ({ onSearch, chooseCategory}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [byCategory, setByCategory] = useState("");
  const [byPrice, setByPrice] = useState("");



  async function fetchProducts (query, price, category) {
    try {
      const filter = [];
       if (query) filter.push(`?query=${query}`)
       if (category) filter.push(`?category=${category}`)
      
      // if (price) filter.push(`?price=${price}`)
      const allFilters = filter.length > 0 ? `${filter.join('&')}` : "";
      const response = await fetch(`http://localhost:8000/products${allFilters}`);
      console.log(allFilters)
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

  // const filterByPrice = (price) => {
  //   setByPrice(price)
  //   fetchProducts("", price)
  // }

  const filterByCategory = (category) => {
    fetchProducts(null, null, category, );
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
    <Nav onSearch={fetchProducts} chooseCategory={filterByCategory} />
    <ProductDetails products={products} load={loading} />
  </div>
  );
};

export default Page;
