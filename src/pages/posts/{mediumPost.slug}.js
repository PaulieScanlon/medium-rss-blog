import React, { Fragment } from 'react';
import { graphql, Link } from 'gatsby';

const MediumPost = ({ data: { mediumPost } }) => {
  return (
    <Fragment>
      <Link to="/">Back</Link>
      <pre style={{ whiteSpace: 'pre-wrap ' }}>{JSON.stringify(mediumPost, null, 2)}</pre>
    </Fragment>
  );
};

export const query = graphql`
  query ($id: String) {
    mediumPost(id: { eq: $id }) {
      id
      title
      author
      published
      category
      content
    }
  }
`;

export default MediumPost;
