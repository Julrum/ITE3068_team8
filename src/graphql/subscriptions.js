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
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      name
      description
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
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
