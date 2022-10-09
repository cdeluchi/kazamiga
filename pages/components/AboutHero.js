import React from "react";
import { createUseStyles } from "react-jss";

const AboutHero = () => {
  const classes = useStyles({});
  return (
    <>
      <h1 className={classes.guideTitle}>About Kazamiga</h1>

      <div className={classes.heroWrapper}>
        <div className={classes.paragWrapper}>
          <p className={classes.paragTitle}>KAZAMIGA TRAVEL & ADVENTURE</p>
          <p className={classes.parag1}>
            Kazamiga is a travel and lifestyle blog featuring destination
            guides, travel photography, food guides, and a healthy dose of
            adventure. From the UK and wider Europe to Africa, Asia and the
            Americas, Kazamiga is a travel and lifestyle blog featuring
            destination guides, travel photography, food guides, and a healthy
            dose of adventure. From the UK and wider Europe to Africa, Asia and
            the Americas,{" "}
          </p>
          <p className={classes.parag2}>
            Kazamiga is a travel and lifestyle blog featuring destination
            guides, travel photography, food guides, and a healthy dose of
            adventure.{" "}
          </p>
        </div>
        <div className={classes.imageWrapper}>
          <div className={classes.image1}></div>
        </div>
      </div>
    </>
  );
};
const useStyles = createUseStyles({
  guideTitle: {
    fontSize: 40,
    display: "flex",
    justifyContent: "center",
    fontFamily: "Playfair Display",
    fontWeight: "lighter",
    lineHeight: "1.5em",
  },
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
  paragTitle: {
    fontSize: 40,
  },
  parag1: {
    fontSize: 30,
    fontFamily: "Playfair Display",
    fontWeight: "lighter",
    lineHeight: "1.5em",
  },
  parag2: {
    fontSize: 25,
    fontFamily: "Playfair Display",
  },
  title: {
    fontSize: 25,
    fontFamily: "Playfair Display",
    fontWeight: "lighter",
  },
  image1: {
    // position: "absolute",
    background: "url(/kazamiga-2.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "80vh",
  },
});

export default AboutHero;
