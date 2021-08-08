import { Typography } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import { GalleryParams } from "routes";
import Image from "../components/Image";
import { IMAGES } from "../constants/images";

export default function ImageView() {
  let { id } = useParams<GalleryParams>();
  let image = IMAGES[parseInt(id, 10)];

  if (!image) return <div>Image not found</div>;

  return (
    <div>
      <Typography variant="h2">{image.title}</Typography>
      <Image color={image.color} />
    </div>
  );
}
