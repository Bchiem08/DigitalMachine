import React, { Component } from "react";
import NavbarExport from "../../Navbar/NavbarExport";
import Footer from "../../Footer/footer";
import "./photos.css";
import "./Gallery/gallery";
import Gallery from "./Gallery/gallery";

export default class PhotosPage extends Component {
  render() {
    return (
      <div>
        <NavbarExport />
        <div className="photospage-background">
          <div className="photos-headerbox">
            <header className="photos-header">Photos</header>
          </div>
          <Gallery />
          <div style={{ height: "200px" }} />
        </div>
        <Footer />
      </div>
    );
  }
}
