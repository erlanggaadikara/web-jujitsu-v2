import React from "react";
import Maps from "react-iframe";
import { makeStyles } from "@material-ui/core/styles";
import RoomIcon from "@material-ui/icons/Room";
import MarkunreadIcon from "@material-ui/icons/Markunread";
import PhoneIcon from "@material-ui/icons/Phone";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#F0F0F0",
    padding: 60,
    "& h1": {
      fontWeight: "bold",
      marginBottom: 30,
    },
  },
  container: {
    display: "flex",
  },
});

const Contact = () => {
  const classes = useStyles();
  return (
    <div id="contact" className={classes.root}>
      <h1 className="w3-center">Kontak</h1>
      <div style={{ display: "flex", height: 500 }} className="w3-row-padding">
        <div className="w3-col w3-left w3-large">
          <RoomIcon fontSize="large" />
          <p>Jl. Rungkut Madya, Surabaya</p>
          <PhoneIcon fontSize="large" />
          <p>Phone/Whatsapp: +62 87798018468</p>
          <MarkunreadIcon fontSize="large" />
          <p>Email: jujitsu.upnvjatim@gmail.com</p>
        </div>
        <div className="w3-col w3-hide-small">
          <Maps
            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.1812398929715!2d112.78818411426963!3d-7.333532374163298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fab87edcad15%3A0xb26589947991eea1!2sUniversitas%20Pembangunan%20Nasional%20%E2%80%9CVeteran%E2%80%9D%20Jawa%20Timur!5e0!3m2!1sen!2sid!4v1598684859017!5m2!1sen!2sid"
            className="w3-right"
            width={500}
            height={400}
            frameborder="0"
            style={{ border: "0" }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
            position="relative"
          />
        </div>
      </div>
      <div style={{ marginTop: 60 }} className="w3-hide-large w3-hide-medium">
        <Maps
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.1812398929715!2d112.78818411426963!3d-7.333532374163298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fab87edcad15%3A0xb26589947991eea1!2sUniversitas%20Pembangunan%20Nasional%20%E2%80%9CVeteran%E2%80%9D%20Jawa%20Timur!5e0!3m2!1sen!2sid!4v1598684859017!5m2!1sen!2sid"
          width="100%"
          height={300}
          frameborder="0"
          style={{ border: "0" }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
          position="relative"
        />
      </div>
    </div>
  );
};

export default Contact;
