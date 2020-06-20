import React, { Component } from "react";
import "./footer.css";
import Grid from "@material-ui/core/Grid";
import ContactText from "./footertext/contact";
import ShopLocationText from "./footertext/shoplocation";
import ServiceAreaText from "./footertext/servicearea";
import StoreHourText from "./footertext/storehours";
import Hidden from "@material-ui/core/Hidden";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <Grid
          container
          className="footerinfobox"
          style={{ marginBottom: "20px" }}
        >
          <Grid item xs={12} sm={4} md={3} lg={3}>
            <ContactText />
          </Grid>
          <Hidden smDown>
            <Grid item xs={12} sm={4} md={3} lg={3}>
              <ShopLocationText />
            </Grid>
          </Hidden>
          <Hidden mdDown>
            <Grid item xs={0} sm={0} md={3} lg={3}>
              <ServiceAreaText />
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={4} md={3} lg={3}>
            <StoreHourText />
          </Grid>
        </Grid>
      </div>
    );
  }
}