import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { getCatergoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategoriesMap } from "../../store/categories/category.action";
import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCatergoriesAndDocuments("categories");
      dispatch(setCategoriesMap(categoryMap));
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
