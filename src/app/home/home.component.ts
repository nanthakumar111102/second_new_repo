import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient } from '@angular/common/http';
import { StatePipe } from '../state.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,HeaderComponent,FooterComponent, StatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
userList:any;
constructor(private http:HttpClient){
  this.getData();//call this during page load
}
getData(){
  this.http.get("https://www.apirequest.in/users/").subscribe({
    next:(res:any)=>{
      console.log(res);
      this.userList=res;
      // console.log(this.userList);
    },
  })
}
sex="m";
}
