import { STATUSES } from '../constants/statuses';
import { ProjectStatus } from './project-status.enum';

export type StatusProps = (typeof STATUSES)[ProjectStatus];
