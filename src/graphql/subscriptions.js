/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onBookmarksChanged = /* GraphQL */ `
  subscription OnBookmarksChanged($id: ID!) {
    onBookmarksChanged(id: $id) {
      id
      bookmarkList
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateBookmarks = /* GraphQL */ `
  subscription OnCreateBookmarks {
    onCreateBookmarks {
      id
      bookmarkList
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateBookmarks = /* GraphQL */ `
  subscription OnUpdateBookmarks {
    onUpdateBookmarks {
      id
      bookmarkList
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteBookmarks = /* GraphQL */ `
  subscription OnDeleteBookmarks {
    onDeleteBookmarks {
      id
      bookmarkList
      createdAt
      updatedAt
    }
  }
`;
