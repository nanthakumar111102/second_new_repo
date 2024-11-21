import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FoodmenuComponent } from './foodmenu/foodmenu.component';
import { FoodserviceComponent } from './foodservice/foodservice.component';
import { BookingComponent } from './booking/booking.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FilterComponent } from './filter/filter.component';
import { NanthaComponent } from './nantha/nantha.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"home",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"contact",component:ContactComponent},
    {path:"foodmenu",component:FoodmenuComponent},
    {path:"foodservice",component:FoodserviceComponent},
    {path:"booking",component:BookingComponent},
    {path:"our-team",component:OurTeamComponent},
    {path:"testimonial",component:TestimonialComponent},
    {path:"filter",component:FilterComponent},
    {path:"nantha",component:NanthaComponent}
    
];
