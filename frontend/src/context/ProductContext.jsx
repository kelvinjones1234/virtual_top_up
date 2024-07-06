import { createContext, React, useEffect, useState } from "react";
import axios from "axios";
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [dataNetworks, setDataNetworks] = useState([]);
  const [productData, setProductData] = useState([]);
  const [airtimeNetworks, setAirtimeNetworks] = useState([]);
  const [cableCategories, setCableCategories] = useState([]);
  const [activePath, setActivePath] = useState(location.pathname);
  const [darkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState("dark");

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

  const handleThemeSettings = () => {
    setDarkMode((previous) => !previous);
    setTheme(theme == "dark" ? "light" : "dark");
  };

  useEffect(() => {
    theme == "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [handleThemeSettings]);

  const contextData = {
    dataNetworks: dataNetworks,
    productData: productData,
    airtimeNetworks: airtimeNetworks,
    cableCategories: cableCategories,
    darkMode: darkMode,
    theme: theme,
    setTheme: setTheme,
    setDarkMode: setDarkMode,
    handleThemeSettings: handleThemeSettings,
  };
  return (
    <ProductContext.Provider value={contextData}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
