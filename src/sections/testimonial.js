/** @jsx jsx */
import { jsx, Container, Heading, Text, Box,Button, Image ,Card,Grid} from 'theme-ui';
import SectionHeader from 'components/section-header';

import Project1 from 'assets/testimonial/Project1.png';
import Avatar1 from 'assets/testimonial/avatar1.png';
import Project2 from 'assets/testimonial/Project2.png';
import Project3 from 'assets/testimonial/Project3.png';
import Project4 from 'assets/testimonial/Project4.png';

const data = [
  {
    id: 1,
    title: 'Plasma Hunt',
    description:
    'Built a social platform for sourcing plasma for COVID affected people by connecting them to recently recoveredCOVID patients in their vicinity. Designed and implemented the platform end-to-end.',
    avatar: Project1,
    link: 'https://plasmahunt.netlify.app/',
    designation: '@denny.hil',
    review: 4,
    github:'https://github.com/Aashishd220/PlasmaHunt',
    stack:['React', 'NodeJS', 'Express', 'MongoDB'],
  },
  {
    id: 2,
    title: 'Memories App',
    description:
      'Built a full-fledged social media platform where users can post content, comment and like posts. Implemented pagination to reduce client side load thereby increasing the speed of the application by 20 percent.',
    avatar: Project2,
    link: 'https://memories-collector.netlify.app/posts',
    designation: '@denny.hil',
    review: 5,
    github:'https://github.com/Aashishd220/Memories_App',
    stack:['React', 'NodeJS', 'Express', 'MongoDB'],

  },
  {
    id: 3,
    title: 'Covid-19 Tracker',
    description:
      'Engineered a COVID-19 tracking dashboard with world-wide real-time data and graphs. User can easily switch between countries to fetch data.  Google maps and Graphs are implemented to display information.',
    avatar: Project3,
    link: 'https://covid-19-statstracker.netlify.app/',
    name: 'Denny Hilguston',
    designation: '@denny.hil',
    review: 5,
    github:'https://github.com/Aashishd220/Covid_Tracker',
    stack:['React', 'Disease.sh API'],

  },
  {
    id: 4,
    title: 'Travel Easy',
    description:
      'Built a travel and discovery website that helps in finding hotels, restaurants and nearby attractions in a new city.•The website communicates with RAPID API on the back-end to handle searches. Built a responsive, declarative front-end in React.js that communicates seamlessly with the API.',
    avatar: Project4,
    link: 'https://maketraveleasy.netlify.app/',
    name: 'Denny Hilguston',
    designation: '@denny.hil',
    review: 4,
    github:'https://github.com/Aashishd220/Travel-Advisor',
    stack:['React', 'Rapid API'],
    
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1619 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  laptop: {
    breakpoint: { max: 1619, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};


export default function TestimonialCard() {
  return (
  <section id="projects" sx={{variant:'section.testimonial'}}>
    <Container css={{textAlign:'center'}}>
      
      <SectionHeader
        slogan="Projects"
        title="Check out some of my work"
      />
  {/* <div style={{display:'flex' ,justifyContent:'space-around'}}> */}
  <Grid sx={styles.grid}>

      {
        data.map((item)=>(
          <Card
          sx={styles.cards.primary}
          style={{maxWidth:'400px'}}
         >
            <Box className="package__header" sx={styles.pricingHeader}>

          <Image src={item.avatar} />
          </Box>
          <Box>
            <Box className="package__header" sx={styles.pricingHeader}>
              <Heading className="package__name" variant="title">
                {item.title}
              </Heading>
              <Text as="p" >{item.description}</Text>
            </Box>
            <Box className="package__header" sx={styles.pricingHeader}>
            <Heading className="package__name" variant="title">
               Stack
              </Heading>
              <div style={{display:'flex', justifyContent:'space-between'}}>
               { item.stack.map((s)=>(
              <Text color="primary" as="h4" >{s}</Text>

                ))}
              {/* <Text color="primary" as="h4" >React</Text>
              <Text color="primary" as="h4" >Node</Text>
              <Text color="primary" as="h4" >Express</Text>
              <Text color="primary" as="h4" >Mongo</Text> */}
              </div>

              </Box>
            <Box sx={styles.ButtonGroup}>
              <div style={{display:'flex' ,justifyContent:'space-between'}}>
                <a href={item.link} target="_blank">
              <Button variant="primary"  aria-label={item.name}>
                Live
              </Button>
              </a>
              <a href={item.github} target="_blank">
              
              <Button variant="primary" backgroundColor="#2196f3" aria-label={item.name}>
               Source
              </Button>
              </a>
              </div>
              
            </Box>
          </Box>

         

        </Card>
        ))
      }
      </Grid>

      {/* </div> */}
    </Container>

    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-30px',
    px: '15px',
    '.carousel-container': {
      width: '100%',
      maxWidth: [
        '100%',
        null,
        null,
        '750px',
        '1000px',
        '1180px',
        null,
        'calc(50% + 865px)',
      ],
      mr: ['auto', null, null, null, null, null, null, '-220px'],
      ml: 'auto',
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1620px)': {
          opacity: 1,
        },
      },
    },
  },
     
     
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.625)',
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted',
    },
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: [
      '30px 20px 35px',
      '30px 25px 35px',
      '30px 20px 35px',
      '35px 30px 40px 40px',
      '30px 30px 35px',
      '35px 30px 40px 40px',
    ],
    bg: 'white',
    textAlign: 'left',
    m: [
      '28px 5px 30px 5px',
      '28px 20px 30px 20px',
      '28px 15px 30px 15px',
      '28px 15px 30px 15px',
      '30px 20px 40px',
    ],
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex',
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0,
        },
      },
      '.star': {
        color: 'primary',
        mr: '1px',
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px',
      },
    },
    '.card-footer': {
      display: 'flex',
      alignItems: 'center',
      marginTop: [5, null, null, '33px'],
      '.image': {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: 'flex',
        img: {
          width: '55px',
          height: '55px',
          borderRadius: '50%',
          objectFit: 'cover',
        },
      },
    },
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, '22px'],
    color: 'text',
    lineHeight: 1.6,
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: 'normal',
    color: 'text',
    lineHeight: [1.85, null, 2],
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: '3px',
    color: 'text',
    lineHeight: 1.3,
  },
  designation: {
    color: 'primary',
    fontWeight: '500',
    fontSize: 1,
    lineHeight: 1.4,
  },
  pricingBox: {
    borderRadius: 20,
    position: 'relative',
    transition: 'all 0.3s',
    p: ['35px 25px', null, null, '40px'],
    width: ['100%', '75%', '100%'],
    mb: '40px',
    mt: '40px',
    mx: [0, 'auto', 0],
    '&:before': {
      position: 'absolute',
      content: "''",
      width: '100%',
      top: 0,
      left: 0,
      height: '100%',
      border: '1px solid rgba(38, 78, 118, 0.1)',
      borderRadius: 'inherit',
      transition: 'all 0.3s',
      zIndex: -1,
    },
    '&:hover': {
      boxShadow: '0px 4px 25px rgba(38, 78, 118, 0.1) !important',
      '&:before': {
        opacity: 0,
      },
    },
  },
  header: {
    height: ['28px', null, null, '32px'],
    backgroundColor: 'yellow',
    borderRadius: '5px',
    fontWeight: 'bold',
    fontSize: 1,
    lineHeight: 1.2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    position: 'absolute',
    top: '-17px',
    letterSpacing: '-.14px',
    px: '12px',
  },
  pricingHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    mb: ['20px', null, null, null, '20px'],
    p: {
      fontSize: [1, 2],
      color: 'text',
      lineHeight: 'heading',
    },
    '.package__name': {
      marginBottom: [1, null, 2],
    },
  },
  price: {
    fontWeight: 500,
    fontSize: [4, null, 5, null, '30px'],
    lineHeight: 1,
    letterSpacing: '-0.55px',
    color: 'text',
    marginBottom: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pt: [4, 6],
    '> span': {
      position: 'relative',
      pl: '3px',
      display: 'inline-block',
      fontSize: [1, 2],
      fontWeight: 'normal',
    },
  },
  listItem: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: [1, 2],
    lineHeight: [1.75, 1.6],
    mb: 3,
    alignItems: 'flex-start',
    color: 'text',
    '&.closed': {
      opacity: 0.55,
      button: {
        color: '#788FB5',
      },
    },
  },
  buttonGroup: {
    textAlign: 'center',
    mt: ['30px', null, null, null, '35px'],
    '.free__trail': {
      color: 'secondary',
      width: '100%',
      justifyContent: 'center',
      fontWeight: 700,
      fontSize: ['14px', 1],
      p: '20px 0 0',
    },
  },
};
