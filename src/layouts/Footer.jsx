import React from 'react';
import styled from '@emotion/styled';
import badgeOrange from '../../static/logo/Illinois-Wordmark-Horizontal-Reversed-Orange-RGB.png';

const Wrapper = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5rem;
  /* padding: 2rem 0; */
  box-shadow: ${props => props.theme.shadow.footer};
  background: ${props => props.theme.gradient.leftToRight};
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px 10px 0 0;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 15em;
  }
`;

const Elem = styled.div`
  flex-grow: 1;
  width: 33%;
  height: 100%;
  align-content: center;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 100%;
    height: 33%;
  }
  align-content: center;
`;

const Text = styled.div`
  position: relative;
  margin-top: 2rem;
  margin-bottom: auto;
  text-align: center;
  color: ${props => props.theme.colors.white.light};
`;

const Badge = styled.img`
  display: block;
  height: 2rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1.5em;
  margin-bottom: auto;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 200px;
  }
`;

const Footer = () => (
  <Wrapper>
    <Elem><Text>Brought to you by CU-ICSO</Text></Elem>
    <Elem><a href="https://illinois.edu/"><Badge src={badgeOrange}/></a></Elem>
    <Elem><Text><a href="http://www.chineseunion.org/" style={{color: "#E84A27"}}>Chinese Union</a></Text></Elem>
  </Wrapper>
);
export default Footer;
