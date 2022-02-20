import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

const Page = () => {
  const {
    allMediumPost: { nodes }
  } = useStaticQuery(graphql`
    query {
      allMediumPost {
        nodes {
          title
          gatsbyPath(filePath: "/posts/{mediumPost.slug}")
        }
      }
    }
  `);

  return (
    <ul>
      {nodes.map((node, index) => {
        const { title, gatsbyPath } = node;
        return (
          <li key={index}>
            <Link to={gatsbyPath}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Page;
