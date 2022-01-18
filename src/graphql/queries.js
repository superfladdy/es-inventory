/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getStorage = /* GraphQL */ `
  query GetStorage($id: ID!) {
    getStorage(id: $id) {
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
export const listStorages = /* GraphQL */ `
  query ListStorages(
    $filter: ModelStorageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStorages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncStorages = /* GraphQL */ `
  query SyncStorages(
    $filter: ModelStorageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStorages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getGrapeTypes = /* GraphQL */ `
  query GetGrapeTypes($id: ID!) {
    getGrapeTypes(id: $id) {
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
export const listGrapeTypess = /* GraphQL */ `
  query ListGrapeTypess(
    $filter: ModelGrapeTypesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGrapeTypess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncGrapeTypes = /* GraphQL */ `
  query SyncGrapeTypes(
    $filter: ModelGrapeTypesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGrapeTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getWineries = /* GraphQL */ `
  query GetWineries($id: ID!) {
    getWineries(id: $id) {
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
export const listWineriess = /* GraphQL */ `
  query ListWineriess(
    $filter: ModelWineriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWineriess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncWineries = /* GraphQL */ `
  query SyncWineries(
    $filter: ModelWineriesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWineries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getWines = /* GraphQL */ `
  query GetWines($id: ID!) {
    getWines(id: $id) {
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
export const listWiness = /* GraphQL */ `
  query ListWiness(
    $filter: ModelWinesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWiness(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncWines = /* GraphQL */ `
  query SyncWines(
    $filter: ModelWinesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWines(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncGrapeTypesWines = /* GraphQL */ `
  query SyncGrapeTypesWines(
    $filter: ModelGrapeTypesWinesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGrapeTypesWines(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        grapetypesID
        winesID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncStorageWines = /* GraphQL */ `
  query SyncStorageWines(
    $filter: ModelStorageWinesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStorageWines(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        storageID
        winesID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
