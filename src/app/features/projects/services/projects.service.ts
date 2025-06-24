import { inject, Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Project } from '../model/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private firestore = inject(Firestore);

  private ref = collection(this.firestore, 'projects');

  readonly projects$ = collectionData(this.ref, {
    idField: 'id',
  }) as Observable<Project[]>;
}
