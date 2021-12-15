/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
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
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
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
export const getBookmarks = /* GraphQL */ `
  query GetBookmarks($id: ID!) {
    getBookmarks(id: $id) {
      id
      bookmarkList
      createdAt
      updatedAt
    }
  }
`;
export const listBookmarkss = /* GraphQL */ `
  query ListBookmarkss(
    $filter: ModelBookmarksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookmarkss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bookmarkList
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserByEmail = /* GraphQL */ `
  query GetUserByEmail(
    $email: String
    $id: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUserByEmail(
      email: $email
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        email
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
