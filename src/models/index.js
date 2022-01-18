// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TasteType = {
  "TROCKEN": "TROCKEN",
  "FEINHERB": "FEINHERB",
  "HALBTROCKEN": "HALBTROCKEN",
  "LIEBLICH": "LIEBLICH",
  "EDELSUESS": "EDELSUESS"
};

const WineType = {
  "ROT": "ROT",
  "WEISS": "WEISS",
  "ROSE": "ROSE",
  "SCHAUMWEIN": "SCHAUMWEIN"
};

const { Storage, StorageWines, Wines, GrapeTypesWines, GrapeTypes, Wineries } = initSchema(schema);

export {
  Storage,
  StorageWines,
  Wines,
  GrapeTypesWines,
  GrapeTypes,
  Wineries,
  TasteType,
  WineType
};