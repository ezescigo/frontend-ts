import React, { useEffect } from 'react';
import { Route, useNavigate, Routes, useMatch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import CollectionPageContainer from '../../components/collection/collection.container';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import { useAppDispatch } from '../../hooks';

const ShopPage: React.FC = (props) => {
  console.log('rendering shoppage');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  //const match = useMatch();
  
  // const {
  //   categories,
  //   error: errorCategories,
  //   loading: loadingCategories,
  // } = categoryList;

  useEffect(() => {
  }, []);

  return (
    <div className='shop-page'>
      <Routes>
        <Route 
          // path={`${match.path}`} 
          path={'/shop/:category'}
          element={<CollectionPageContainer {...props} />}
        />
        <Route 
          // path={`${match.path}/:category`} 
          element={<CollectionPageContainer {...props} />}
        />
        <Route 
          // path={`${match.path}/:category/:subcategory`} 
          element={<CollectionPageContainer {...props} />}
        />
      </Routes>
    </div>
  );
};

export default ShopPage;


{/* <Route 
path={`${match.path}/:sectionId/:categoryId`} 
render={(props) => (
  <CollectionPageContainer {...props} />
)}
/> */}