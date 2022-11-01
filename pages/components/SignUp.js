import React from "react";
import { createUseStyles } from "react-jss";

const SignUp = () => {
  const classes = useStyles({});
  return (
    <div className={classes.heroWrapper}>
      <div className={classes.imageWrapper}>
        <div className={classes.image1}></div>
      </div>
      <div className={classes.paragWrapper}>
        <div className={classes.bcgGlass}>
          <p className={classes.paragTitle}>Sign Up</p>
          <p className={classes.parag1}>Name</p>
          <div>
            <input className={classes.input}></input>
          </div>
          <p className={classes.parag2}>Email</p>
          <div>
            <input className={classes.input}></input>
          </div>
          <div>
            <button className={classes.subscribe}>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
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
    marginLeft: 20,
    // marginRight: 40,
  },
  paragTitle: {
    fontSize: 40,
  },
  parag1: {
    fontSize: 15,
    fontFamily: "Playfair Display",
    fontWeight: "lighter",
    lineHeight: "1.5em",
  },
  parag2: {
    fontSize: 15,
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
  input: {
    width: "90%",
    height: 40,
    boxShadow: "0 0.5px 1px 0 rgba(160,160,160,0.4)",
    border: "1px solid #ccc",
    background: "transparent",
    borderRadius: 5,
  },
  subscribe: {
    width: "90%",
    height: 40,
    marginTop: 20,
    border: "1px solid #ccc",
    borderRadius: 5,
    background: "white",
    cursor: "pointer",
    "&:hover ": {
      cursor: "pointer",
      background: "#ccc",
      color: "#2c2c2c",
    },
  },
  bcgGlasss: {
    width: "90%",
    height: 550,
    background: "rgba( 185, 15, 15, 0.25  )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37)",
    backdropFilter: "blur( 2px )",
    // WebkitBackdropFilter: "blur( 2px )",
    opacity: 0.3,
    bordeRadius: 10,
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
  },
});
export default SignUp;
