import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from '../components/';
import { Layout, Container } from '../layouts/';

const ErrorPage = center => (
  <Layout>
    <Helmet title={'404'} />
    <Header title="404" />
    <Container center={center}>
      <h1>唔，您要的页面走丢了</h1>
      <h3>本页面不存咋或已无法访问</h3>
      <h3>
        您可以返回 <Link to="/">首页</Link>
      </h3>
    </Container>
  </Layout>
);

export default ErrorPage;

ErrorPage.propTypes = {
  center: PropTypes.object,
};
