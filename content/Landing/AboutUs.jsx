import React, { useLayoutEffect, useEffect, useState } from "react";
import Image from "next/image";
import Slide from "@material-ui/core/Slide";
import Fade from "@material-ui/core/Fade";
import Carousel from "react-material-ui-carousel";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import InstagramEmbed from "react-instagram-embed";
import CountUp from "react-countup";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  section1: { backgroundColor: "white" },
  section1a: {
    margin: "60px 60px 30px",
    "& h1": { fontWeight: "bold", textAlign: "center" },
  },
  section1ab: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    "& p": {
      textAlign: "justify",
    },
  },
  section1ac: {
    [theme.breakpoints.down("sm")]: {
      width: 300,
    },
    [theme.breakpoints.up("lg")]: {
      width: 500,
    },
  },
  section1abc: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: 700,
  },
  section1abcd: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  sectionSlider: {
    marginTop: "20px",
  },
  section2: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    backgroundColor: "#f0ec06",
  },
  section2a: {
    width: "67vh",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "20px 0px",
    alignItems: "center",
    flexDirection: "column",
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
  section3: {},
  image: {
    width: 200,
    height: 300,
  },
}));

const AboutUs = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 1224px)");
  const [slide, setSlide] = useState(false);
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
    profil: [
      {
        title: "Apa itu UKM Jujitsu Honeybadger?",
        text: `UKM Jujitsu Honeyadger merupakan salah satu dari Unit Kegiatan
      Mahasiswa di Universitas Pembangunan Nasional "Veteran" Jawa Timur
      yang berlokasi di Jl. Rungkut Madya, Surabaya. UKM ini berada
      dalam naungan Institut Jujitsu Indonesia (IJI), organisasi jujitsu
      terbesar di Indonesia yang mendalami aliran I Kyushin Ryu.`,
      },
      {
        title: "Kenapa harus ikut Jujitsu?",
        text: `Jujitsu murni bela diri yang menggunakan teknik pukulan,
      tendangan, bantingan, serta kuncian. Tak hanya itu, dalam Jujitsu
      terdapat sebuah filosofi yang menjadi seseorang memiliki sifat
      kesatria, yaitu jujur, berani, dan bertanggung jawab.`,
      },
      {
        title: "Kenapa harus bergabung disini?",
        text: `Selain mendalami ilmu bela diri Jujitsu, kami juga menerapkan
      organisasi dengan aspek kekeluargaan dan gotong royong. Pendalaman
      dan pembekalan soft skill juga didapatkan disini seperti
      kepemimpinan, kecakapan atau komunikasi, etika dan eanggung jawab,
      kerja sama, serta kritis dalam memecahkan suatu masalah.`,
      },
    ],
    countMeter: [
      { number: 3, text: "Coach" },
      { number: 50, text: "Member" },
      { number: 16, text: "Alumni" },
    ],
    instagram: [
      <InstagramEmbed
        url="https://www.instagram.com/p/B6ewClOFUOb/"
        class="w3-card"
        style={{ width: "100%", margin: "10px 10px" }}
        hideCaption={true}
      />,
      <InstagramEmbed
        url="https://www.instagram.com/p/BaqPf9OBMGW/"
        class="w3-card"
        style={{ width: "100%", margin: "10px 10px" }}
        hideCaption={true}
      />,
      <InstagramEmbed
        url="https://www.instagram.com/p/B5RmyKFlxOo/"
        class="w3-card"
        style={{ width: "100%", margin: "10px 10px" }}
        hideCaption={true}
      />,
    ],
    imgSlider: [
      <Image src="/assets/img1.jpg" width={500} height={300} quality={100} />,
      <Image src="/assets/img2.jpg" width={500} height={300} quality={100} />,
      <Image src="/assets/img3.jpg" width={500} height={300} quality={100} />,
      <Image src="/assets/img4.jpg" width={500} height={300} quality={100} />,
      <Image src="/assets/img5.jpg" width={500} height={300} quality={100} />,
      <Image src="/assets/img6.jpg" width={500} height={300} quality={100} />,
      <Image src="/assets/img7.jpeg" width={500} height={300} quality={100} />,
    ],
    img: [
      "/assets/logo-iji.jpg",
      "/assets/logo-pbji.png",
      "/assets/logoupnbaru.png",
    ],
  };
  return (
    <div id="aboutus" className={classes.root}>
      <div className={classes.section1}>
        <div className={classes.section1a}>
          <Fade in={position >= 400 && true}>
            <h1>Tentang Kami</h1>
          </Fade>
          <div className={classes.section1ab}>
            <Fade in={position >= 400 && true}>
              <div>
                {content.profil.map((item) => (
                  <div className={classes.section1ac}>
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </Fade>
            <div className={classes.section1abc}>
              <div className={classes.section1abcd}>
                {!isMobile && (
                  <Fade in={position >= 400 && true}>
                    <Carousel
                      className={classes.sectionSlider}
                      autoPlay={true}
                      interval={3000}
                      indicators={false}
                      navButtonsAlwaysInvisible={true}
                      animation={"fade"}
                    >
                      {content.imgSlider.map((item) => item)}
                    </Carousel>
                  </Fade>
                )}
                <Slide direction="right" in={position >= 700 && true}>
                  <div style={{ textAlign: "end" }}>
                    <button className="w3-button w3-white w3-border w3-border-black w3-hover-blue">
                      Lebih dalam tentang kami
                    </button>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.section2}>
        {content.countMeter.map((item) => (
          <div className={classes.section2a}>
            <div>
              <h1
                style={{
                  textAlign: "center",
                  color: "black",
                  fontWeight: "bolder",
                  fontSize: 80,
                }}
              >
                <CountUp start={0} end={position <= 800 ? 0 : item.number} />
              </h1>
              <h2 style={{ color: "black", fontWeight: "bold" }}>
                {item.text}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className={classes.subContainer3}>
        <h1>Pendukung</h1>
        <Fade in={position >= 1143 && true}>
          <div className={classes.imgList}>
            {content.img.map((item) => (
              <div style={{ margin: "0px 50px" }}>
                <Image src={item} width={133} height={131} layout="fixed" />
              </div>
            ))}
          </div>
        </Fade>
      </div>
      <div style={{ backgroundColor: "#F0F0F0" }}>
        {/* <h1 style={{ fontWeight: "bold", textAlign: "center" }}>
          Aktivitas Sosial Media
        </h1>
        <div
          class="w3-row-padding w3-hide-small"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {content.instagram.map((item) => item)}
        </div> */}
        {/* <div
          class="w3-row-padding w3-hide-large w3-hide-medium"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Slider
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
            item={content.instagram}
            responsives={{ 3: { items: 1 } }}
          />
        </div> */}
      </div>
    </div>
  );
};

const Slider = (props) => {
  const { item, responsives } = props;
  const [state, setState] = useState({
    currentIndex: 0,
    itemsInSlide: 1,
  });

  const slidePrevPage = () => {
    const currentIndex = state.currentIndex - state.itemsInSlide;
    setState({ currentIndex });
  };

  const slideNextPage = () => {
    const { itemsInSlide } = state;
    const { length } = item;
    let currentIndex = state.currentIndex + itemsInSlide;
    if (currentIndex > length) currentIndex = length;

    setState({ currentIndex });
  };

  const handleOnSlideChange = (event) => {
    const { itemsInSlide, item } = event;
    setState({ itemsInSlide, currentIndex: item });
  };

  return (
    <div {...props}>
      <AliceCarousel
        items={item}
        autoPlay={true}
        autoPlayInterval={3000}
        fadeOutAnimation={false}
        dotsDisabled={true}
        buttonsDisabled={true}
        mouseTrackingEnabled={false}
        slideToIndex={state.currentIndex}
        responsive={responsives}
        onInitialized={handleOnSlideChange}
        onSlideChanged={handleOnSlideChange}
        onResized={handleOnSlideChange}
      />
    </div>
  );
};

export default AboutUs;
