import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum TasteType {
  TROCKEN = "TROCKEN",
  FEINHERB = "FEINHERB",
  HALBTROCKEN = "HALBTROCKEN",
  LIEBLICH = "LIEBLICH",
  EDELSUESS = "EDELSUESS"
}

export enum WineType {
  ROT = "ROT",
  WEISS = "WEISS",
  ROSE = "ROSE",
  SCHAUMWEIN = "SCHAUMWEIN"
}



type StorageMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type StorageWinesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WinesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GrapeTypesWinesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GrapeTypesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type WineriesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Storage {
  readonly id: string;
  readonly name?: string;
  readonly Storage?: (StorageWines | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Storage, StorageMetaData>);
  static copyOf(source: Storage, mutator: (draft: MutableModel<Storage, StorageMetaData>) => MutableModel<Storage, StorageMetaData> | void): Storage;
}

export declare class StorageWines {
  readonly id: string;
  readonly storage: Storage;
  readonly wines: Wines;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<StorageWines, StorageWinesMetaData>);
  static copyOf(source: StorageWines, mutator: (draft: MutableModel<StorageWines, StorageWinesMetaData>) => MutableModel<StorageWines, StorageWinesMetaData> | void): StorageWines;
}

export declare class Wines {
  readonly id: string;
  readonly name?: string;
  readonly type?: WineType | keyof typeof WineType;
  readonly tasteType?: TasteType | keyof typeof TasteType;
  readonly inventory?: number;
  readonly origin?: string;
  readonly wineriesID?: string;
  readonly grapetypess?: (GrapeTypesWines | null)[];
  readonly storages?: (StorageWines | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Wines, WinesMetaData>);
  static copyOf(source: Wines, mutator: (draft: MutableModel<Wines, WinesMetaData>) => MutableModel<Wines, WinesMetaData> | void): Wines;
}

export declare class GrapeTypesWines {
  readonly id: string;
  readonly grapetypes: GrapeTypes;
  readonly wines: Wines;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<GrapeTypesWines, GrapeTypesWinesMetaData>);
  static copyOf(source: GrapeTypesWines, mutator: (draft: MutableModel<GrapeTypesWines, GrapeTypesWinesMetaData>) => MutableModel<GrapeTypesWines, GrapeTypesWinesMetaData> | void): GrapeTypesWines;
}

export declare class GrapeTypes {
  readonly id: string;
  readonly name?: string;
  readonly Grapetypes?: (GrapeTypesWines | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<GrapeTypes, GrapeTypesMetaData>);
  static copyOf(source: GrapeTypes, mutator: (draft: MutableModel<GrapeTypes, GrapeTypesMetaData>) => MutableModel<GrapeTypes, GrapeTypesMetaData> | void): GrapeTypes;
}

export declare class Wineries {
  readonly id: string;
  readonly Wineries?: (Wines | null)[];
  readonly name?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Wineries, WineriesMetaData>);
  static copyOf(source: Wineries, mutator: (draft: MutableModel<Wineries, WineriesMetaData>) => MutableModel<Wineries, WineriesMetaData> | void): Wineries;
}