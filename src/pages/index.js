import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Nicky Bee</h1>
      <h4>{data.allMarkdownRemark.totalCount}</h4>
      <div >
        {data.allMarkdownRemark.edges.map(({node}) => 
          <div key={node.id} style={{ marginBottom: `1.45rem` }}>
            <h4>{node.frontmatter.title} - {node.frontmatter.date}</h4>
            <p>{node.excerpt}</p>
          </div>
        )}
      </div>
    </div>

  </Layout>
);

export default IndexPage;

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          excerpt
          html
        }
      }
      totalCount
    }
  }
`;
