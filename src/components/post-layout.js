import * as React from 'react';
import Layout from './layout';
import { Link } from 'gatsby';

export default function PostLayout({ children, pageContext }) {
  const { title, description, test } = pageContext.frontmatter;
  console.log(test);
  return (
    <Layout title={title} description={description}>
      {children}
      <Link to="/">&larr; back</Link>
    </Layout>
  );
}
