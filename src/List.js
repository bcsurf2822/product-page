import { useEffect, useState } from "react";

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
    {loading ? (
      <p>Loading data...</p>
    ) : (
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <p>Category: {item.category}</p>
            <img src={item.image} alt={item.name} />
          </li>
        ))}
      </ul>
    )}
  </div>
  );
};

export default Page;
