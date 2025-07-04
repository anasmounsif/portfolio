import { ProjectStatus } from './project-status.enum';

export interface Project {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  image: string;
  imageHex: string;
  isAccessible: boolean;
  showProject: boolean;
  url: string;
}
