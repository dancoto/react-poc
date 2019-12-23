// @ts-ignore:next-line
import loadable from '@loadable/component';
import React from 'react';
import { Route } from 'react-router-dom';

// Need to find better interface for this
interface RouterRoute {
  path: string;
  component: any;
  routes?: RouterRoute[];
}

// Define Lazy Loaded children
const PeopleComponent = loadable(() => import('./people/People'));
const StarshipsComponent = loadable(() => import('./starships/Starships'));

// Here we can define routes and child routes
export const routes = [
  {
    path: '/people',
    component: PeopleComponent,
  },
  {
    path: '/starships',
    component: StarshipsComponent,
    /*     routes: [
      {
        path: '/spaceships/:id',
        component: StarshipDetailComponent,
      }
    ], */
  },
];

// Helper function to pass through all routes and subroutes
export function RouteWithSubRoutes(route: RouterRoute) {
  return (
    <Route
      path={route.path}
      render={(props: any) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
