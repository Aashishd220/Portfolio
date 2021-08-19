/** @jsx jsx */
import { jsx, Box, Container, Image, Text } from 'theme-ui';
import { library } from '@fortawesome/fontawesome-svg-core';
import FooterLogo from 'assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub,faLinkedin,faGoogle, } from "@fortawesome/free-brands-svg-icons"
import Link from 'next/link'
library.add(
  faGithub,
  faLinkedin,faGoogle
)

export default function Footer() {



  return (
   <footer id="contact" sx={styles.footer}>
     <Container>
     <Box sx={styles.footer.footerBottomArea}>
    

       <Box sx={styles.footer.menus}>
       <nav>
    <Link  href="https://github.com/Aashishd220/">
          <FontAwesomeIcon icon={faGithub} size="3x" />
          </Link>
          <Link href="https://www.linkedin.com/in/aashish-dhalla-1a3863168/">
          <FontAwesomeIcon icon={faLinkedin} size="3x" style={{color:'blue',marginLeft:'44px'}} />
          </Link>
            
          <FontAwesomeIcon icon={faEnvelope} size="3x" style={{color:'red',marginLeft:'44px'}} />
       </nav>
       </Box>
       </Box>
       <Box sx={styles.footer.bottom}>
       <Text as="h4">Created by Aashish Dhalla © 2021</Text>
       </Box>
     </Container>
     </footer>
  );
}

const styles = {
  footer: {
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, 8],
      pb: ['30px', null, '50px'],
      textAlign: 'center',
      flexDirection: 'column',
    },
    bottom:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menus: {
      mt: [3, 4],
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },

    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary',
      },
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
    },
  },
};
