# Seal Project 2

- **Your Name:** Mackenzie Wicker
- **App Name:** Potluck
- **Description:** A CRUD application for keeping track of recipes
- **Github URL:** [Potluck on Github](https://github.com/mackwick/potluck)
- **Deployed Website:** [Potluck Deployed on Render](https://potluck.onrender.com/)
- **Trello Board:** [Potluck Trello Board](https://trello.com/invite/b/5h5TNzK1/ATTI61c9e060ba838c8d6a03aeab0744daf49338C982/potluck-project)

## List of Dependencies

##### Node Dependencies (package.json)

- bcrypt
- connect-mongo
- dotenv
- ejs
- express
- express-session
- method-override
- mongoose
- morgan

##### Frontend (if used, ex. jquery, alpine, bootstrap, htmx, etc.)

- Alpine or HTMX (probably)
- jQuery (probably)

## Route Map

| Route Name     | Endpoint         | Method | Description                                                                |
| -------------- | ---------------- | ------ | -------------------------------------------------------------------------- |
| Recipe Index   | /potluck         | GET    | Renders all recipe names and pics on a page                                |
| New Recipe     | /potluck/new     | GET    | Renders a form to add a new recipe                                         |
| Destroy Recipe | /potluck/id      | DELETE | Deletes a recipe                                                           |
| Update Recipe  | /potluck/id      | PUT    | Uses the edit form to update an existing recipe                            |
| Create Recipe  | /potluck         | POST   | Uses the new form to add a recipe to the db                                |
| Edit Recipe    | /potluck/id/edit | GET    | Renders a form to edit an existing recipe                                  |
| Seed Recipes   | /potluck/seed    | GET    | Adds 5-10 recipes to an account (ideally when someone creates an account?) |
| Show Recipe    | /potluck/id      | GET    | Renders the details for a single recipe                                    |
| STRETCH ROUTES |                  |        |                                                                            |
| Signup Form    | /user/signup     | GET    | Render signup form                                                         |
| Signup User    | /user/signup     | POST   | Use signup form to create user                                             |
| Login Form     | /user/login      | GET    | Render login form                                                          |
| Login User     | /user/login      | POST   | Log in user based on login form                                            |
| Logout User    | /user/logout     | GET    | Log out user                                                               |

## Design Mockups (Desktop + Mobile)

##### Mobile Design

![Mobile Design Mockup](./url-to-picture.jpg)

##### Desktop Design

![Desktop Design Mockup](./url-to-picture.jpg)

## ERD (Entity Relationship Diagram)

This should be a diagram showing your models and any relationships between them.

![Entity Relationship Diagram](./url-to-picture.jpg)
