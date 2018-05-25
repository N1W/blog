import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {ActivatedRoute} from '@angular/router';

import {Subject} from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class AuthenticationService {
  changGuestStatus = new Subject<any>();

  constructor(private http: Http, private route: ActivatedRoute) {}

  updateGuestStatus(newStatus) {
    this.changGuestStatus.next(newStatus);
  }
}
