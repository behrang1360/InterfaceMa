import { Coord } from "./coord.model";
import { Param } from "./param.model";
import { Route } from '../model/route.model';

export interface House {
  coords: Coord;
  params: Param;
  street: string;
  routes: Route[];
  distance: number;
}
