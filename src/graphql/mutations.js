/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStorage = /* GraphQL */ `
  mutation CreateStorage(
    $input: CreateStorageInput!
    $condition: ModelStorageConditionInput
  ) {
    createStorage(input: $input, condition: $condition) {
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
export const updateStorage = /* GraphQL */ `
  mutation UpdateStorage(
    $input: UpdateStorageInput!
    $condition: ModelStorageConditionInput
  ) {
    updateStorage(input: $input, condition: $condition) {
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
export const deleteStorage = /* GraphQL */ `
  mutation DeleteStorage(
    $input: DeleteStorageInput!
    $condition: ModelStorageConditionInput
  ) {
    deleteStorage(input: $input, condition: $condition) {
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
export const createGrapeTypes = /* GraphQL */ `
  mutation CreateGrapeTypes(
    $input: CreateGrapeTypesInput!
    $condition: ModelGrapeTypesConditionInput
  ) {
    createGrapeTypes(input: $input, condition: $condition) {
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
export const updateGrapeTypes = /* GraphQL */ `
  mutation UpdateGrapeTypes(
    $input: UpdateGrapeTypesInput!
    $condition: ModelGrapeTypesConditionInput
  ) {
    updateGrapeTypes(input: $input, condition: $condition) {
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
export const deleteGrapeTypes = /* GraphQL */ `
  mutation DeleteGrapeTypes(
    $input: DeleteGrapeTypesInput!
    $condition: ModelGrapeTypesConditionInput
  ) {
    deleteGrapeTypes(input: $input, condition: $condition) {
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
export const createWineries = /* GraphQL */ `
  mutation CreateWineries(
    $input: CreateWineriesInput!
    $condition: ModelWineriesConditionInput
  ) {
    createWineries(input: $input, condition: $condition) {
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
export const updateWineries = /* GraphQL */ `
  mutation UpdateWineries(
    $input: UpdateWineriesInput!
    $condition: ModelWineriesConditionInput
  ) {
    updateWineries(input: $input, condition: $condition) {
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
export const deleteWineries = /* GraphQL */ `
  mutation DeleteWineries(
    $input: DeleteWineriesInput!
    $condition: ModelWineriesConditionInput
  ) {
    deleteWineries(input: $input, condition: $condition) {
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
export const createWines = /* GraphQL */ `
  mutation CreateWines(
    $input: CreateWinesInput!
    $condition: ModelWinesConditionInput
  ) {
    createWines(input: $input, condition: $condition) {
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
export const updateWines = /* GraphQL */ `
  mutation UpdateWines(
    $input: UpdateWinesInput!
    $condition: ModelWinesConditionInput
  ) {
    updateWines(input: $input, condition: $condition) {
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
export const deleteWines = /* GraphQL */ `
  mutation DeleteWines(
    $input: DeleteWinesInput!
    $condition: ModelWinesConditionInput
  ) {
    deleteWines(input: $input, condition: $condition) {
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
export const createGrapeTypesWines = /* GraphQL */ `
  mutation CreateGrapeTypesWines(
    $input: CreateGrapeTypesWinesInput!
    $condition: ModelGrapeTypesWinesConditionInput
  ) {
    createGrapeTypesWines(input: $input, condition: $condition) {
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
export const updateGrapeTypesWines = /* GraphQL */ `
  mutation UpdateGrapeTypesWines(
    $input: UpdateGrapeTypesWinesInput!
    $condition: ModelGrapeTypesWinesConditionInput
  ) {
    updateGrapeTypesWines(input: $input, condition: $condition) {
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
export const deleteGrapeTypesWines = /* GraphQL */ `
  mutation DeleteGrapeTypesWines(
    $input: DeleteGrapeTypesWinesInput!
    $condition: ModelGrapeTypesWinesConditionInput
  ) {
    deleteGrapeTypesWines(input: $input, condition: $condition) {
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
export const createStorageWines = /* GraphQL */ `
  mutation CreateStorageWines(
    $input: CreateStorageWinesInput!
    $condition: ModelStorageWinesConditionInput
  ) {
    createStorageWines(input: $input, condition: $condition) {
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
export const updateStorageWines = /* GraphQL */ `
  mutation UpdateStorageWines(
    $input: UpdateStorageWinesInput!
    $condition: ModelStorageWinesConditionInput
  ) {
    updateStorageWines(input: $input, condition: $condition) {
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
export const deleteStorageWines = /* GraphQL */ `
  mutation DeleteStorageWines(
    $input: DeleteStorageWinesInput!
    $condition: ModelStorageWinesConditionInput
  ) {
    deleteStorageWines(input: $input, condition: $condition) {
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
