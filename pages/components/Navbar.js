import React from "react";
import { createUseStyles } from "react-jss";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const classes = useStyles({});
  return (
    <div className={classes.navWrapper}>
      <Image
        src="/kazamiga.png"
        alt="Picture of the author"
        width={100}
        height={100}
      />
      <div className={classes.links}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/">
          <a>About</a>
        </Link>
        <Link href="/">
          <a>Posts</a>
        </Link>
        <Link href="/">
          <a>Contact</a>
        </Link>
      </div>
      <div className={classes.media}>
        <Link href="/">
          <FontAwesomeIcon className={classes.icon} icon={faHashtag} />
        </Link>
        <Link href="/">
          <FontAwesomeIcon className={classes.icon} icon={faHashtag} />
        </Link>
        <Link href="/">
          <FontAwesomeIcon className={classes.icon} icon={faHashtag} />
        </Link>
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  navWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  links: {
    display: "flex",
    width: "30%",
    justifyContent: "space-around",
    alignItems: "center",
    color: "#4D4D4D",
  },
  media: {
    display: "flex",
    width: "10%",
    justifyContent: "space-around",
    alignItems: "center",
    color: "#4D4D4D",
  },
  icon: {
    width: 25,
    height: 25,
  },
});
export default Navbar;
