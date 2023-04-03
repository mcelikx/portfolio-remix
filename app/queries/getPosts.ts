import { gql } from "~/utils/graphcms";

export const getPosts = gql`
  query {
    # Query enum values - https://graphcms.com/docs/api-reference/schema/enumerations

    posts(orderBy: date_DESC) {
      content {
        html
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
