import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { District } from 'src/app/models/district';
import { State } from 'src/app/models/state';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-switchmap-demo',
  templateUrl: './switchmap-demo.component.html',
  styleUrls: ['./switchmap-demo.component.scss'],
})
export class SwitchmapDemoComponent implements OnInit {
  districtList!: District[];
  constructor(private _serv: DataService, private route: Router) {}

  ngOnInit(): void {
    // this.withoutSwitchMap();
    this.withSwitchMap();
  }

  private withoutSwitchMap() {
    this._serv.getStateById(1).subscribe({
      next: (state: State) => {
        this._serv.getDistrictsByStateId(state.id).subscribe({
          next: (dist: District[]) => {
            this.districtList = dist;
          },
        });
      },
    });
  }

  private withSwitchMap() {
    this._serv
      .getStateById(1)
      .pipe(
        switchMap((stats) => this._serv.getDistrictsByStateId(stats.id)),
        tap((dist) => {
          this.districtList = dist;
        })
      )
      .subscribe();
  }

  navTo() {
    this.route.navigateByUrl('rxjs/search');
  }
}
