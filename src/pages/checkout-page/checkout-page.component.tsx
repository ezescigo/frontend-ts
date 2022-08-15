import React from "react";
import { useLocation } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import CheckOut from "../../components/checkout/checkout.component";
import { useAppSelector } from "../../hooks";
import { selectMobileView } from "../../redux/app";
import { DropdownMenus } from "../../redux/cart/cart.types";
import "./checkout-page.styles.scss";

interface CheckOutPageProps {}

export const CheckOutPage = (props: CheckOutPageProps) => {
  const mobileView = useAppSelector(selectMobileView);
  const location = useLocation();

  return (
    <div className="checkout-page">
      {mobileView ? (
        <CheckOut active={DropdownMenus.CART} />
      ) : (
        <div>desktop checkout page</div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  mobileView: selectMobileView,
});
