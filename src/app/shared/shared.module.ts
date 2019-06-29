import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material';
import {FooterComponent} from './layouts/footer/footer.component';
import {ContactUsComponent} from './layouts/contact-us/contact-us.component';
import { HeaderComponent } from './layouts/header/header.component';
import { AboutComponent } from './layouts/about/about.component';
import { ServicesComponent } from './layouts/services/services.component';
import { ExperiencesComponent } from './layouts/experiences/experiences.component';
import { BlogComponent } from './layouts/blog/blog.component';
import { GalleryComponent } from './layouts/gallery/gallery.component';
import { ActionBannerComponent } from './layouts/action-banner/action-banner.component';
import { TestimonialsComponent } from './layouts/testimonials/testimonials.component';

@NgModule({
  declarations: [
    FooterComponent,
    ContactUsComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    ExperiencesComponent,
    BlogComponent,
    GalleryComponent,
    ActionBannerComponent,
    TestimonialsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    MatButtonModule,
    FooterComponent,
    ContactUsComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    ExperiencesComponent,
    BlogComponent,
    GalleryComponent,
    ActionBannerComponent,
    TestimonialsComponent
  ]
})
export class SharedModule {
}
