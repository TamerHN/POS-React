import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "./Components/LoginForm.jsx";
import FetchedDataContext from "./Contexts/FetchedDataContext.jsx";
import Categories from "./Pages/Categories.jsx";
import POS from "./Pages/POS.jsx";
import Products from "./Pages/Products.jsx";

const App = () => {
  const [productsContext, setProductsContext] = useState([
    {
      code: "1",
      name: "Cucumber",
      category: "Vegetables",
      price: "15",
      image:
        "https://purepng.com/public/uploads/large/purepng.com-cucumbercucumberfoodvegetablegreen-cucumber-17015272508067ypbj.png",
      id: "a4a23ac1-7198-4f89-8cc1-b2f0e2d84004",
    },
    {
      code: "2",
      name: "Oranges",
      category: "Fruits",
      price: "15",
      image:
        "https://freepngimg.com/thumb/avocado/41736-1-half-orange-hd-hd-image-free-png.png",
      id: "196755ea-5de0-457c-92cd-f04bc3db0e8c",
    },
    {
      code: "3",
      name: "Tomato",
      category: "Vegetables",
      price: "18",
      image:
        "https://purepng.com/public/uploads/large/purepng.com-tomatotomatotomatossalad-fruitred-fruit-1701527316031ytkdc.png",
      id: "3413fd71-dc62-4115-a716-1caf64550419",
    },
    {
      code: "4",
      name: "Potato",
      category: "Vegetables",
      price: "8",
      image:
        "https://purepng.com/public/uploads/large/purepng.com-potatopotatofood-cropsvegetablepotatos-1701527311051rn2f4.png",
      id: "c365c654-5b3f-4b0f-ae7c-18ad28a671b4",
    },
    {
      code: "10",
      name: "Apple",
      category: "Fruits",
      price: "5",
      image:
        "https://purepng.com/public/uploads/large/purepng.com-applesapplegreenhealthycut-641522015599w2vt3.png",
      id: "d5e8b7c7-3f95-4d59-82c5-ce37e06d9c25",
    },
    {
      code: "6",
      name: "Strawberry",
      category: "Fruits",
      price: "5",
      image:
        "https://purepng.com/public/uploads/large/purepng.com-strawberrystrawberrygenus-fragariastrawberriesfruitbotanical-berrybright-red-colorjuicy-texture-1701527398814xm3ju.png",
      id: "c22887a5-3680-4e04-99de-585382efd47d",
    },
    {
      code: "7",
      name: "Lemon",
      category: "Vegetables",
      price: "5",
      image:
        "https://purepng.com/public/uploads/large/purepng.com-lemonlemonfruittastyyellowfoodadd-331522507459yya95.png",
      id: "65ff1124-1d5e-4754-aa01-8b638ef97a39",
    },
    {
      code: "14",
      name: "Chocolate Cake",
      category: "Cakes",
      price: "55",
      image:
        "https://purepng.com/public/uploads/large/purepng.com-chocolate-cakechocolatechocolate-cakecakechocolate-gateausweet-1411527232001hyk12.png",
      id: "a16fa7e2-0615-4dd9-8f9f-9233c4e617f9",
    },
    {
      code: "155",
      name: "Meat",
      category: "Meat",
      price: "70",
      image:
        "https://purepng.com/public/uploads/large/purepng.com-meatmeatanimalfleshchicken-1411527788021fjgtk.png",
      id: "47f7aeaf-1353-45b2-a8bd-bf6d19244810",
    },
  ]);
  const [categContext, setCategContext] = useState([
    {
      name: "Fruits",
      id: "b7578b60-ef8f-4adc-bb16-dc34961c7b8b",
    },
    {
      name: "Vegetables",
      id: "eeff9bbd-f79b-4695-92f9-11f6bc58263c",
    },
    {
      name: "Cakes",
      id: "9fd0a76d-c18e-483c-88dc-04093a9dc12b",
    },
    {
      name: "Meat",
      id: "bd024418-d130-48b2-95dd-d52021e261e8",
    },
    {
      name: "Drinks",
      id: "2b23ca1c-c1cb-4927-bae6-66186d45f834",
    },
  ]);
  const [user, setUser] = useState("");

  const RequireAuth = ({ children }) => {
    return user ? children : <Navigate to="/login" />;
  };

  return (
    <FetchedDataContext.Provider
      value={{
        productsContext,
        setProductsContext,
        isLoadingProducts: false,
        categContext,
        setCategContext,
        isLoadingCategs: false,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm setUser={setUser} />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <POS />
              </RequireAuth>
            }
          />
          <Route
            path="/categories"
            element={
              <RequireAuth>
                <Categories />
              </RequireAuth>
            }
          />
          <Route
            path="/products"
            element={
              <RequireAuth>
                <Products />
              </RequireAuth>
            }
          />
          <Route
            path="/pos"
            element={
              <RequireAuth>
                <POS />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </FetchedDataContext.Provider>
  );
};
export default App;
