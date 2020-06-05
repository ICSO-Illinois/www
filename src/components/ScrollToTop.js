import { Link } from 'gatsby';
import React from 'react';
import styled from '@emotion/styled';
import ScrollButtonImg from '../../static/scroll-button.svg';

const ScrollButtonDesktop = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 90vh;
  display: inline-block;
  opacity: 60%;
  img {
    bottom: 0px;
    right: 0px;
    height: 5vh;
    width: auto;
  }
`;

const ScrollButtonMobile = styled.div`
  position: fixed;
  float: right;
  left: 90vh;
  display: inline-block;
  img {
    position: fixed;
    margin-top: 60vh;
    bottom: 0px;
    right: 0px;
    height: 5vh;
    width: auto;
    opacity: 60%;
  }
`;

const ScrollToTop = ({ path, isMobile }) => (
  isMobile ?
    <ScrollButtonMobile>
      <Link to={`${path}/#toc`} title={"返回顶部"}>
        <img src={ScrollButtonImg} alt={"返回顶部"}/>
      </Link>
    </ScrollButtonMobile> :
    <ScrollButtonDesktop>
      <Link to={`${path}/#toc`} title={"返回顶部"}>
        <img src={ScrollButtonImg} alt={"返回顶部"}/>
      </Link>
    </ScrollButtonDesktop>
)

export default ScrollToTop;
