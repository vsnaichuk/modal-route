import React from "react";
interface ThumbnailProps {
  color: string;
}
const Thumbnail: React.FC<ThumbnailProps> = ({ color }) => {
  return (
    <div
      style={{
        width: 50,
        height: 50,
        background: color
      }}
    />
  );
};

export default Thumbnail;
