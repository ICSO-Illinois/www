import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Layout, Container, Content, TableOfContents } from '../layouts/';
import { TagsBlock, Header, SEO } from '../components/';
import '../styles/prism';
import theme from '../../config/theme';
import { useWindowDimensions } from '../layouts/NavBar.jsx';

const SuggestionBar = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  background: ${props => props.theme.colors.white.light};
  box-shadow: ${props => props.theme.shadow.suggestion};
`;
const PostSuggestion = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 3rem 0 3rem;
`;

const ContentsCol = styled.div`
  padding: 3rem 1.5rem;
  flex: 1;
  position: sticky;
  max-width: 34rem;
`;

const contentsStyle = {
  position: "sticky",
  marginBottom: "5rem",
  top: "7rem",
  maxHeight: "75vh",
  float: "right",
  overflowY: "auto",
  display: "inline-block"
}

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Post = ({ data, pageContext }) => {
  const { next, prev } = pageContext;
  const { tableOfContents, html, frontmatter, excerpt } = data.markdownRemark;
  const { path, date, title, tags, description } = frontmatter;
  const image = frontmatter.cover.childImageSharp.fluid;

  const widthLarge = parseInt(theme.breakpoints.l.replace('px',''));
  const { height, width } = useWindowDimensions();

  if (width < widthLarge) {
    return (
      <Layout>
        <SEO
          title={title}
          description={description || excerpt || ' '}
          banner={image}
          pathname={path}
          article
        />
        <Header title={title} children={date} cover={image} />
        <div id="post" style={{margin: "auto", display: "flex", justifyContent: "center"}}>
          <Container>
            <h1>目录</h1>
            <Content input={tableOfContents} />
            <hr/>
            <h1>正文</h1>
            <Content input={html} />
            <TagsBlock list={tags || []} />
          </Container>
        </div>
        <SuggestionBar>
          <PostSuggestion>
            {prev && (
              <Link to={prev.frontmatter.path}>
                Previous
                <h3>{prev.frontmatter.title}</h3>
              </Link>
            )}
          </PostSuggestion>
          <PostSuggestion>
            {next && (
              <Link to={next.frontmatter.path}>
                Next
                <h3>{next.frontmatter.title}</h3>
              </Link>
            )}
          </PostSuggestion>
        </SuggestionBar>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={title}
        description={description || excerpt || ' '}
        banner={image}
        pathname={path}
        article
      />
      <Header title={title} children={date} cover={image} />
      <FlexWrapper>
        <ContentsCol>
          <div style={contentsStyle}>
            <h1>目录</h1>
            <Content input={tableOfContents} />
          </div>
        </ContentsCol>
        <Container>
          <Content input={html} />
        </Container>
        <div id="empty" style={{flex: 1, maxWidth: "34rem"}}></div>
      </FlexWrapper>
      <TagsBlock list={tags || []} />
      <SuggestionBar>
        <PostSuggestion>
          {prev && (
            <Link to={prev.frontmatter.path}>
              Previous
              <h3>{prev.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestion>
        <PostSuggestion>
          {next && (
            <Link to={next.frontmatter.path}>
              Next
              <h3>{next.frontmatter.title}</h3>
            </Link>
          )}
        </PostSuggestion>
      </SuggestionBar>
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  pageContext: PropTypes.shape({
    prev: PropTypes.object,
    next: PropTypes.object,
  }).isRequired,
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      tableOfContents(
        maxDepth: 3
        pathToSlugField: "frontmatter.path"
      )
      headings {
        value
        depth
      }
      frontmatter {
        path
        date
        title
        tags
        cover {
          childImageSharp {
            fluid(
              maxWidth: 1920
              quality: 90
              duotone: { highlight: "#386eee", shadow: "#2323be", opacity: 60 }
            ) {
              ...GatsbyImageSharpFluid_withWebp
            }
            resize(width: 1200, quality: 90) {
              src
            }
          }
        }
      }
    }
  }
`;
