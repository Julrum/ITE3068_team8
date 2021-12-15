/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addArticleToBookmarks = /* GraphQL */ `
  mutation AddArticleToBookmarks($input: AddArticleInput) {
    addArticleToBookmarks(input: $input) {
      id
      bookmarkList
      createdAt
      updatedAt
    }
  }
`;
export const removeArticleFromBookmarks = /* GraphQL */ `
  mutation RemoveArticleFromBookmarks($input: RemoveArticleInput) {
    removeArticleFromBookmarks(input: $input) {
      id
      bookmarkList
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createBookmarks = /* GraphQL */ `
  mutation CreateBookmarks(
    $input: CreateBookmarksInput!
    $condition: ModelBookmarksConditionInput
  ) {
    createBookmarks(input: $input, condition: $condition) {
      id
      bookmarkList
      createdAt
      updatedAt
    }
  }
`;
export const updateBookmarks = /* GraphQL */ `
  mutation UpdateBookmarks(
    $input: UpdateBookmarksInput!
    $condition: ModelBookmarksConditionInput
  ) {
    updateBookmarks(input: $input, condition: $condition) {
      id
      bookmarkList
      createdAt
      updatedAt
    }
  }
`;
export const deleteBookmarks = /* GraphQL */ `
  mutation DeleteBookmarks(
    $input: DeleteBookmarksInput!
    $condition: ModelBookmarksConditionInput
  ) {
    deleteBookmarks(input: $input, condition: $condition) {
      id
      bookmarkList
      createdAt
      updatedAt
    }
  }
`;
