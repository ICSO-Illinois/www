import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Headroom from 'react-headroom';
import window from 'global';
import theme from '../../config/theme';
import logo from '../../static/logo/header-logo.svg';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const Nav = styled.nav`
  flex-grow: 2;
  /* width: 33%; */
  justify-content: space-between;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 100vw;
  }
`;

const Logo = styled.img`
  height: 4rem;
  margin-bottom: -1rem;
  max-width: 420px;
  margin-left: -1.5rem;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    max-width: 40vw;
    margin-left: -2.5rem;
    margin-bottom: auto;
  }
`;

const Menu = styled.div`
  position: relative;
  margin-top: 0.5rem;
  margin-bottom: auto;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    display: none;
    visibility: hidden;
    background-color: transparent;
    height: 0;
    margin: 0;
    font-size: 0;
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  margin-top: -1.5rem;
  visibility: hidden;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    visibility: visible;
  }
`;

const DropdownB = styled.button`
  position: absolute;
  right: -90vw;
  top: -4rem;
  margin-top: -0.5rem;
  margin-bottom: auto;
  margin-right: 3vw;
  width: 36px;
  visibility: hidden;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    visibility: visible;
  }
  cursor: pointer;
  border: 0px;
  border-radius: 3px;
  z-index: 99;
`;

const DdContent = styled.div`
  display: none;
  position: absolute;
  right: -90vw;
  margin-right: 3vw;
  top: -4rem;
  transform: translateY(-9px);
  padding-top: 30px;
  padding-right: 4px;
  padding-left: 4px;
  background-color: #f1f1f1;
  width: 20vw;
  min-width: 90px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  text-align: center;
  line-height: 2rem;
  border-radius: 3px;
`;

const show = {
  display: "block",
  color: "black",
  marginLeft: 0
};


// function to get current window dimension (for conditional rendering of NavBar)

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const NavBar = () => {
  const widthSmall = parseInt(theme.breakpoints.s.replace('px',''));
  const { height, width } = useWindowDimensions();
  const logoFix = (height <= widthSmall) && (width > height);
  console.log(logoFix);
  if (width <= widthSmall) {
    // toggle dropdown menu on click
    function handleClick() {
      if (document.getElementById("dropNav").style.display === "block") {
        document.getElementById("dropNav").style.display = "none";
      } else {
        document.getElementById("dropNav").style.display = "block";
      }
    };
    // return dropdown navbar
    return(
      <Headroom calcHeightOnResize disableInlineStyles>
        <Nav>
          <StyledLink to="/" style={{maxWidth: "33%"}}>
            <Logo id="ICSO Logo" src={logo} alt="ICSO Logo" margin-top={logoFix ? "-0.25rem": "-0.5rem"}/>
          </StyledLink>
          <Dropdown>
            <DropdownB onClick={handleClick}>
              <span class="menu-icon" style={{ width: "36px" }}>
                <svg viewBox="0 0 18 15" width="18px" style={{ height: "auto"}} >
                  <path d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.032C17.335,0,18,0.665,18,1.484L18,1.484z M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.032C17.335,6.031,18,6.696,18,7.516L18,7.516z M18,13.516C18,14.335,17.335,15,16.516,15H1.484 C0.665,15,0,14.335,0,13.516l0,0c0-0.82,0.665-1.483,1.484-1.483h15.032C17.335,12.031,18,12.695,18,13.516L18,13.516z"/>
                </svg>
              </span>
            </DropdownB>
            <DdContent id="dropNav" display="none">
              <Link to="/" style={show}>主页</Link>
              <Link to="/blog" style={show}>内容</Link>
              <Link to="/about" style={show}>关于</Link>
              <Link to={"/map"} style={show}>地图</Link>
            </DdContent>
          </Dropdown>
        </Nav>
      </Headroom>
    )
  }
  // return normal navbar otherwise
  return (
    <Headroom calcHeightOnResize disableInlineStyles>
      <Nav style={{flex: 99}}>
        <StyledLink to="/" style={{maxWidth: "33%"}}>
          <Logo src={logo} alt="ICSO Logo" margin-top={logoFix ? "-0.25rem": "-0.5rem"}/>
        </StyledLink>
      </Nav>
      <Nav>
        <Menu>
          <Link to="/">主页</Link>
          <Link to="/blog">内容</Link>
          <Link to="/about">关于</Link>
          <Link to={"/map"}>地图</Link>
        </Menu>
      </Nav>
    </Headroom>
  )
};

export default NavBar;
