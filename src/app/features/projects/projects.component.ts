import { Component } from '@angular/core';
import { ProjectPreviewComponent } from './components/project-preview/project-preview.component';

@Component({
  selector: 'app-projects',
  imports: [ProjectPreviewComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {}
