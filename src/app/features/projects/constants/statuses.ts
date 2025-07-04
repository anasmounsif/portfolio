import { ProjectStatus } from '../model/project-status.enum';
import { Status } from '../model/status.model';

export const STATUSES: Record<ProjectStatus, Status> = {
  [ProjectStatus.draft]: { value: 'Draft', severity: 'secondary' },
  [ProjectStatus.active]: { value: 'Active', severity: 'info' },
  [ProjectStatus.paused]: { value: 'Paused', severity: 'warn' },
  [ProjectStatus.completed]: { value: 'Completed', severity: 'success' },
  [ProjectStatus.cancelled]: { value: 'Cancelled', severity: 'danger' },
} as const;
