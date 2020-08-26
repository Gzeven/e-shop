import React from "react";
import "./collection-preview.styles.scss";
import { Link } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items, routeName }) => (
  <div className="collection-preview">
    <Link to={`/winkel/${routeName}`}>
      <h1 className="title">Ga naar {title} collectie </h1>
    </Link>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
