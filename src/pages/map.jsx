import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header, CampusMap } from '../components/';
import { Layout } from '../layouts/';
import styled from '@emotion/styled';

const MapWrapper = styled.div`
  body {
    padding: 10%;
    margin: 10%;
  }
  html, body, #app {
    height: 100%;
    width: 100vw;
  }
  h1,
  h2,
  p {
    font-family: sans-serif;
    text-align: center;
  }
  .leaflet-container {
    height: 100vh;
    width: 50vw;
    margin: 0 auto;
  }
`

const Map = () => (
  <Layout>
    <Helmet title={'ICSO 校园地图'}>看看校园里的地点吧！</Helmet>
    <Header title={'校园地图'} />
    <MapWrapper>
      <CampusMap lat={40.1091771} lng={-88.2270936}  zoom={50} />
    </MapWrapper>
  </Layout>
)

export default Map

Map.prototype = {
  center: PropTypes.object
}
