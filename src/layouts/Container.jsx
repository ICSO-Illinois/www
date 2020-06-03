import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Wrapper = styled.section`
  text-align: ${props => (props.center ? 'justify' : '')};
  /* margin: auto; */
  padding: 3rem 1.5rem;
  width: 75%;
  max-width: 1000px;
  max-width: ${props => props.theme.layout[props.type]};
  height: 100%;

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 90%;
    padding: 3rem 0rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 90%;
    padding: 3rem 0rem;
  }
`;

const Container = ({ children, type, className, center }) => (
  <Wrapper className={className} type={type} center={center}>
    {children}
  </Wrapper>
);

export default Container;

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  center: PropTypes.object,
};
