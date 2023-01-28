import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Body,
  BackgroundImage,
  DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const clickHandler = (e) => {
    navigate(route);
  };
  return (
    <DirectoryItemContainer key={category.id} onClick={clickHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h1>{title.toUpperCase()}</h1>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
