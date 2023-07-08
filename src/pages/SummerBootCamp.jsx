import { Button, Card, Grid, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => {
  return {
    main: {
      paddingTop: "8rem",
    },
    container: {
      width: "80vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      margin: "0 auto",
    },
    header: {
      backgroundImage: "url('./Images/summer.jpeg')",
      backgroundSize: "cover",
      backgroundPositionY: "40%",
      backgroundColor: "rgba(217, 217, 217, 1)",
      height: "60vh",
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        backgroundPosition: "center",
      },
    },
    heading: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      height: "100%",
      paddingBottom: "4rem",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "2rem",
      },
    },

    details: {
      display: "flex",
      flexDirection: "column",
      gap: "3rem",
      padding: "2rem 0rem",
    },
    slideShow: {
      margin: "4rem 0rem",
    },
  };
});
function SummerBootCamp() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <main className={classes.main}>
      <div className={classes.slideShow}>
        <Grid container>
          <Grid item={12} style={{ width: "100%" }}>
            <Card className={classes.header} elevation={0} />
          </Grid>
        </Grid>
      </div>
      <div className={classes.container}>
        <div className={classes.heading}>
          <div>
            <Typography variant="h1">2023 Teen Code Camp</Typography>
            <Typography
              variant="h6"
              color="primary"
              style={{ fontWeight: "500" }}
            >
              1st August 2023 - 31st August 2023
            </Typography>
          </div>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#012A47",
              color: "white",
              width: "fit-content",
              padding: "0.7rem 4.5rem",
              fontSize: "1.6rem",
              textTransform: "none",
              height: "fit-content",
            }}
            onClick={() => {
              window.location.href =
                "https://paystack.com/pay/itcentralng-summer";
            }}
          >
            Enroll Now
          </Button>
        </div>
        <div className={classes.details}>
        <h1>Python</h1>
          <Typography variant="body1">
          In our Python course, students will embark on a thrilling journey through the realm of programming. Python, known for its simplicity and versatility, is the perfect language for beginners. During this course, students will learn the fundamentals of coding, such as variables, loops, and functions. They will also explore advanced topics like object-oriented programming and data manipulation. With Python, students will be equipped to build their own projects, whether it's a game, a web application, or a data analysis tool. By the end of the course, your child will have gained a solid foundation in programming and be well-prepared for future coding adventures.
          </Typography>

        <h1>Web</h1>
          <Typography variant="body1">
          For those with a keen eye for aesthetics and a passion for the web, our Web Design course is the ideal choice. In this course, students will dive into the captivating world of web development and learn how to create visually stunning and functional websites. They will explore the principles of design, including color theory, typography, and layout, and master essential web technologies like HTML, CSS, and JavaScript. Through hands-on projects, students will unleash their creativity to craft their own websites, incorporating interactive elements and responsive design. By the end of the course, your child will have the skills to bring their digital visions to life and make a lasting impact in the online world.
          </Typography>
          
        <h1>UI/UX</h1>
          <Typography variant="body1">
          If your child is fascinated by user experiences and wants to design products that captivate and delight users, our UX/UI course is the perfect fit. This course will introduce students to the exciting field of user experience and user interface design. They will learn how to conduct user research, create wireframes and prototypes, and apply usability principles to ensure optimal user interactions. Through a combination of theory and practice, students will gain insights into user-centered design and develop a critical eye for crafting intuitive and engaging digital experiences. By the end of the course, your child will be equipped with the skills to design seamless user experiences that leave a lasting impression.
          </Typography>
        </div>
      </div>
    </main>
  );
}

export default SummerBootCamp;
