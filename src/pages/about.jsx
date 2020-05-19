import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from '../components/';
import { Layout, Container } from '../layouts/';

const About = center => (
  <Layout>
    <Helmet title={'关于我们'} />
    <Header title="关于CU-ICSO">一切皆以服务华人为本</Header>
    <Container center={center}>
      CU-ICSO，全称Chinese Union - Illinois Chinese Student Organization
      是一个在伊利诺伊大学厄巴纳-香槟分校成立的非盈利学生组织，由华人学生组成。
      旨在面向UIUC在校学员，毕业学生以及厄巴纳香槟地区华人群体发布有关学习、生活、娱乐等一系列相关信息，
      以香槟厄巴纳地区全体华人利益为中心，从而全方面帮助华人同胞提高学习质量，改善日常生活，
      拓展人际关系，如各类活动。
    </Container>
    <h1 align={'center'}>CU 简介</h1>
    <Container center={center}>
      Chinese Union 中国同学联合会(简称CU)，是由在美同学于2005年自发成立，
      于美国国税局审核批准的非营利性公益组织，类型501(c)(3)。
      CU目前在全美有22家分部，300余家合作商家，5300余名会员，700名工作人员，
      5名committee委员会成员和220位Executive Board成员。
    </Container>
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
