import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import CateogiresPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

const Shop = () => {
  return (
    <Fragment>
      <Routes>
        <Route index element={<CateogiresPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </Fragment>
  );
};

export default Shop;
