import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header, CampusMap } from '../components/';
import { Layout } from '../layouts/';
import styled from '@emotion/styled';

const MapWrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 3rem;
  .leaflet-container {
    box-shadow: ${props => props.theme.shadow.feature.small.default};
    height: 100vh;
    width: 50vw;
    margin: 0 auto;
    border-radius: 10px;
    @media (max-width: ${props => props.theme.breakpoints.m}) {
      width: 70vw;
    }
    @media (max-width: ${props => props.theme.breakpoints.s}) {
      width: 90vw;
    }
  }
`

const Map = () => (
  <Layout>
    <Helmet title={'ICSO 校园地图'}></Helmet>
    <Header title={'校园地图'} children={'看看校园里的地点吧'}/>
    <MapWrapper>
      <CampusMap lat={40.1091771} lng={-88.2270936} zoom={50}/>
      <p style={{textAlign: "center", fontSize: "0.8rem", color: "#828282", marginTop: "2rem"}}>(Made by Chenhui Zhang)</p>
    </MapWrapper>
  </Layout>
)

export default Map

Map.prototype = {
  center: PropTypes.object
}
