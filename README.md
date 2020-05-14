# Sneakers city backend

[![Build Status](https://travis-ci.com/NkFab/skeaker-city-be.svg?branch=develop)](https://travis-ci.com/NkFab/skeaker-city-be)   [![Coverage Status](https://coveralls.io/repos/github/NkFab/skeaker-city-be/badge.svg?branch=develop)](https://coveralls.io/github/NkFab/skeaker-city-be?branch=develop)


## Links

Sneakers city API
[Production](https://sneaker-city-api.herokuapp.com)


## API endpoints

For getting all the sneakers you need to request like so:

    GET /api/sneakers
**Note:** this request get the first 10 sneakers and order them by release date in an ascending order. To get the other pages you need to request like so:

    GET /api/sneakers?page='page_number'
For getting details of a single sneaker the request should be, like so:

    GET /api/sneakers/:id_of_the_sneaker

## Get started with the project

You will need to clone the repository using:

    git clone https://github.com/NkFab/skeaker-city-be.git`
    
    git clone git@github.com:NkFab/skeaker-city-be.git
For http and ssh respectively.
Then run the following scripts for installing the dependencies.

`npm install` or `yarn` 

After the depencies are installed you can start the server by running the following scripts: `npm run dev` or `yarn dev`

To run tests you will need to run the following scripts:
`npm run test` or `yarn test`


## Contributors

Nkaka Manzi Fabrice. manzi.rw