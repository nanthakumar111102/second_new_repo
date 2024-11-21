import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-nantha',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './nantha.component.html',
  styleUrl: './nantha.component.css'
})
export class NanthaComponent {

}
