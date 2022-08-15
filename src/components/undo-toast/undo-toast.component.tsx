import { useAppDispatch } from 'hooks';
import { Item } from 'models';
import React from 'react';
import { connect } from 'react-redux';

import { undo } from '../../redux/wishlist';
import './undo-toast.styles.scss';

interface UndoProps {
  removed: boolean,
  item: Item,
  closeToast?: any, 
  onUndo: () => void
}

const Undo = ({ removed, item, closeToast, onUndo }: UndoProps) => {
  const dispatch = useAppDispatch();
  const handleClick = () => {
    onUndo();
    dispatch(undo(item._id));
    closeToast();
  };

  return (
    <div className='undo-container'>
      {(removed)
      ? <h3>Item was removed from your Wishlist.</h3>
      : <h3>Item was added to your Wishlist.</h3>}
      <div onClick={ handleClick }>
        <span className='undo-button'>UNDO.</span>
      </div>
    </div>
  );
};

export default Undo;