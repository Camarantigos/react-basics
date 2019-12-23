# How to use

## Installation

1. Install both back and front npm packages via

```
npm install
```

2. Create a '.env' file and enter

```
SECRET_KEY=asd98f6abnsdjkfhba0s9d7fasopidbufsa89d67bf
```

### BACKEND SERVER RUNS ON PORT \*3500\* see \*index.js\* in bookstore-server directory.

3. Run backend server from bookstore-server directory with

```
npm run server
```

4. Run Frontend server from bookstore-client

```
npm start
```

After that you can SignUp and SignIn to the App.

## Wasn't able to post a book corectly from frontend :(

In order to post book you can use the api endpoints by any api software (postman), or in cosole by
httpie

### Example:

1. SIGN_UP

```
http POST localhost:3500/api/auth/signup username=book password=book email=book@book.book
```

2. SIGN_IN

```
http POST localhost:3500/api/auth/signin password=book email=book@book.book
```

3. POST_BOOK

```
http POST localhost:3500/api/users/USER_ID/books "Authorization:Bearer TOKEN_AFTER_LOGIN" title="Programming JavaScript Applications" description="Take advantage of JavaScript's power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that's easier-yes, easier-to work with as your code base grows." category="Programming" authorNames="Eric Elliott" publisher="O'Reilly Media" year="2014-07-01T00:00:00.000Z" numberOfPages="254" isbn13="9781491950296" isbn10="""
```
