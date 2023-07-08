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
            <Typography variant="h1">2023 Summer BootCamp</Typography>
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
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            commodi nam consequuntur distinctio debitis obcaecati autem harum
            quos quo dignissimos, quaerat nemo et. Nesciunt, est modi recusandae
            suscipit assumenda qui laboriosam quidem amet quam, maiores esse.
            Sed, aspernatur obcaecati? Aliquam, magni earum voluptatem aperiam
            aut impedit ea deleniti perferendis nobis. Ex mollitia atque
            pariatur fuga quaerat voluptate officia cupiditate velit! Eum beatae
            vel ipsa repudiandae hic ducimus labore explicabo impedit, pariatur
            excepturi veritatis aliquam distinctio iure modi mollitia quibusdam
            natus quasi? Quia assumenda nobis neque? Soluta, perferendis
            cupiditate quaerat rem veniam ullam magnam fuga quas enim earum.
            Saepe, natus magnam?
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            voluptatum placeat sed vitae. Eos, ducimus? Officiis nihil dolore
            enim minus laboriosam harum tempore maiores itaque expedita est.
            Debitis, vero adipisci. Sunt velit itaque consequuntur nesciunt sint
            obcaecati cupiditate hic provident nam laborum? Alias corporis illum
            fugit delectus accusamus maxime reiciendis harum nulla, dignissimos
            unde deleniti quibusdam architecto voluptates libero dicta! Porro,
            sint. Mollitia, exercitationem! Veritatis minima voluptatem
            praesentium animi nisi exercitationem, ex doloribus sit porro
            dignissimos omnis facilis harum et minus similique. Obcaecati vitae
            perferendis omnis excepturi a optio. Nemo. Recusandae perferendis
            nihil temporibus, deserunt provident voluptatibus commodi esse magni
            alias facilis facere et dignissimos quae exercitationem numquam
            consectetur aliquid laudantium? Ducimus, est temporibus. Magni id
            nam rem accusantium modi! Omnis iusto accusamus at quae. Eligendi
            fugit consequuntur earum neque vel commodi alias optio numquam
            laboriosam magni sapiente necessitatibus fuga animi velit ipsum
            tenetur, ut tempora provident veniam vero facere.
          </Typography>

          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad
            praesentium eos sequi fugit enim molestias, nulla odio ab corrupti
            quia veritatis maxime repellat perferendis neque expedita qui
            architecto ut? Accusantium! Repellendus quod eum quos voluptas hic
            soluta provident perferendis quis officiis esse dicta error eveniet
            maiores labore beatae possimus ex exercitationem, impedit nesciunt
            nostrum explicabo et! Autem quam voluptates ipsam. At culpa sunt
            quaerat dolorem quibusdam rerum assumenda debitis? Perspiciatis
            laudantium facere dolorem accusamus dolor accusantium quidem quasi
            molestiae. Eius accusantium laboriosam labore ullam impedit, quaerat
            veniam placeat sed iure.
          </Typography>
        </div>
      </div>
    </main>
  );
}

export default SummerBootCamp;
