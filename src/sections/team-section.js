/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Card, Box, Heading, Text, Image } from "theme-ui";
import SectionHeader from 'components/section-header';

export default function TeamSection() {
  return (
    <section id="about" sx={{ variant: "section.testimonial" }}>
    <Container css={{ textAlign: "center" }}>
      <SectionHeader slogan="About Me" title="Check out about me " />
      <Card sx={styles.cards.primary}> 
      <Heading
              variant="title"
              style={{
                display: "flex",
                alignItems: "flex-start",
                paddingTop: "20px",
                fontSize:'30px'
              }}
            >
              Hi, I'm Aashish!
            </Heading>
            <Text
              variant="title"
              style={{
                display: "flex",
                alignItems: "flex-start",
                paddingTop: "20px",
                fontSize:'20px'
              }}
            >
                         I'm a Computer Science graduate student at the <span style={{color:'orange',paddingLeft:'10px'}}> University of Florida</span>

            </Text>

            <p
             style={{
              //  display: "flex",
              //  alignItems: "flex-start",
               paddingTop: "20px",
               fontSize:'20px'}}
               >
            Having a sound CS background, and an affinity to build and create, I have loved building projects across front-end, back-end, databases and user-experience design. My work can be seen on the projects  section on this website or on my github.
            Apart from coding, you can find me cooking, lifting weights in the gym, partying with friends or watching cricket matches.

              </p>
              <Text
             style={{
              //   display: "flex",
              //  alignItems: "flex-start",
               paddingTop: "20px",
               fontSize:'20px'}}
               >
                 I have started my masters in August 2021. I'm open to opportunities in Software development/ Full-stack engineering positions for summer internships.
              </Text>


      </Card>
    </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
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
};
