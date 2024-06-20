import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthProvider from "./context/AuthenticationContext";
import LoginPage from "./pages/LoginPage";
import RegisterationPage from "./pages/RegisterationPage";
import UserDashboardPage from "./pages/UserDashboardPage";
import PrivateRoute from "./utils/PrivateRoute";
import DataPage from "./pages/DataPage";
import AirtimePage from "./pages/AirtimePage";
import CableSubPage from "./pages/CableSubPage";
import ProductProvider from "./context/ProductContext";
import ElectricityBillPage from "./pages/ElectricityBillPage";
import ProfilePage from "./pages/ProfilePage";
import TransactionHistoryPage from "./pages/TransactionHistoryPage";
import { WalletProvider } from "./context/WalletContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProductProvider>
          <WalletProvider>
            <Routes>
              <Route element={<HomePage />} path="/" />
              <Route element={<LoginPage />} path="/authentication/login" />
              <Route
                element={<RegisterationPage />}
                path="/authentication/register"
              />
              <Route element={<PrivateRoute />}>
                <Route element={<UserDashboardPage />} path="/user/dashboard" />
              </Route>
              <Route element={<PrivateRoute />}>
                <Route
                  element={<DataPage />}
                  path="/user/dashboard/services/data"
                />
              </Route>
              <Route element={<PrivateRoute />}>
                <Route
                  element={<AirtimePage />}
                  path="/user/dashboard/services/airtime"
                />
              </Route>
              <Route element={<PrivateRoute />}>
                <Route
                  element={<CableSubPage />}
                  path="/user/dashboard/services/cable subscription"
                />
              </Route>
              <Route element={<PrivateRoute />}>
                <Route
                  element={<ElectricityBillPage />}
                  path="/user/dashboard/services/electricity bill"
                />
              </Route>
              <Route element={<PrivateRoute />}>
                <Route
                  element={<ProfilePage />}
                  path="/user/dashboard/profile"
                />
              </Route>
              <Route element={<PrivateRoute />}>
                <Route
                  element={<TransactionHistoryPage />}
                  path="/user/dashboard/transactions"
                />
              </Route>
            </Routes>
          </WalletProvider>
        </ProductProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
