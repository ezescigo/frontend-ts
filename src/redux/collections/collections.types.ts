import { common } from "@material-ui/core/colors";
import { ModuleResolutionKind } from "typescript";
import { Category } from "../../models";
import { Item } from "../../models";

export interface CollectionsState {
    collections: Collection[],
    query: Item[],
    isFetching: boolean;
    isFetchingQuery: boolean;
    isLoaded: boolean;
    errorMessage?: string;
  };

export interface Collection {
    category: Category
    products: Item[]
}

export interface FetchCollectionRequest {
  category: string;
  subCategory?: string;
}
 // habria que repensar el modelo para que sea algo commo
//      [
//          {
//              "title": "Categoria1",
//              "collection": [...collection1]
//          }
//      ] 
//
//