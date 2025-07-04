import { Pipe, PipeTransform } from '@angular/core';
import { Status } from '../model/status.model';
import { ProjectStatus } from '../model/project-status.enum';
import { StatusProps } from '../model/status-props.type';
import { STATUSES } from '../constants/statuses';

@Pipe({
  name: 'status',
})
export class StatusPipe implements PipeTransform {
  transform<K extends keyof Status>(
    value: ProjectStatus,
    prop: K,
  ): StatusProps[K] {
    return STATUSES[value][prop];
  }
}
