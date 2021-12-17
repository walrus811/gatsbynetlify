import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

export const query = graphql`
  query CocktailQuery {
    file(name: { eq: "cocktail" }) {
      childImageSharp {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
  }
`;

export default function AboutPage({ data }) {
  console.log(JSON.stringify(data, null, 2));
  return (
    <Layout title="About This site" description="galaxy_z!">
      <GatsbyImage
        image={getImage(data.file)}
        alit="a cocktail set inside flowers"
      />
      <h1>About This Sitew</h1>
      <Link to="/">Go Home</Link>
    </Layout>
  );
}
