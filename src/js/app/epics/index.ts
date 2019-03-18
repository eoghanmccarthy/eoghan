// Library of previously used epics

import { combineEpics, ofType } from "redux-observable";

import { Observable, empty, of } from "rxjs";
import {
  auditTime,
  map,
  mapTo,
  mergeMap,
  mergeMapTo,
  switchMap
} from "rxjs/operators";

import { push } from "connected-react-router";

const actionRouteEpic = action$ =>
  action$.pipe(
    ofType("DISPATCH_ACTION_ROUTE"),
    switchMap(action => {
      let module = action.payload.module;
      let event = action.payload.event;
      let context = action.payload.context;

      if (module === "module_name") {
        let router = {
          event_one: "/route-one",
          event_two: context === "sidebar" ? "/route-two" : "/route-three"
        };

        return of({
          type: "PUSH_ROUTE",
          route: router[event]
        });
      }

      return empty();
    })
  );

const pushRouteEpic = action$ =>
  action$.pipe(
    ofType("PUSH_ROUTE"),
    map(action => push(action.route ? action.route : undefined))
  );

const badgeEpic = action$ =>
  action$.pipe(
    ofType("SHOW_BADGE"),
    auditTime(3000),
    mapTo({ type: "HIDE_BADGE" })
  );

const resetModuleEpic = action$ =>
  action$.pipe(
    ofType("RESET_MODULE"),
    mergeMapTo(
      of(
        "RESET_IMAGE",
        "RESET_COORDS",
        "RESET_CATEGORY",
        "RESET_FILTERS",
        "RESET_USERS"
      )
    ),
    map(type => ({ type }))
  );

const getImageDimensionsEpic = action$ =>
  action$.pipe(
    ofType("UPLOAD_IMAGE_SUCCESS"),
    mergeMap(action => {
      let img = new Image();
      img.src = action.data.url;

      return new Observable(observer => {
        img.onload = function() {
          observer.next({
            type: "GET_IMAGE_DIMENSIONS",
            img: img
          });
          observer.complete();
        };
      });
    })
  );
