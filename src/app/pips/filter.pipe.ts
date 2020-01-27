import { Pipe, PipeTransform } from "@angular/core";
import { FilterType } from "../model/filterType.enum";
import { House } from "../house/house.model";
import { Distance } from "../model/distance.model";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(
    value: any,
    minRooms: Number,
    propName: string,
    filterType: FilterType
  ): any {
    if (typeof value === "undefined") return value;

    if (filterType === FilterType.Appropriate) {
      return value
        .filter(item => {
          return (
            typeof item.params !== "undefined" &&
            typeof item.params.rooms !== "undefined" &&
            typeof item.params.value !== "undefined" &&
            item.params.rooms >= 10 &&
            item.params.value <= 5000000 &&
            item.distance > 1
          );
        })
        .reduce((result, item) => {
          let minRest = result.length ? result[0].distance : item.distance;

          if (item.distance < minRest) {
            minRest = item.distance;
            result.length = 0;
          }

          if (item.distance === minRest) {
            result.push(item);
          }

          return result;
        }, []);
    }

    if (filterType === FilterType.Distance) {
      if (!Array.isArray(value)) {
        return;
      }
      value.sort((a: House, b: House) => {
        if (a["distance"] < b["distance"]) {
          return -1;
        } else if (a["distance"] > b["distance"]) {
          return 1;
        } else {
          return 0;
        }
      });
      return value;
    }

    const ArraySortedByRoom = [];
    const ArraySotredByStreet = [];

    for (const item of value) {
      if (
        typeof item.params !== "undefined" &&
        typeof item.params.rooms !== "undefined" &&
        typeof item.params.value !== "undefined"
      ) {
        if (item.params[propName] >= minRooms) {
          ArraySortedByRoom.push(item);
        }
      } else {
        ArraySotredByStreet.push(item);
      }
    }

    if (filterType == FilterType.Rooms) {
      return ArraySortedByRoom.sort((a, b) =>
        a.params.rooms > b.params.rooms
          ? 1
          : b.params.rooms > a.params.rooms
          ? -1
          : 0
      );
    } else if (filterType == FilterType.Street) {
      return ArraySotredByStreet.sort((a, b) =>
        a.street > b.street ? 1 : b.street > a.street ? -1 : 0
      );
    } else return value;
  }
}
