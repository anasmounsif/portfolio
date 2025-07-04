import { Component, input } from '@angular/core';
import { Project } from '../../model/project.model';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { StatusPipe } from '../../pipes/status.pipe';

@Component({
  selector: 'app-project-preview',
  imports: [TagModule, ButtonModule, ImageModule, StatusPipe],
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.scss'],
})
export class ProjectPreviewComponent {
  project = input.required<Project>();

  navigateToProject() {
    if (this.project().isAccessible) {
      window.open(this.project().url, '_blank');
    }
  }
}
