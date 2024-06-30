import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useInView } from 'react-intersection-observer';
import backgroundImage from '../assets/Back_image1.jpg';
import cryptionLogo from '../assets/log.png';
import About from './About';
import OurTokens from './OurTokens';
import CrowdsaleSection from './CrowdsaleSection';
import Roadmap from './Roadmap';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');
`;

const HeroContainer = styled.section`
  background: url(${backgroundImage}) no-repeat center center/cover;
  color: white;
  padding: 5rem 2rem;
  font-family: 'Montserrat', sans-serif;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const Logo = styled.img`
  height: 50px;
  width: auto;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 2rem;
  font-size: 1.25rem;
  font-weight: 700;
`;

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #00d1b2;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 4rem 2rem;
`;

const TextContainer = styled.div`
  text-align: left;
  margin-right: 5rem;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 2;
`;

const Button = styled(motion.button)`
  background-color: #00d1b2;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.25rem;
  cursor: pointer;
  border-radius: 8px;
  margin-bottom: 2rem;

  &:hover {
    background-color: #00a895;
  }
`;

const InfoContainer = styled(motion.div)`
  font-size: 1rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimerContainer = styled.div`
  background: white;
  color: black;
  border-radius: 25px;
  padding: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Timer = styled.div`
  padding: 0 1rem;
  text-align: center;

  div {
    font-size: 1.5rem;
    font-weight: 700;
  }

  small {
    font-size: 1rem;
    color: #888;
  }
`;

const ProgressBar = styled.div`
  background: #333;
  border-radius: 25px;
  overflow: hidden;
  width: 100%;
  margin-top: 1rem;
`;

const Progress = styled.div`
  background: #00d1b2;
  height: 20px;
  width: 42%;
  text-align: right;
  padding-right: 10px;
  box-sizing: border-box;
`;

const Hero = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.5,
  });

  const { ref: subtitleRef, inView: subtitleInView } = useInView({
    threshold: 0.5,
  });

  const { ref: buttonRef, inView: buttonInView } = useInView({
    threshold: 0.5,
  });

  const { ref: infoRef, inView: infoInView } = useInView({
    threshold: 0.5,
  });

  return (
    <>
      <GlobalStyle />
      <HeroContainer id="home">
        <Header>
          <Logo src={cryptionLogo} alt="Cryption Logo" />
          <Navigation>
            <NavItem to="about-cryption" smooth={true} duration={1000}>About Cryption</NavItem>
            <NavItem to="our-tokens" smooth={true} duration={1000}>Our Tokens</NavItem>
            <NavItem to="crowdsale" smooth={true} duration={1000}>Crowdsale</NavItem>
            <NavItem to="roadmap" smooth={true} duration={1000}>Roadmap</NavItem>
            <NavItem to="team" smooth={true} duration={1000}>Team</NavItem>
            <NavItem to="faq" smooth={true} duration={1000}>FAQ</NavItem>
            <NavItem to="news" smooth={true} duration={1000}>News</NavItem>
          </Navigation>
        </Header>
        <Content>
          <TextContainer>
            <Title
              ref={titleRef}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : -50 }}
              transition={{ duration: 1 }}
            >
              Trading platform of the future!
            </Title>
            <Subtitle
              ref={subtitleRef}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: subtitleInView ? 1 : 0, y: subtitleInView ? 0 : -50 }}
              transition={{ duration: 1 }}
            >
              A new smart blockchain-based marketplace for trading digital goods & assets according to users' interests.
            </Subtitle>
            <Button
              ref={buttonRef}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: buttonInView ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              BUY TOKENS - 25% OFF
            </Button>
          </TextContainer>
          <InfoContainer
            ref={infoRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: infoInView ? 1 : 0, y: infoInView ? 0 : 50 }}
            transition={{ duration: 1 }}
          >
            <div style={{ marginBottom: '1rem' }}>Token sale ends in:</div>
            <TimerContainer>
              <Timer>
                <div>0</div>
                <small>Days</small>
              </Timer>
              <Timer>
                <div>00</div>
                <small>Hours</small>
              </Timer>
              <Timer>
                <div>00</div>
                <small>Minutes</small>
              </Timer>
              <Timer>
                <div>00</div>
                <small>Seconds</small>
              </Timer>
            </TimerContainer>
            <div style={{ marginBottom: '1rem' }}>$25,256,432 contribution received</div>
            <ProgressBar>
              <Progress>42%</Progress>
            </ProgressBar>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '1rem' }}>
              <div>Softcap: $5m</div>
              <div>Hardcap: $55m</div>
            </div>
          </InfoContainer>
        </Content>
      </HeroContainer>
      <section id="about-cryption">
        <About />
      </section>
      <section id="our-tokens">
        <OurTokens />
      </section>
      <section id="crowdsale">
        <CrowdsaleSection />
      </section>
      <section id="roadmap">
        <Roadmap />
      </section>
    </>
  );
};

export default Hero;
