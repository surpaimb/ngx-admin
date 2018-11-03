import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiConfigService {
  getApiByName(name) {
    let path = '';
    switch (name) {
      case 'current.users':
        path = '/users/current';
        break;

      default:
        break;
    }
    return this.getApi(path);
  }

  getApi(path) {
    return `${environment.API_URL}${path}`;
  }
}
