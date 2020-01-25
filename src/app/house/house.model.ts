import { Coord } from "./coord.model";
import { Param } from "./param.model";

export interface House {
  coords: Coord;
  param: Param;
  street: string;
}
