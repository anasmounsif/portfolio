import { Component, inject } from '@angular/core';
import { ProjectPreviewComponent } from './components/project-preview/project-preview.component';
import { AsyncPipe } from '@angular/common';
import { ProjectsService } from './services/projects.service';

@Component({
  selector: 'app-projects',
  imports: [ProjectPreviewComponent, AsyncPipe],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  readonly projectsService = inject(ProjectsService);
}
