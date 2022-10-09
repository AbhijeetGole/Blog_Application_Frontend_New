import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchBlog: any[]): any {
    if (!value) {
      return [];
    }
    if (!searchBlog) {
      return value;
    }

    return value.filter(function(search: { title: { toLocaleLowerCase: () => any[][]; } }){
      return search.title.toLocaleLowerCase().indexOf(searchBlog) > -1
    });
  }

}
