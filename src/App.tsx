import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";
// import {  } from '@mui/material';
import "./App.css";
import { ToastContainer, Slide } from "react-toastify";
import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";
import {
  SpinnerContainer,
  SpinnerOverlay,
} from "./components/with-spinner/with-spinner.styles";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useAppDispatch, useUserSelector } from "./hooks";
import { CheckOutPage } from "./pages/checkout-page/checkout-page.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { selectCurrentUser, setCurrentUser } from "./redux/user";

function App() {
  const [showPopUp, setShowPopUp] = useState<boolean>(true);
  //const isLoading = useCategoriesSelector(selectIsCategoriesFetching);
  const isLoading = false;
  const currentUser = useUserSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(
      async (userAuth: any) => {
        // check if signed in
        if (userAuth) {
          // Get back the userRef obj from our createUserProfileDocument method passing userAuth. If it exists in our db, will bring the data, if not will create a new one.
          const userRef = await createUserProfileDocument(userAuth);
          // subscribe/listen to any changes in userRef data
          userRef &&
            userRef.onSnapshot((snapShot: any) => {
              dispatch(
                setCurrentUser({
                  id: snapShot.id,
                  ...snapShot.data(),
                })
              );
            });
        } else {
          dispatch(setCurrentUser(userAuth));
        }
      }
    );
    return () => unsubscribeFromAuth();
  }, []);

  const RodalStyles = {
    height: "auto",
    bottom: "auto",
    top: "50%",
    transform: "translateY(-50%)",
  };

  return (
    <div className="wrapper">
      {isLoading ? (
        <SpinnerOverlay>
          <SpinnerContainer />
        </SpinnerOverlay>
      ) : (
        <React.Fragment>
          <Header hidden={false} />
          <ToastContainer
            autoClose={3000}
            className="toast-container"
            progressClassName="toastProgress"
            bodyClassName="toastBody"
            position="bottom-center"
            transition={Slide}
            newestOnTop
            draggable
            pauseOnHover
          />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/checkout" element={<CheckOutPage />} />
              <Route
                path="/signin"
                element={
                  currentUser ? <Navigate to="/" /> : <SignInAndSignUpPage />
                }
              />
            </Routes>
          </BrowserRouter>
          <Footer />
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
