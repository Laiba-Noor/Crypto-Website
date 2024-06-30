import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import bgImage from '../assets/1.png'; // Replace with your actual image path

const TokensContainer = styled.section`
  background-color: #f4f7f6;
  padding: 5rem 2rem;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 4rem;
`;

const CircleContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem; /* Add margin to move the image down */
`;

const BackgroundImage = styled.img`
  width: 40%;
  height: auto;
`;

const TokenFeature = styled(motion.div)`
  position: absolute;
  width: 250px; /* Adjust width as needed */
  text-align: left;
  font-size: 1.25rem;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Heading = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const DummyParagraph = styled.p`
  font-size: 1rem;
  color: #666;
`;

const TimelineContainer = styled.section`
  background-color: #e9f2f9;
  padding: 5rem 2rem;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  margin-top: 2rem;
`;

const TimelineTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const TimelineSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 4rem;
`;

const DiscountCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const DiscountCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }
`;

const DiscountRate = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const DiscountDetails = styled.div`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
`;

const DiscountButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const OurTokens = () => {
  const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: false });
  const { ref: subtitleRef, inView: subtitleInView } = useInView({ triggerOnce: false });
  const { ref: token1Ref, inView: token1InView } = useInView({ triggerOnce: false });
  const { ref: token2Ref, inView: token2InView } = useInView({ triggerOnce: false });
  const { ref: token3Ref, inView: token3InView } = useInView({ triggerOnce: false });
  const { ref: token4Ref, inView: token4InView } = useInView({ triggerOnce: false });
  const { ref: timelineTitleRef, inView: timelineTitleInView } = useInView({ triggerOnce: false });
  const { ref: timelineSubtitleRef, inView: timelineSubtitleInView } = useInView({ triggerOnce: false });

  return (
    <>
      <TokensContainer id="our-tokens">
        <Subtitle
          ref={subtitleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: subtitleInView ? 1 : 0, y: subtitleInView ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          What is Cryption Coin?
        </Subtitle>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: subtitleInView ? 1 : 0, y: subtitleInView ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          Cryption Coin is a token, based on the Ethereum blockchain technology. It is the core asset of the new Cryption Marketplace.
        </motion.p>
        <CircleContainer>
          <BackgroundImage src={bgImage} alt="Background" />
          <TokenFeature
            ref={token1Ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: token1InView ? 1 : 0, y: token1InView ? 0 : 50 }}
            transition={{ duration: 1 }}
            style={{ top: '-7%', left: '9%' }}
          >
            <Heading>01 Without blockchain fluctuations</Heading>
            <DummyParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.</DummyParagraph>
          </TokenFeature>
          <TokenFeature
            ref={token2Ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: token2InView ? 1 : 0, y: token2InView ? 0 : 50 }}
            transition={{ duration: 1 }}
            style={{ top: '50%', left: '9%' }}
          >
            <Heading>02 No transaction fees</Heading>
            <DummyParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.</DummyParagraph>
          </TokenFeature>
          <TokenFeature
            ref={token3Ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: token3InView ? 1 : 0, y: token3InView ? 0 : 50 }}
            transition={{ duration: 1 }}
            style={{ top: '-7%', right: '9%' }}
          >
            <Heading>03 Protects the identity</Heading>
            <DummyParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.</DummyParagraph>
          </TokenFeature>
          <TokenFeature
            ref={token4Ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: token4InView ? 1 : 0, y: token4InView ? 0 : 50 }}
            transition={{ duration: 1 }}
            style={{ top: '50%', right: '9%' }}
          >
            <Heading>04 Instant operations</Heading>
            <DummyParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.</DummyParagraph>
          </TokenFeature>
        </CircleContainer>
      </TokensContainer>

      <TimelineContainer>
        <TimelineTitle
          ref={timelineTitleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: timelineTitleInView ? 1 : 0, y: timelineTitleInView ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          Cryption
        </TimelineTitle>
        <TimelineSubtitle
          ref={timelineSubtitleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: timelineSubtitleInView ? 1 : 0, y: timelineSubtitleInView ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          Timeline Discount
        </TimelineSubtitle>
        <DiscountCardsContainer>
          <DiscountCard
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: timelineSubtitleInView ? 1 : 0, y: timelineSubtitleInView ? 0 : 50 }}
            transition={{ duration: 1 }}
          >
            <DiscountRate>-35%</DiscountRate>
            <DiscountDetails>Round 1</DiscountDetails>
            <DiscountDetails>Dec 1 - Jan 31</DiscountDetails>
            <DiscountDetails>1 CRN = 0.00014 BTC Token rate</DiscountDetails>
            <DiscountDetails>12 500 000 Hard cap</DiscountDetails>
            <DiscountButton disabled>CLOSED</DiscountButton>
          </DiscountCard>
          <DiscountCard
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: timelineSubtitleInView ? 1 : 0, y: timelineSubtitleInView ? 0 : 50 }}
            transition={{ duration: 1 }}
            style={{ backgroundColor: '#d9f2e3' }}
          >
            <DiscountRate>-25%</DiscountRate>
            <DiscountDetails>Round 2</DiscountDetails>
            <DiscountDetails>Feb 1 - Apr 14</DiscountDetails>
            <DiscountDetails>1 CRN = 0.00014 BTC Token rate</DiscountDetails>
            <DiscountDetails>12 500 000 Hard cap</DiscountDetails>
            <DiscountButton>BUY NOW</DiscountButton>
          </DiscountCard>
          <DiscountCard
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: timelineSubtitleInView ? 1 : 0, y: timelineSubtitleInView ? 0 : 50 }}
            transition={{ duration: 1 }}
          >
            <DiscountRate>-15%</DiscountRate>
            <DiscountDetails>Round 3</DiscountDetails>
            <DiscountDetails>Jun 1 - Sep 15</DiscountDetails>
            <DiscountDetails>1 CRN = 0.00014 BTC Token rate</DiscountDetails>
            <DiscountDetails>10 000 000 Hard cap</DiscountDetails>
            <DiscountButton disabled>COMING SOON</DiscountButton>
          </DiscountCard>
        </DiscountCardsContainer>
      </TimelineContainer>
    </>
  );
};

export default OurTokens;
