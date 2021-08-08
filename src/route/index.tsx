import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import Modal from "../pages/Modal";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import ImageView from "../pages/ImageView";
import Location from "history";

interface LocationProps {
  background: Location.Location;
}

function ModalSwitch() {
  let location = useLocation<LocationProps>();
  let background = location.state && location.state.background;
  console.log("ModalSwitch", location);

  return (
    <div>
      <Switch location={background || location}>
        <Route exact path="/" children={<Home />} />
        <Route path="/gallery" children={<Gallery />} />
        <Route path="/img/:id" children={<ImageView />} />
      </Switch>

      {/* Show the modal when a background page is set */}
      {background && <Route path="/img/:id" children={<Modal />} />}
    </div>
  );
}
export default function RoutesContainer() {
  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}
