/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Grid, Card, Box, Heading, Text, Image } from "theme-ui";
import SectionHeader from "../components/section-header";
import React from "assets/key-feature/React.png";
import Redux from "assets/key-feature/Redux.png";
import HTML from "assets/key-feature/HTML.png";
import CSS from "assets/key-feature/CSS.png";
import Node from "assets/key-feature/Node.png";
import SQL from "assets/key-feature/MYSQL.png";
import Mongo from "assets/key-feature/MONGO.png";
import Java from "assets/key-feature/Java.png";

export default function KeyFeature() {
  return (
    <section id="skills" sx={{ variant: "section.testimonial" }}>
      <Container css={{ textAlign: "center" }}>
        <SectionHeader slogan="Skills" title="Check out some of my skills" />
      </Container>
      <Container css={{ textAlign: "center" }}>
        <Card sx={styles.cards.primary} style={{padding: "32px"}}>
          <Box>
            <Heading
              variant="title"
              style={{
                display: "flex",
                alignItems: "flex-start",
                paddingTop: "20px",
              }}
            >
              Front-End
            </Heading>
            <Grid sx={styles.grid}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image src={React} alt="" />
                <Text color="primary" as="h3">
                  React
                </Text>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image src={Redux} alt="" />
                <Text color="primary" as="h3">
                  Redux
                </Text>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image src={HTML} alt="" />
                <Text color="primary" as="h3">
                  HTML
                </Text>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image src={CSS} alt="" />
                <Text color="primary" as="h3">
                  CSS
                </Text>
              </div>
            </Grid>

            <Heading
              variant="title"
              style={{
                display: "flex",
                alignItems: "flex-start",
                paddingTop: "20px",
              }}
            >
              Back-End
            </Heading>
            <Grid sx={styles.grid}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image src={Node} alt="" />
                <Text color="primary" as="h3" style={{ marginLeft: "10px" }}>
                  Node
                </Text>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image src={Java} alt="" />
                <Text color="primary" as="h3">
                  Java
                </Text>
              </div>
            </Grid>
            <Heading
              variant="title"
              style={{
                display: "flex",
                alignItems: "flex-start",
                paddingTop: "20px",
              }}
            >
              Database
            </Heading>
            <Grid sx={styles.grid}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image src={SQL} alt="" />
                <Text color="primary" as="h3">
                  SQL
                </Text>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image src={Mongo} alt="" />
                <Text color="primary" as="h3">
                  Mongo
                </Text>
              </div>
            </Grid>

            <Heading
              variant="title"
              style={{
                display: "flex",
                alignItems: "flex-start",
                paddingTop: "20px",
              }}
            >
              Others
            </Heading>
            <Grid sx={styles.grid}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image
                  style={{ height: "80px", width: "80px" }}
                  src="https://pbs.twimg.com/media/D6CCcCrXkAAXrua?format=jpg&name=900x900"
                  alt=""
                />
                <Text color="primary" as="h3">
                  WebMethods
                </Text>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image
                  style={{ height: "80px", width: "80px" }}
                  src="https://www.buyalicence.com/wp-content/uploads/2019/03/dell-boomi-logo-png.png"
                  alt=""
                />
                <Text color="primary" as="h3">
                  Dell Boomi
                </Text>
              </div>
            </Grid>
          </Box>
        </Card>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.625)",
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: "1px solid",
      borderColor: "muted",
    },
  },
  pricingHeader: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    mb: ["20px", null, null, null, "20px"],
    p: {
      fontSize: [1, 2],
      color: "text",
      lineHeight: "heading",
    },
    ".package__name": {
      marginBottom: [1, null, 2],
    },
  },
  ".card-footer": {
    display: "flex",
    alignItems: "center",
    marginTop: [5, null, null, "33px"],
    ".image": {
      flexShrink: 0,
      mr: [3, null, null, 4],
      display: "flex",
      img: {
        width: "55px",
        height: "55px",
        borderRadius: "50%",
        objectFit: "cover",
      },
    },
  },
};
