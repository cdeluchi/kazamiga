import React from "react";
import { createUseStyles } from "react-jss";

const RecentPosts = () => {
  const classes = useStyles({});
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title}>Lasts posts</h1>
      <div className={classes.posts}>
        <div className={classes.postItem}>
          <div className={classes.image}></div>
          <div className={classes.content}>
            <span className={classes.contentTitle}>
              {" "}
              15 best luxury & designer ski wear brands
            </span>
            <span className={classes.contentStampmappe}> 4th october 2022</span>
          </div>
        </div>
        <div className={classes.postItem}>
          <div className={classes.image}></div>
          <div className={classes.content}>
            <span className={classes.contentTitle}>
              {" "}
              15 best luxury & designer ski wear brands
            </span>
            <span className={classes.contentStampmappe}> 4th october 2022</span>
          </div>
        </div>
        <div className={classes.postItem}>
          <div className={classes.image}></div>
          <div className={classes.content}>
            <span className={classes.contentTitle}>
              {" "}
              15 best luxury & designer ski wear brands
            </span>
            <span className={classes.contentStampmappe}> 4th october 2022</span>
          </div>
        </div>
        <div className={classes.postItem}>
          <div className={classes.image}></div>
          <div className={classes.content}>
            <span className={classes.contentTitle}>
              {" "}
              15 best luxury & designer ski wear brands
            </span>
            <span className={classes.contentStampmappe}> 4th october 2022</span>
          </div>
        </div>
        <div className={classes.postItem}>
          <div className={classes.image}></div>
          <div className={classes.content}>
            <span className={classes.contentTitle}>
              {" "}
              15 best luxury & designer ski wear brands
            </span>
            <span className={classes.contentStampmappe}> 4th october 2022</span>
          </div>
        </div>
        <div className={classes.postItem}>
          <div className={classes.image}></div>
          <div className={classes.content}>
            <span className={classes.contentTitle}>
              {" "}
              15 best luxury & designer ski wear brands
            </span>
            <span className={classes.contentStampmappe}> 4th october 2022</span>
          </div>
        </div>
      </div>
    </div>
  );
};
const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    width: "100%",
    height: "90vh",
    background: "#F9F3EA",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    display: "flex",
    justifyContent: "center",
    fontFamily: "Cormorant",
    fontWeight: "lighter",
    lineHeight: "1.5em",
    textAlign: "center",
    width: "100%",
    margin: "50px 0 50px 0;",
  },
  posts: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "space-around",
    width: "70%",
    height: "80%",
  },
  postItem: {
    width: 290,
    height: 300,
    background: "white",
    border: "1px solid #2c2c2c",
    overflow: "hidden",
  },
  image: {
    backgroundImage: "url(/kazamiga-2.png)",
    width: "100%",
    height: "65%",
    backgroundPosition: "center",
  },
  content: {
    margin: 20,
    display: "flex",
    flexDirection: "column",
  },
  contentTitle: {
    marginBottom: 10,
  },
  contentStampmappe: {
    fontSize: 10,
  },
});
export default RecentPosts;
