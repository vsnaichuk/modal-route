import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IMAGES } from "../constants/images";
import Thumbnail from "../components/Thumbnail";
import { Box, Grid, Typography } from "@material-ui/core";
const Item = (i: any) => {
  let location = useLocation();

  return (
    <Link
      to={{
        pathname: `/img/${i.id}`,
        // This is the trick! This link sets
        // the `background` in location state.
        state: { background: location }
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Thumbnail color={i.color} />
        <Typography variant="body1">{i.title}</Typography>
      </Box>
    </Link>
  );
};

function Gallery() {
  console.log("render Gallery");
  return (
    <Grid container spacing={3} direction="row" justify="center">
      {IMAGES.map((i) => (
        <Grid item key={i.id}>
          <Item {...i} />
        </Grid>
      ))}
    </Grid>
  );
}

export default React.memo(Gallery);
// export default Gallery;
