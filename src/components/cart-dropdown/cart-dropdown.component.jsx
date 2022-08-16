import React, { useState, useRef, useEffect } from 'react';

import { useNavigate, withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartHidden, selectMenuActive } from '../../redux/cart/cart.selectors';
import { toggleCartHidden, closeCartDropdown } from '../../redux/cart/cart.actions';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

// import { CSSTransition } from 'react-transition-group';

import CheckOut from '../checkout/checkout.component';
import { CartDropdownContainer } from './cart-dropdown.styles';
import { useCartSelector } from '../../hooks';

const CartDropdown = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const hidden = useCartSelector(selectCartHidden);
  const menuActive = useCartSelector(selectMenuActive);
  const node = useRef();

  useOnClickOutside(node, () => dispatch(closeCartDropdown()));

  const handleGoToCheckOut = () => {
    dispatch(closeCartDropdown());
    navigate('/checkout', 
      { from: navigate.useMatch.active,
        active: 'cart',
        isMobile: false,
      })
  }

  return (
    <CartDropdownContainer>
      <CheckOut 
        hidden={hidden} 
        isDropdown={true} 
        goToCheckOut={() => handleGoToCheckOut()}
        active={menuActive}
      />
    </CartDropdownContainer>
  )
};

export default CartDropdown;