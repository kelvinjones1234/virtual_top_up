import { createContext, React, useEffect, useState, useContext } from "react";
import axios from "axios";
import { GeneralContext } from "./GeneralContext";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [dataNetworks, setDataNetworks] = useState([]);
  const [productData, setProductData] = useState([]);
  const [airtimeNetworks, setAirtimeNetworks] = useState([]);
  const [cableCategories, setCableCategories] = useState([]);
  const [activePath] = useState(location.pathname);
  
  const { api } = useContext(GeneralContext);


  useEffect(() => {
    api
      .get("data-network/")
      .then((response) => setDataNetworks(response.data))
      .catch((error) => console.error("Error fetching networks:", error));
  }, []);

  useEffect(() => {
    // Fetch all airtime networks
    api
      .get("airtime-network/")
      .then((response) => setAirtimeNetworks(response.data))
      .catch((error) => console.error("Error fetching networks:", error));
  }, []);

  useEffect(() => {
    // Fetch all cable category
    api
      .get("cable-subscription/category/")
      .then((response) => setCableCategories(response.data))
      .catch((error) => console.error("Error fetching networks:", error));
  }, []);

  useEffect(() => {
    const products = async () => {
      const response = await api.get("product-categories/");
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
