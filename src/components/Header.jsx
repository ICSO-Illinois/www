import React from 'react';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const Wrapper = styled.header`
  background: ${props => props.theme.gradient.rightToLeft};
  box-shadow: ${props => props.theme.shadow.header};
  border-radius: 0 0 10px 10px;
  height: 30vh;
  max-height: 300px;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 30vh;
    max-height: 300px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 27.5vh;
    max-height: 275px;
  }
  position: relative;
  overflow: hidden;
`;

const Text = styled.div`
  color: ${props => props.theme.colors.white.base};
  z-index: 0;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: ${props => props.theme.layout.base};
  padding: 0 2rem;
  margin-bottom: 3rem;
  align-items: center;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    margin-top: 1rem;
  }
  h1 {
    @media (max-width: ${props => props.theme.breakpoints.s}) {
      font-size: 1.5rem;
    }
  }
  h3 {
    @media (max-width: ${props => props.theme.breakpoints.s}) {
      font-size: 1rem;
      margin-top: -1.5rem;
    }
  }
`;

const Subtitle = styled.p`
  max-width: 650px;
  color: ${props => props.theme.colors.white.light};
`;

const BgStyle = {
  position: "initial",
  filter: "blur(3px)",
  WebkitFilter: "blur(3px)",
  height: "100%"
}

const Header = ({ children, title, date, cover }) => (
  <Wrapper>
    <Img fluid={cover || {} || [] || ''} style={BgStyle}/>
    <Text>
      <h1>{title}</h1>
      <h3>{date}</h3>
      {children && <Subtitle>{children}</Subtitle>}
    </Text>
  </Wrapper>
);

export default Header;

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  cover: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

Header.defaultProps = {
  children: false,
  cover: false,
  date: false,
  title: false,
};
