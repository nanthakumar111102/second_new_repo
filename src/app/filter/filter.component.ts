import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [RouterModule,HeaderComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  obs=of(1,2,3);
  filterdata(){
    this.obs.subscribe((n)=>{
      console.log(n);
    })
  }

}
