import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  constructor() { }

  private headerContentSubject = new BehaviorSubject<string>('Default Header Content');
  headerContent$ = this.headerContentSubject.asObservable();

  updateHeaderContent(content: string){
    this.headerContentSubject.next(content);
  }
}
