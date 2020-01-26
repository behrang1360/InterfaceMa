import { Marker } from "./marker.model";

export interface Location {
  latitude: number;
  longitude: number;
  mapType?: string;
  zoom?: number;
  marker: Marker;
}
