import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'state',
  standalone: true
})
export class StatePipe implements PipeTransform {

  // transform(value: any, ...args: string[]): any {
  //   var stateList:{[key:string]:string}={"TN":"Tamilnadu","KL":"kerala","AP":"andra"}
  //   return stateList[value];
  // }
  
//   transform(value:any, ...args: string[]):any{
// var statelist1:{[key:string]:string}={"m":"male","f":"female"}
// return statelist1[value]
//   }

transform(value:any,...args:string[]):any{
  var statelist:{[key:string]:string}={"tn":"tamilnadu","kl":"kerala"};
  return statelist[value];
}

}
