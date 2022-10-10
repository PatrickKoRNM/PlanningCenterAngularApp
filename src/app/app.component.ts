import {Component, OnInit} from '@angular/core';
import {PlanningCenterConfig} from "./planning-center-config";
import {ActivatedRoute} from "@angular/router";
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'temp-app';
  oauthResponse: any;

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly http: HttpClient
              ) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['code']) {
        this.getAccessToken(params['code']);
      }
    });
  }

  getAccessToken(code: string) {
    const payload = new HttpParams()
      .append('grant_type', 'authorization_code')
      .append('code', code)
      .append('redirect_uri', `${PlanningCenterConfig.redirect_uri}`)
      .append('client_id', `${PlanningCenterConfig.client_id}`)
      .append('client_secret', `${PlanningCenterConfig.client_secret}`);
    this.http.post(`${PlanningCenterConfig.metadata?.token_endpoint}`, payload, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).subscribe(response => {
      this.oauthResponse = response;
    });
  }

  goToLoginPage() {
    const params = [
      'response_type=code',
      'state=1234',
      `client_id=${PlanningCenterConfig.client_id}`,
      `scope=${PlanningCenterConfig.scope}`,
      `redirect_uri=${encodeURIComponent('http://localhost:4200/pc-auth-callback')}`
    ];

    window.location.href = `${PlanningCenterConfig.metadata?.authorization_endpoint}?`+params.join('&');
  }
}
