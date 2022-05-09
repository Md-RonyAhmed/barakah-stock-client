import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddProduct from "./Pages/AddProduct/AddProduct";
import RequireAuth from "./Pages/Authentication/RequireAuth/RequireAuth";
import SignIn from "./Pages/Authentication/SignIn/SignIn";
import SignUp from "./Pages/Authentication/SignUp/SignUp";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home/Home";
import ManageInventories from "./Pages/ManageInventories/ManageInventories";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import NotFound from "./Pages/Shared/NotFound/NotFound";


function App() {
  return (
    <div className="bg-gray-50">
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/blogs/details"
          element={
            <RequireAuth>
              <BlogDetails />
            </RequireAuth>
          }
        />
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <ProductDetails />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<SignIn></SignIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>} />
        <Route
          path="/manage"
          element={
            <RequireAuth>
              <ManageInventories />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/add"
          element={
            <RequireAuth>
              <AddProduct />
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
