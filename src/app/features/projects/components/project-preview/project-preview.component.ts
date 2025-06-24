import { Component, computed, input } from '@angular/core';
import { Project } from '../../model/project.model';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ProjectStatus } from '../../model/project-status.enum';
import { Status } from '../../model/status.model';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-project-preview',
  imports: [TagModule, ButtonModule, ImageModule],
  templateUrl: './project-preview.component.html',
  styleUrls: ['./project-preview.component.scss'],
})
export class ProjectPreviewComponent {
  project = input.required<Project>();
  isAccessible = input<boolean>(true);
  projectStatus = computed<Status>(() => this.statusMap[this.project().status]);

  readonly statusMap: Record<ProjectStatus, Status> = {
    [ProjectStatus.draft]: { value: 'Draft', severity: 'secondary' },
    [ProjectStatus.active]: { value: 'Active', severity: 'info' },
    [ProjectStatus.paused]: { value: 'Paused', severity: 'warn' },
    [ProjectStatus.completed]: { value: 'Completed', severity: 'success' },
    [ProjectStatus.cancelled]: { value: 'Cancelled', severity: 'danger' },
  };
}
