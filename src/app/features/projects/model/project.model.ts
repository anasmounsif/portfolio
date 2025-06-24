import { ProjectStatus } from './project-status.enum';

export interface Project {
  id: string;
  title: string;
  status: ProjectStatus;
  image: string; // TODO: to treat as blob
}
