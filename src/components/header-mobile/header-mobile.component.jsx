import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCollectionsForPreview } from '../../redux/collections/collections.selectors';
import { selectIsCollectionFetching } from '../../redux/collections/collections.selectors';
import { selectWishlistItemsCount } from '../../redux/wishlist/wishlist.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { auth } from '../../firebase/firebase.utils';
import { useOnClickOutside } from '../../hooks';
import useDebounce from '../../hooks/useDebounce';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import HeaderSideBar from '../header-sidebar/header-sidebar.component';
import { HeaderContainer, OptionsContainer, OptionLink, LogoContainer, LogoText } from './header-mobile.styles.jsx';
import NavbarMenu from '../navbar-menu/navbar-menu.component';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { IoPerson, IoPersonOutline } from 'react-icons/io5';

import {useSpring, useTransition, animated, config} from 'react-spring';
import { RiScalesLine } from 'react-icons/ri';


const HeaderMobile = ({ hidden, isxsdevice, currentUser, sections, isLoading,  wishlistItemCount, toggleCartHidden, location }) => {

  const slide = useTransition(!hidden, null, {
    from: { opacity: 0, transform: "translateY(0px)", transform: "scale(0)" },
    enter: { opacity: 1, transform: "translateY(0px)", transform: "scale(1)" },
    leave: { opacity: 0, transform: "translateY(-100px)" },
    });

  const fadeStyles = useSpring({
    config: { ...config.stiff },
    from: { zIndex: -50, opacity: 0, transform: "translateY(-100px)" },
    to: {
      opacity: !hidden ? 1 : 0,
      transform: hidden ? "translateY(-100px)" : "translateY(0px)",
      zIndex: hidden ? -50 : 30,
    }
  });

  const [state, setState] = useState({
    prevScrollPos: 0,
    visible: true
  });

  const { prevScrollPos, visible } = state;

  const handleScroll = useDebounce(() => {
    
    const currentScrollPos = window.pageYOffset;
    const visible = (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 30) || window.scrollY < 100;
  
    setState({
      prevScrollPos: currentScrollPos,
      visible: visible
    });
  }, 50);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // cleaning up listener
    return () => window.removeEventListener('scroll', handleScroll);
  },[prevScrollPos, visible]);

  const headerContainerStyles = {
    transition: 'top 0.6s ease' 
  }

  return(
    <HeaderContainer style={{ ...headerContainerStyles, top: visible ? '0' : '-200px' }}>
      <HeaderSideBar sections={sections} isLoading={isLoading} />
      <LogoContainer to='/' isxsdevice={isxsdevice}>
        <LogoText>ZURÜCK</LogoText>
      </LogoContainer>
      <OptionsContainer>
        
        { currentUser ? 
          (
            <OptionLink as='div' onClick={() => auth.signOut()}>
              <IoPerson size={30} className='navbar-icon' />
            </OptionLink>
          ) : (
            <OptionLink to='/signin'>
              <IoPersonOutline size={30} className='navbar-icon' />
            </OptionLink>
          )}
        <OptionLink to={{ 
            pathname: '/checkout', 
            state: { from: location.pathname,
                    active: 'wishlist'
                    }
        }}>
          { wishlistItemCount > 0
            ? (<div>
                <AiFillHeart size={30} className='navbar-icon' />
              </div>)
            : <AiOutlineHeart size={30} className='navbar-icon' />
          }       
        </OptionLink>

        <OptionLink 
            to={{ 
              pathname: '/checkout', 
              state: { from: location.pathname,
                       active: 'cart' 
                      }
              }}
           >
          <CartIcon mobile={true} isXsDevice={isxsdevice} onClick={() => toggleCartHidden()} />
        </OptionLink>
      </OptionsContainer>
    </HeaderContainer>
  )
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  collections: selectCollectionsForPreview,
  isLoading: selectIsCollectionFetching,
  wishlistItemCount: selectWishlistItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderMobile));