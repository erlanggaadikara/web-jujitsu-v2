import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  subContainer1: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    backgroundColor: "#F0F0F0",
    "& h1": {
      fontWeight: "bold",
      textAlign: "center",
    },
  },
  subContainer2: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#f0ec06",
    "& h1": {
      margin: "60px 0px 0px",
      fontWeight: "bold",
      textAlign: "center",
    },
  },
  subContainer2ImgList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "90%",
    justifyContent: "center",
  },
  subContainer3: {
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    "& h1": {
      fontWeight: "bold",
      textAlign: "center",
    },
  },
  imgList: {
    marginTop: 40,
    width: "100%",
    overflowX: "auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
});

const Management = () => {
  const classes = useStyles();

  const [position, setPosition] = useState(0);

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

  const content = {
    img: [
      "/assets/logo-iji.jpg",
      "/assets/logo-pbji.png",
      "/assets/logoupnbaru.png",
    ],
    hexagon: [
      { text: "Target", img: "/assets/polygon1.png" },
      { text: "Large Target", img: "/assets/polygon2.png" },
      { text: "Sandbag", img: "/assets/polygon3.png" },
      { text: "Glove", img: "/assets/polygon4.png" },
      { text: "Mat", img: "/assets/polygon5.png" },
    ],
  };

  return (
    <div id="management" className={classes.root}>
      {/* <div className={classes.subContainer1}>
        <h1>Pengurus</h1>
        <div>
          <div></div>
          <div></div>
        </div>
      </div> */}
      <div className={classes.subContainer2}>
        <h1>Fasilitas</h1>
        <div className={classes.subContainer2ImgList}>
          {content.hexagon.map((item) => (
            <Fade in={position >= 1500 && true}>
              <div style={{ color: "white", margin: "20px 50px" }}>
                <Image src={item.img} width={230} height={230} quality={100} />
                <h2
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {item.text}
                </h2>
              </div>
            </Fade>
          ))}
        </div>
      </div>
      {/* <div className={classes.subContainer3}>
        <h1>Pendukung</h1>
        <div className={classes.imgList}>
          {content.img.map((item) => (
            <div style={{ margin: "0px 50px" }}>
              <Image src={item} width={133} height={131} layout="fixed" />
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Management;
