import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(
    value: any,
    minRooms: Number,
    propName: string,
    hasAllData?: boolean
  ): any {
    if (typeof value === "undefined") return value;

    if (hasAllData === null) return value;

    if (value.length === 0) return value;

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

    if (hasAllData) {
      return ArraySortedByRoom.sort((a, b) =>
        a.params.rooms > b.params.rooms
          ? 1
          : b.params.rooms > a.params.rooms
          ? -1
          : 0
      );
    } else {
      return ArraySotredByStreet.sort((a, b) =>
        a.street > b.street ? 1 : b.street > a.street ? -1 : 0
      );
    }
  }
}
