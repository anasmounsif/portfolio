import { Component, input } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Project } from '../../model/project.model';

@Component({
  selector: 'app-project-preview',
  imports: [JsonPipe],
  templateUrl: './project-preview.component.html',
})
export class ProjectPreviewComponent {
  project = input.required<Project>();
}
