# Lerrax-Design-React.js-Project

Lerrax-Design furniture web site. Built as web project for the ReactJS fundamentals course at SoftUni.

It was generated with create-react-app, and used react and react-dom, and react-router-dom. All input forms are with validation of the entered information.

The Lerrax-Design web application has two levels of access to it's content: registered user and guest user roles are implemented.

After registration and subsequent successful Login to the system, a registered user is authorized to add products in Shopping cart and Wishlist. After successfully purchasing the product, the user can see their orders in the profile information. The registered user is permitted to view the following sections:
"Products", "Details Product", "Shopping cart", "WIshlist", "Account", "Orders","Contacts", "About us".

The guest user has access to general information about the site. The following pages are public and visible to any visitor on Lerrax-Design furniture web site : "Products", "Details Product" "Register", "Login", "Contacts", "About us".

The application is built entirely on latest JavaScript technologies: React.js (client side) and node.js (server side).

## REST API and DB

The REST API of Lerrax_Design is available in the repository.
An open connection to MongoDB is required.

## Resolve Dependencies

When the project is cloned or downloaded, type in the terminal the following in both Server and Client directory:

```
npm / yarn install
```

## Run the web server

To run the web server type in terminal from Server-Lerrax-Design the following:

```
add .env file in REST_API directory with following structure:

PORT=8888
COOKIE="auth-token"
PRIVATE_KEY="secret"
MONGO_USER=user
MONGO_PASSWORD=softuni-password
MONGO_DEFAULT_DATABASE=reactjs

npm start
```

## Run the React app

The app uses React on client side. To run the React app type in terminal from Lerrax-Design directory the following:

```
npm start
```

The app is running on:

```
localhost:4000
```