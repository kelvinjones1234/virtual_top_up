import { createContext, React, useEffect, useState } from "react";
import axios from "axios";
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [dataNetworks, setDataNetworks] = useState([]);
  const [productData, setProductData] = useState([]);
  const [airtimeNetworks, setAirtimeNetworks] = useState([]);
  const [cableCategories, setCableCategories] = useState([]);
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    // Fetch all data networks
    axios
      .get("http://127.0.0.1:8000/api/data-network/")
      .then((response) => setDataNetworks(response.data))
      .catch((error) => console.error("Error fetching networks:", error));
  }, []);

  useEffect(() => {
    // Fetch all airtime networks
    axios
      .get("http://127.0.0.1:8000/api/airtime-network/")
      .then((response) => setAirtimeNetworks(response.data))
      .catch((error) => console.error("Error fetching networks:", error));
  }, []);

  useEffect(() => {
    // Fetch all cable category
    axios
      .get("http://127.0.0.1:8000/api/cable-subscription/category/")
      .then((response) => setCableCategories(response.data))
      .catch((error) => console.error("Error fetching networks:", error));
  }, []);

  useEffect(() => {
    const products = async () => {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/product-categories/"
      );
      const data = response.data;
      setProductData(data);
    };

    products();
  }, []);



  const contextData = {
    dataNetworks: dataNetworks,
    productData: productData,
    airtimeNetworks: airtimeNetworks,
    cableCategories: cableCategories,
  };
  return (
    <ProductContext.Provider value={contextData}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
