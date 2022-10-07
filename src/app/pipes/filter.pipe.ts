import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchBlog: any[]): any {
    return value.filter(function(search: { title: any[][]; }){
      return search.title.indexOf(searchBlog) > -1
    });
  }

}
