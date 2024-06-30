import React from 'react';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import 'chart.js/auto';
import { useInView } from 'react-intersection-observer';

const CrowdsaleSectionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6rem 2rem;
  background-color: #f4f7f6;
  color: #333;
  font-family: 'Montserrat', sans-serif;
`;

const LeftContent = styled(motion.div)`
  max-width: 45%;
  margin-left: 7%;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const ConversionRate = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 1.5rem 0;
`;

const BuyButton = styled(motion.button)`
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

const ChartContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 50%;
`;

const ChartWrapper = styled.div`
  width: 45%;
  margin: 0 1rem;
`;

const ChartTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-align: center;
`;

const CrowdsaleSection = () => {
  const fundDistributionData = {
    labels: ['Token', 'Token Sale', 'Hard Cap', 'Coin Price'],
    datasets: [{
      data: [350, 150, 10, 0.04],
      backgroundColor: ['#1abc9c', '#3498db', '#9b59b6', '#e67e22'],
      hoverBackgroundColor: ['#16a085', '#2980b9', '#8e44ad', '#d35400'],
    }],
  };

  const tokenDistributionData = {
    labels: ['Distributed to Community', 'Reserved Funding', 'Founders and Team', 'Advisors', 'Bounty Campaign'],
    datasets: [{
      data: [45, 25, 9, 3, 2],
      backgroundColor: ['#1abc9c', '#3498db', '#9b59b6', '#e67e22', '#f1c40f'],
      hoverBackgroundColor: ['#16a085', '#2980b9', '#8e44ad', '#d35400', '#f39c12'],
    }],
  };

  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the section is visible
  });

  return (
    <CrowdsaleSectionContainer ref={ref}>
      <LeftContent
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
        transition={{ duration: 1 }}
      >
        <Title>Crowdsale Section</Title>
        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Description>
        <Description>In order to make CRN token distribution process more efficient, the CRN price will now be linked to BTC:</Description>
        <ConversionRate>1 CRN = 0.00014 BTC</ConversionRate>
        <BuyButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          BUY TOKENS -25% OFF
        </BuyButton>
      </LeftContent>
      <ChartContainer>
        <ChartWrapper>
          <ChartTitle>Fund distribution</ChartTitle>
          <Doughnut data={fundDistributionData} />
        </ChartWrapper>
        <ChartWrapper>
          <ChartTitle>Token distribution</ChartTitle>
          <Doughnut data={tokenDistributionData} />
        </ChartWrapper>
      </ChartContainer>
    </CrowdsaleSectionContainer>
  );
};

export default CrowdsaleSection;
