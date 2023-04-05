import { gql } from "~/utils/graphcms";

export const getPost = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      content {
        html
        raw
      }
      coverImage {
        url
      }
      date
      id
      slug
      tags
      tags
      title
    }
  }
`;
