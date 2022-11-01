import React from "react";
import { createUseStyles } from "react-jss";

const Footer = () => {
  const classes = useStyles({});
  return (
    <div className={classes.footer}>
      <p>@KAZAMIGA</p>
    </div>
  );
};
const useStyles = createUseStyles({
  footer: {
    background: "#2c2c2c",
    height: "10vh",
    color: "#fff",
    textAlign: "center",
    padding: 20,
  },
});
export default Footer;
