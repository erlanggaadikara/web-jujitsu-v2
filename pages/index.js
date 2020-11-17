import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useLayoutEffect, useEffect } from "react";
import {
  Navbar,
  Homes,
  AboutUs,
  Management,
  Contact,
} from "../content/Landing";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    scrollBehavior: "smooth",
    userSelect: "none",
  },
  rootContent: {
    display: "flex",
    flexDirection: "column",
  },
});

export default function Home() {
  const classes = useStyles();
  const [visible, setVisible] = React.useState(false);
  const menuHandle = () => {
    let scrollY = window.scrollY;
    let menuEl = document.getElementById("navbar");
    if (scrollY > 0) {
      menuEl?.classList.add("scroll");
    } else {
      menuEl?.classList.remove("scroll");
    }
  };

  const handleScroll = () => {
    menuHandle();
  };

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset !== 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>
      <Head>
        <title>UKM Jujitsu UPN "Veteran" Jawa Timur</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={classes.root}>
        <Navbar />
        <div id="home" className={classes.rootContent}>
          <Homes />
          <AboutUs />
          <Management />
          <Contact />
        </div>
      </div>
    </>
  );
}
