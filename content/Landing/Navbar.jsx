import React, { useLayoutEffect, useEffect, useState } from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Menu, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Collapse from "@material-ui/core/Collapse";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles({
  NavTopDesktop: {
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
  NavDesktop: {
    width: "100%",
    backgroundColor: "white",
  },
  NavTopMenu: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-evenly",
    padding: "50px 8px",
    fontWeight: "bold",
    "& a": {
      textDecoration: "none",
      color: "black",
    },
  },
  NavMenu: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-evenly",
    padding: "18px 8px",
    fontWeight: "bold",
    "& a": {
      textDecoration: "none",
      color: "black",
    },
  },
  NavMenuMobile: {
    display: "flex",
    height: 200,
    width: 150,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
});

const Navbar = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 1224px)");
  const [position, setPosition] = useState(0);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleScroll = () => {
    const getPosition = window.pageYOffset;
    console.log(getPosition);
    setPosition(getPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <AppBar
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "black",
          }}
        >
          <div></div>
          <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon style={{ color: "white", float: "right" }} />
          </IconButton>
        </AppBar>
      ) : position >= 10 ? (
        <Collapse in={position >= 10 && true} timeout={10000}>
          <AppBar className={classes.NavDesktop}>
            <NavMenu position={false} />
          </AppBar>
        </Collapse>
      ) : (
        <div className={classes.NavTopDesktop}>
          <NavMenu position={true} />
        </div>
      )}
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <NavMenu mobile={true} />
      </Menu>
    </div>
  );
};

const NavMenu = ({ position, mobile }) => {
  const classes = useStyles();

  return (
    <div
      className={
        mobile
          ? classes.NavMenuMobile
          : position
          ? classes.NavTopMenu
          : classes.NavMenu
      }
    >
      <Link href="#home">Beranda</Link>
      <Link href="#aboutus">Tentang Kami</Link>
      <Link href="#management">Fasilitas</Link>
      <Link href="#contact">Kontak</Link>
      <Link href="#">Masuk</Link>
    </div>
  );
};

export default Navbar;
