import { ProjectStatus } from './project-status.enum';

export interface Project {
  id: string;
  title: string;
  status: ProjectStatus;
}
