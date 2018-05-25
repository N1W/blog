import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../authentication.service';

import {Subscription} from 'rxjs';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {
  guestStatus = true;
  subscription: Subscription;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.subscription = this.authenticationService.changGuestStatus
      .subscribe(
        (status: any) => {
          this.guestStatus = status;
        }
      );
  }

  logIn() {
    this.authenticationService.updateGuestStatus(false);
  }

  userLogOut() {
    this.authenticationService.updateGuestStatus(true);
  }
}
