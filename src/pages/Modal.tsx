import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { IMAGES } from "../constants/images";
import Image from "../components/Image";
import { GalleryParams } from "routes";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function Modal() {
  let history = useHistory();
  let { id } = useParams<GalleryParams>();
  let image = IMAGES[parseInt(id, 10)];

  const [open, setOpen] = React.useState(false);

  let back = React.useCallback(() => {
    history.goBack();
  }, [history]);

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      back();
    }, 100);
  };

  React.useEffect(() => {
    setOpen(true);
  }, [id]);

  if (!image) return null;

  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth={"xl"}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{image.title}</DialogTitle>
        <DialogContent>
          <Image color={image.color} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="contained">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
