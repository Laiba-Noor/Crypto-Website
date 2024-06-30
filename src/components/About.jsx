import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import LaptopImage from '../assets/Laptop.png';
import NewBackgroundImage from '../assets/back.jpg'; // Replace with your new background image path

const AboutContainer = styled.section`
  background-color: #f4f7f6;
  padding: 5rem 2rem;
  font-family: 'Montserrat', sans-serif;
  position: relative;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Text = styled(motion.p)`
  font-size: 1.25rem;
  max-width: 50%;
  margin-right: 2rem;
  line-height: 1.6;
`;

const StatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Stat = styled.div`
  margin-bottom: 1.5rem;
`;

const StatLabel = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const ProgressBar = styled.div`
  background: #e0e0e0;
  border-radius: 25px;
  overflow: hidden;
  width: 100%;
`;

const Progress = styled.div`
  height: 20px;
  border-radius: 25px;
  text-align: right;
  padding-right: 10px;
  box-sizing: border-box;
  color: white;
  font-weight: 700;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  position: relative;
  z-index: 1;
`;

const LaptopImageStyled = styled(motion.img)`
  width: 70%; /* Adjust as needed */
  height: auto;
`;

const HalfSection = styled.section`
  background-image: url(${NewBackgroundImage});
  background-size: cover;
  background-position: center;
  height: 60vh; /* Adjust height as needed */
  margin-top: -40vh; /* Pulls up the new section to start from the middle of the laptop image */
  position: relative;
  z-index: 0; /* Ensure it is behind the image */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CenterText = styled(motion.h2)`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 1rem;
  margin-top: 4rem; /* Move the text a bit lower */
`;

const WatchVideoButton = styled(motion.button)`
  background-color: #1abc9c;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #16a085;
  }
`;

const About = () => {
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: false });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: false });
  const { ref: imageRef, inView: imageInView } = useInView({ triggerOnce: false });
  const { ref: centerTextRef, inView: centerTextInView } = useInView({ triggerOnce: false });

  return (
    <div>
      <AboutContainer id="about-cryption">
        <Title
          ref={titleRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: titleInView ? 1 : 0, y: titleInView ? 0 : -50 }}
          transition={{ duration: 1 }}
        >
          Why choosing us
        </Title>
        <Content>
          <Text
            ref={textRef}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: textInView ? 1 : 0, x: textInView ? 0 : -50 }}
            transition={{ duration: 1 }}
          >
            Cryption is a blockchain-based marketplace where buyers & sellers meet to carry out operations involving digital goods & assets with cryptocurrency transactions. The unique advantage here is an automatic matching of users, based on an artificial intelligence approach. It is the first ever artificial intelligence marketplace in the world, combining traditional and smart contracts, blockchain, and future-oriented ideas of connecting people and performing operations by analyzing users' preferences.
          </Text>
          <StatsContainer>
            <Stat>
              <StatLabel>Support countries</StatLabel>
              <ProgressBar>
                <Progress style={{ width: '75%', background: '#1abc9c' }}>75%</Progress>
              </ProgressBar>
            </Stat>
            <Stat>
              <StatLabel>Operators</StatLabel>
              <ProgressBar>
                <Progress style={{ width: '44%', background: '#3498db' }}>44%</Progress>
              </ProgressBar>
            </Stat>
            <Stat>
              <StatLabel>Producers</StatLabel>
              <ProgressBar>
                <Progress style={{ width: '62%', background: '#9b59b6' }}>62%</Progress>
              </ProgressBar>
            </Stat>
          </StatsContainer>
        </Content>
        <ImageContainer>
          <LaptopImageStyled
            ref={imageRef}
            src={LaptopImage}
            alt="Laptop"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: imageInView ? 1 : 0, scale: imageInView ? 1 : 0.8 }}
            transition={{ duration: 1 }}
          />
        </ImageContainer>
      </AboutContainer>
      <HalfSection>
        <CenterText
          ref={centerTextRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: centerTextInView ? 1 : 0, y: centerTextInView ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          How artificial intelligence & blockchain revolutionize the world of online marketplaces
        </CenterText>
        <WatchVideoButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Watch Video Now
        </WatchVideoButton>
      </HalfSection>
    </div>
  );
};

export default About;
