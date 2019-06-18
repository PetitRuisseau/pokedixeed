import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray'
})
export class FilterArrayPipe implements PipeTransform {
  transform(items: any, filter: any, defaultFilter: boolean): any {
    if (!filter ){
      return items;
    }

    if (!Array.isArray(items)){
      return items;
    }

    if (filter && Array.isArray(items)) {
      let filterKeys = Object.keys(filter);
      return items.filter(item => {
        return filterKeys.some((keyName) => {
          if (!Array.isArray(filter[keyName])) {
            return true
          }
          return filter[keyName].indexOf(item[keyName].name) >= 0 || filter[keyName].length == 0;
        });
      });
    }
  }
}