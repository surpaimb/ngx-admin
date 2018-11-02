import { Router } from '@angular/router';
import { mergeMap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { NbAuthService } from '@nebular/auth';
import { Injectable } from '@angular/core';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';

declare var navigator;

@Injectable()
export class CylInterceptor implements HttpInterceptor {
  // 1:app,2:wechat,3:web
  public _client_type = null;
  public _isWechat = null;

  constructor(private authService: NbAuthService, private router: Router) {
    const cylClient = `${environment.CYL_CLIENT}`;
    const _isWechat =
      navigator.userAgent.toLowerCase().match(/MicroMessenger/i) ===
      'micromessenger'
        ? true
        : false;
    if (_isWechat) {
      this._client_type = 2;
    } else {
      switch (cylClient) {
        case 'app': {
          this._client_type = 1;
          break;
        }
        case 'web': {
          this._client_type = 3;
          break;
        }
      }
    }
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const JWT = `Bearer ${this.authService.getToken()}`;
    const clonedRequest = req.clone({
      headers: req.headers
        .set('Authorization', JWT)
        .set('Cyl-Client', this._client_type),
    });
    return next.handle(clonedRequest).pipe(
      mergeMap((event: any) => {
        // 正常返回，处理具体返回参数
        if (event instanceof HttpResponse && event.status === 200)
          // 具体处理请求返回数据
          return this.handleData(event);
        return of(event);
      }),
      catchError((err: HttpErrorResponse) => this.handleData(err)),
    );
  }

  private handleData(
    event: HttpResponse<any> | HttpErrorResponse,
  ): Observable<any> {
    // 业务处理：一些通用操作
    switch (event.status) {
      case 200:
        // if (event instanceof HttpResponse) {
        //   const body: any = event.body
        //   if (body && body.rc == 3) {
        //     this.goTo()
        //   }
        // }
        break;
      case 401:
        // 未登录状态码
        this.goToLogin();
        break;
      case 404:
      case 500:
        // 数据错误
        break;
      default:
        return of(event);
    }
  }

  private goToLogin() {
    this.router.navigate(['auth/login']);
  }
}
