# Seal Project 2

- **Your Name:** Mackenzie Wicker
- **App Name:** Potluck
- **Description:** A CRUD application for keeping track of recipes
- **Github URL:** [Potluck on Github](https://github.com/mackwick/potluck)
- **Deployed Website:** [Potluck Deployed on Render](https://potluck.onrender.com/)
- **Trello Board:** [Potluck Trello Board](https://trello.com/invite/b/5h5TNzK1/ATTI61c9e060ba838c8d6a03aeab0744daf49338C982/potluck-project)

## List of Dependencies

##### Node Dependencies

- bcrypt
- connect-mongo
- dotenv
- ejs
- express
- express-session
- method-override
- mongoose
- morgan

##### Frontend

- CSS

## Route Map

| Route Name              | Endpoint     | Method | Description                                                                |
| ----------------------- | ------------ | ------ | -------------------------------------------------------------------------- |
| Seed Recipes            | /            | GET    | Adds 10 recipes to the database                                            |
| Recipe Index            | /            | GET    | Renders all recipe names and pics on a page                                |
| New Recipe              | /new         | GET    | Renders a form to add a new recipe                                         |
| Destroy Recipe          | /id          | DELETE | Deletes a recipe                                                           |
| Update Recipe           | /id          | PUT    | Uses the edit form to update an existing recipe                            |
| Create Recipe           | /            | POST   | Uses the new form to add a recipe to the db                                |
| Edit Recipe             | /id/edit     | GET    | Renders a form to edit an existing recipe                                  |
| Seed Recipes            | /seed        | GET    | Adds 5-10 recipes to an account (ideally when someone creates an account?) |
| Show Recipe             | /id          | GET    | Renders the details for a single recipe                                    |
| STRETCH ROUTES          |              |        |                                                                            |
| Signup                  | /user/signup | GET    | Render signup form                                                         |
| Signup + User Seed Form | /user/signup | POST   | Use signup form to create user and add seed recipes to their DB            |
| Login Form              | /user/login  | GET    | Render login form                                                          |
| Login User              | /user/login  | POST   | Log in user based on login form                                            |
| Logout User             | /user/logout | GET    | Log out user                                                               |

## Design Mockups (Desktop + Mobile)

##### Mobile Design

![Mobile Design Mockup - Index Page](https://i.imgur.com/O1gPDEk.png)

![Mobile Design Mockup - Show Page](https://i.imgur.com/1vHmGcx.png)

##### Desktop Design

![Desktop Design Mockup - Index Page](https://i.imgur.com/4A1FwhW.png)

![Desktop Design Mockup - Show Page](https://i.imgur.com/7VWOOFO.png)

## ERD (Entity Relationship Diagram)

![Entity Relationship Diagram](https://i.imgur.com/PJf1Ys0.jpg)
