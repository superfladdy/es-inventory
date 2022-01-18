/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStorage = /* GraphQL */ `
  subscription OnCreateStorage {
    onCreateStorage {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Storage {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateStorage = /* GraphQL */ `
  subscription OnUpdateStorage {
    onUpdateStorage {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Storage {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteStorage = /* GraphQL */ `
  subscription OnDeleteStorage {
    onDeleteStorage {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Storage {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateGrapeTypes = /* GraphQL */ `
  subscription OnCreateGrapeTypes {
    onCreateGrapeTypes {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Grapetypes {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateGrapeTypes = /* GraphQL */ `
  subscription OnUpdateGrapeTypes {
    onUpdateGrapeTypes {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Grapetypes {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteGrapeTypes = /* GraphQL */ `
  subscription OnDeleteGrapeTypes {
    onDeleteGrapeTypes {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Grapetypes {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateWineries = /* GraphQL */ `
  subscription OnCreateWineries {
    onCreateWineries {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Wineries {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateWineries = /* GraphQL */ `
  subscription OnUpdateWineries {
    onUpdateWineries {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Wineries {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteWineries = /* GraphQL */ `
  subscription OnDeleteWineries {
    onDeleteWineries {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Wineries {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateWines = /* GraphQL */ `
  subscription OnCreateWines {
    onCreateWines {
      id
      name
      type
      tasteType
      inventory
      origin
      wineriesID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      grapetypess {
        nextToken
        startedAt
      }
      storages {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateWines = /* GraphQL */ `
  subscription OnUpdateWines {
    onUpdateWines {
      id
      name
      type
      tasteType
      inventory
      origin
      wineriesID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      grapetypess {
        nextToken
        startedAt
      }
      storages {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteWines = /* GraphQL */ `
  subscription OnDeleteWines {
    onDeleteWines {
      id
      name
      type
      tasteType
      inventory
      origin
      wineriesID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      grapetypess {
        nextToken
        startedAt
      }
      storages {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateGrapeTypesWines = /* GraphQL */ `
  subscription OnCreateGrapeTypesWines {
    onCreateGrapeTypesWines {
      id
      grapetypesID
      winesID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      grapetypes {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      wines {
        id
        name
        type
        tasteType
        inventory
        origin
        wineriesID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateGrapeTypesWines = /* GraphQL */ `
  subscription OnUpdateGrapeTypesWines {
    onUpdateGrapeTypesWines {
      id
      grapetypesID
      winesID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      grapetypes {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      wines {
        id
        name
        type
        tasteType
        inventory
        origin
        wineriesID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteGrapeTypesWines = /* GraphQL */ `
  subscription OnDeleteGrapeTypesWines {
    onDeleteGrapeTypesWines {
      id
      grapetypesID
      winesID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      grapetypes {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      wines {
        id
        name
        type
        tasteType
        inventory
        origin
        wineriesID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onCreateStorageWines = /* GraphQL */ `
  subscription OnCreateStorageWines {
    onCreateStorageWines {
      id
      storageID
      winesID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      storage {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      wines {
        id
        name
        type
        tasteType
        inventory
        origin
        wineriesID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateStorageWines = /* GraphQL */ `
  subscription OnUpdateStorageWines {
    onUpdateStorageWines {
      id
      storageID
      winesID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      storage {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      wines {
        id
        name
        type
        tasteType
        inventory
        origin
        wineriesID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteStorageWines = /* GraphQL */ `
  subscription OnDeleteStorageWines {
    onDeleteStorageWines {
      id
      storageID
      winesID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      storage {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      wines {
        id
        name
        type
        tasteType
        inventory
        origin
        wineriesID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
