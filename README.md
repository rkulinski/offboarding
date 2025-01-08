# Offboarding app
A web application for managing the employee offboarding process, built with Angular and a simple backend.

## Running project
### Running server
```
cd api
npm run dev
```
App available at http://localhost:4200/offboarding 

### Running frontend
```
cd frontend
npm run start
```
Api available at http://localhost:3000

## Assumptions
- According to description filtering is done on the FE. This should be handled on BE side.
- Backend is written in very simplistic way, but it would need to account for more complex scenarios (e.g. coming back to work after offboarding).
- Even though project is 2 pages the structure is meant for bigger project to demonstrate approach:
  - Folders under "app" are generic and shared items.
  - Inside pages, we have modules that encapsulate all items specific for given module (page in this scenario).
  - Styles, foundational components should be defined using design system. For simplicity styling per component is used.


## Tech Stack
### Frontend
- Angular [https://angular.dev/] 
- Angular material [https://material.angular.io/]

### Backend
- Express [https://expressjs.com/]
- JSON file as database
