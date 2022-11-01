import React from "react";
import { createUseStyles } from "react-jss";

const JoinInstagram = () => {
  const classes = useStyles({});
  return (
    <>
      <div className={classes.wrapper}>
        <h1 className={classes.guideTitle}>Follow us in Instagram</h1>
      </div>
      <div className={classes.imageWrapper}>
        <div className={classes.imageGuide1}></div>
        <div className={classes.imageGuide2}></div>
        <div className={classes.imageGuide3}></div>
        <div className={classes.imageGuide4}></div>
        <div className={classes.imageGuide3}></div>
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
  guideTitle: {
    fontSize: 40,
    fontFamily: "Playfair Display",
    fontWeight: "lighter",
    lineHeight: "1.5em",
  },
  imageWrapper: {
    // height: "100vh",
    display: "flex",
    justifyContent: "center",
  },
  imageGuide1: {
    background: "url(/kazamiga-3.png)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "25%",
    height: "30vh",
    marginRight: 10,
    marginLeft: 10,
    border: "2px solid #2c2c2c",
  },
  imageGuide2: {
    background: "url(/kazamiga-2.png)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "25%",
    height: "30vh",
    marginRight: 10,
    marginLeft: 10,
    border: "2px solid #2c2c2c",
  },
  imageGuide3: {
    background: "url(/kazamiga-3.png)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "25%",
    height: "30vh",
    marginRight: 10,
    marginLeft: 10,
    border: "2px solid #2c2c2c",
  },
  imageGuide4: {
    background: "url(/kazamiga-2.png)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "25%",
    height: "30vh",
    marginRight: 10,
    marginLeft: 10,
    border: "2px solid #2c2c2c",
  },
});
export default JoinInstagram;
