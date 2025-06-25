import { Component } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-footer',
  imports: [Button],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  socials: { name: string; icon: string; url: string }[] = [
    {
      name: 'LinkedIn',
      icon: 'pi pi-linkedin',
      url: 'https://www.linkedin.com/in/anas-mounsif-12b380106/',
    },
    {
      name: 'GitHub',
      icon: 'pi pi-github',
      url: 'https://github.com/anasmounsif',
    },
    {
      name: 'MailTo',
      icon: 'pi pi-envelope',
      url: 'mailto:hello@anasmounsif.com',
    },
  ];

  navigateToSocial(url: string) {
    window.open(url, '_blank');
  }
}
