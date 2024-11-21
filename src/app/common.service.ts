import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  msg=new BehaviorSubject<string>("");

  constructor() { }
  sendMsg(msg:string){
    this.msg.next(msg);
  }
}
