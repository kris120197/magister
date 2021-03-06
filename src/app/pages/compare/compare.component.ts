import {AfterViewInit, Component} from '@angular/core';
import {StudentsService} from '../../shared/services/students.service';
import {Observable} from 'rxjs/internal/Observable';
import {Group} from '../../models/Group';
import * as M from 'materialize-css';


@Component({
  selector: 'mag-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements AfterViewInit {

  public groups$: Observable<Group[]> = this._studentsService.getGroups();

  public selectedGroups: Group[] = [];

  constructor(
    private readonly _studentsService: StudentsService
  ) {}

  createSelectedGroups(groups: Group[]): void {
    this.selectedGroups = groups;
    this.selectedGroups = this.selectedGroups.slice();
  }

  ngAfterViewInit(): void {
    // Init Collapsible from Materialize CSS
    setTimeout(() => {
      M.Collapsible.init(document.querySelectorAll('.collapsible.expandable'), {
        accordion: false
      });
    }, 10);
  }

}
