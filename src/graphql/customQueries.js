export const getUserByEmailCustom = /* GraphQL */ `
  query GetUserByEmail(
    $email: String
  ) {
    getUserByEmail(
      email: $email
    ) {
      items {
        id
        email
        name
        createdAt
        bookmarkId
        bookmark {
          id
          bookmarkList
          createdAt
          updatedAt
        }
        updatedAt
      }
      nextToken
    }
  }
`;