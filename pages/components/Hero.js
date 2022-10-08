import Image from "next/image";
import React from "react";
import { createUseStyles } from "react-jss";

const Hero = () => {
  const classes = useStyles({});
  return (
    <div className={classes.heroWrapper}>
      {/* <div className={classes.heroWrapperIn}> */}
      <div className={classes.imageWrapper}>
        <div className={classes.title}>
          <h3>Travel with us</h3>
        </div>
        <div className={classes.image1}></div>
        <div className={classes.image2}></div>
      </div>
      <div className={classes.paragWrapper}>
        <h2>KAZAMIGA TRAVEL & ADVENTURE</h2>
        <p>
          Kazamiga is a travel and lifestyle blog featuring destination guides,
          travel photography, food guides, and a healthy dose of adventure. From
          the UK and wider Europe to Africa, Asia and the Americas, Kazamiga is
          a travel and lifestyle blog featuring destination guides, travel
          photography, food guides, and a healthy dose of adventure. From the UK
          and wider Europe to Africa, Asia and the Americas,{" "}
        </p>
        <p>
          Kazamiga is a travel and lifestyle blog featuring destination guides,
          travel photography, food guides, and a healthy dose of adventure.{" "}
        </p>
      </div>
    </div>
    // </div>
  );
};
const useStyles = createUseStyles({
  heroWrapper: {
    display: "flex",
    width: "100%",
    height: "90vh",
    background: "#F9F3EA",
  },

  imageWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    marginTop: 50,
    marginBottom: 50,
    marginLeft: 50,
  },
  paragWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "50%",
    marginLeft: 100,
    marginRight: 40,
  },
  title: {},
  image1: {
    position: "absolute",
    background: "url(/kazamiga-2.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "45vw",
    height: "80vh",
  },
  image2: {
    position: "relative",
    background: "url(/kazamiga-3.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "35%",
    height: "50%",
    left: "-5%",
  },
});
export default Hero;
