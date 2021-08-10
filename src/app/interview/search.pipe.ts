import {Injector, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTable'
})

export class SearchTable implements PipeTransform{
transform(value, searchData){
  if(searchData.contains(value.name) || (searchData.contains(value.city)){
    return true;
  }
  return false;
}

}