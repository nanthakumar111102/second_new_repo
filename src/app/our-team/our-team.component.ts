import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { StatePipe } from '../state.pipe';

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,StatePipe],
  templateUrl: './our-team.component.html',
  styleUrl: './our-team.component.css'
})
export class OurTeamComponent {
  state1="tn";
  state2="kl";
  // state3="AP";

}
