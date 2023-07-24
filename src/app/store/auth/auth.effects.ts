import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { of } from 'rxjs';
import { login, loginSuccess, loginFailure } from './auth.actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      mergeMap((action) =>
        this.authService.login(action.username, action.password).pipe(
          map((user) => loginSuccess({ user })),
          catchError((error) => of(loginFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}