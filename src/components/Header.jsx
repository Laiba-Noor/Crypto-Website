import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faLinkedinIn, faGooglePlusG, faInstagram, faYoutube, faTelegramPlane, faMedium, faRedditAlien } from '@fortawesome/free-brands-svg-icons';

const HeaderContainer = styled.header`
  background-color: #001f3f;
  color: #f0f0f0; /* Light white color for text */
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  & > div {
    display: flex;
    align-items: center;
    margin-right: 1rem;
    color: #f0f0f0; /* Light white color for text */

    &:first-child svg {
      color: #1abc9c; /* Light green color for the left icon */
    }
  }

  svg {
    margin-right: 0.5rem;
    color: #f0f0f0; /* Light white color for other icons */
  }
`;

const SocialIcons = styled.div`
  a {
    color: #f0f0f0; /* Light white color for social icons */
    margin: 0 0.5rem;
    font-size: 1.2rem;
    text-decoration: none;

    &:hover {
      color: #d0d0d0; /* Slightly darker white for hover effect */
    }
  }
`;

const Nav = styled.nav`
  a {
    margin: 0 1rem;
    color: #f0f0f0; /* Light white color for text */
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <ContactInfo>
        <div>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          19th Ave New York, NY 95822, USA
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} />
          +1 916-85-2235
        </div>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          info@cryption.network
        </div>
      </ContactInfo>
      <SocialIcons>
        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        <a href="#"><FontAwesomeIcon icon={faGooglePlusG} /></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
        <a href="#"><FontAwesomeIcon icon={faTelegramPlane} /></a>
        <a href="#"><FontAwesomeIcon icon={faMedium} /></a>
        <a href="#"><FontAwesomeIcon icon={faRedditAlien} /></a>
      </SocialIcons>
    </HeaderContainer>
  );
};

export default Header;
