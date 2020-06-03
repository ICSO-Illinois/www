import React, { Fragment } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { css, Global } from '@emotion/core';
import PropTypes from 'prop-types';
import 'typeface-open-sans';
import 'typeface-candal';
import { SEO } from '../components/';
import { NavBar, Footer } from '../layouts/';
import theme from '../../config/theme';
import headroom from '../styles/headroom';
import background from '../../static/logo/background.svg'

const bgStyle = {
  width: "70vw",
  minWidth: "300px",
  maxWidth: "600px",
  margiLleft: "50%",
  transform: "translateX(-50%)",
};

const bgDivStyle = {
  position: "fixed",
  top: "30%",
  left: "97%",
  width: "0px",
  overflow: "visible",
  textAlign: "center",
  zIndex: "-101"
};


const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div id="bg" style={bgDivStyle}><img src={background} style={bgStyle}/></div>
    <Fragment>
      <Global
        styles={css`
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          html {
            text-rendering: optimizeLegibility;
            overflow-x: hidden;
            box-sizing: border-box;
            -ms-overflow-style: scrollbar;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          html,
          body {
            width: 100%;
            /* height: 100%; */
            margin: 0;
            padding: 0;
            scroll-behavior: smooth;
          }

          body {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
          a {
            color: ${theme.colors.link};
            transition: color 0.5s;
            text-decoration: none;
          }
          a:hover {
            text-decoration: none;
            color: ${theme.colors.linkHover};
          }
          h1 {
            font-family: ${theme.fontFamily.heading};
          }

          #gatsby-focus-wrapper {
            min-height: 100vh;
            position: relative;
            padding-bottom: 5em;
            @media (max-width: ${theme.breakpoints.m}) {
              padding-bottom: 15em;
            }
          }

          ${headroom}
        `}
      />
      <SEO />
      <NavBar />
      {children}
      <Footer />
    </Fragment>
  </ThemeProvider>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};
