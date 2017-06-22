import {downgradeInjectable} from '@angular/upgrade/static';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {API} from '../../../constants';
import {Injectable} from "@angular/core";
declare var angular:any

@Injectable()
class TeleporterService {

  constructor(private http: Http) {
  }

  drivers() {
    let url = API + 'teleporter/drivers';
    return this.http.get(url).toPromise().then((data) => {
      return data.json();
    });
  }

  launch(params) {
    let url = API + 'teleporter/job';
    return this.http.post(url, params).toPromise().then((data) => {
      return data.json();
    });
  }

  testConnection(params) {
    let url = API + 'teleporter/test';
    return this.http.post(url, params).toPromise().then((data) => {
      return data.json();
    });
  }

  status() {
    let url = API + 'teleporter/status';
    return this.http.get(url).toPromise().then((data) => {
      return data.json();
    });
  }

  getTablesNames(params) {
    let url = API + 'teleporter/tables';
    return this.http.post(url, params).toPromise().then((data) => {
      return data.json();
    })
  }

  getMigrationConfig(params) {
    var args = angular.copy(params);
    let url = API + 'teleporter/job';
    if(args.strategy === "naive") {
      args.strategy = "interactive";
    }
    else if(args.strategy === "naive-aggregate") {
      args.strategy = "interactive-aggr";
    }
    return this.http.post(url, args).toPromise().then((data) => {
      return data.json();
    })
  }

}


angular.module('command.services', []).factory(
  `TeleporterService`,
  downgradeInjectable(TeleporterService));

export {TeleporterService};
