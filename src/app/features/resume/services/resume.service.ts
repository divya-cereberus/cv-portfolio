import { Injectable, signal, computed } from '@angular/core';
import { RESUME_DATA } from '../../../data/resume.data';
import { ResumeProfile } from '../../../data/models/resume.model';

@Injectable({ providedIn: 'root' })
export class ResumeService {
  private profileState = signal<ResumeProfile>(RESUME_DATA);

  // Readonly consumers
  readonly profile = this.profileState.asReadonly();
  readonly skills = computed(() => this.profileState().skills);
  readonly experiences = computed(() => this.profileState().experiences);
  readonly projects = computed(() => this.profileState().projects);
}