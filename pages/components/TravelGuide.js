import React from "react";
import { createUseStyles } from "react-jss";

const TravelGuide = () => {
  const classes = useStyles({});
  return (
    <>
      <div className={classes.wrapper}>
        <h1>Travel Guide</h1>
      </div>
      <div className={classes.imageWrapper}>
        <div className={classes.imageGuide1}></div>
        <div className={classes.imageGuide2}></div>
        <div className={classes.imageGuide3}></div>
        <div className={classes.imageGuide4}></div>
      </div>
    </>
  );
};
const useStyles = createUseStyles({
  wrapper: {
    fontFamily: "Montserrat",
    fontWeight: "lighter",
    display: "flex",
    justifyContent: "center",
    margin: "50px 0 50px 0",
  },
  imageWrapper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
  },
  imageGuide1: {
    background: "url(/kazamiga-3.png)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "25%",
    height: "75vh",
    marginTop: 50,
  },
  imageGuide2: {
    background: "url(/kazamiga-2.png)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "25%",
    height: "75vh",
  },
  imageGuide3: {
    background: "url(/kazamiga-3.png)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "25%",
    height: "75vh",
    marginTop: 50,
  },
  imageGuide4: {
    background: "url(/kazamiga-2.png)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "25%",
    height: "75vh",
  },
});
export default TravelGuide;
