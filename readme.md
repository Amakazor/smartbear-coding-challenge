# Code Challenge App

This is an app created by me (Arkadiusz Wrzawiński) for a code challenge during a recrutation for SmartBear.

It is built with React, Vite, TypeScript, TailwindCSS and React Router.

It can be to fetch OpenApi 2.0 spec from a given URL and display it as a documentation.

## How to run
To run the app locally, you need to have Node.js of reasonably recent version and Yarn installed on your machine.
Then, in the project directory, you can run it with:
```bash
  yarn install
  yarn dev
```

## Building and running in production mode
To build the app for production, run:
```bash
  yarn build
```
This will create a `dist` directory with a production build of the app.
You can run it by serving the contents of the `dist` directory`:
```bash
  yarn preview
```

## Running the tests
To run the tests, run:
```bash
  yarn test
```

To run test coverage, run:
```bash
  yarn cover
```

## What is missing
Due to this being a code challenge, I didn't consider some things that I would normally do in a real project.
Examples of those things are:
- More tests - there is about 30% coverage at the moment
- Adding E2E tests with Cypress or Playwright
- Handling more edge cases while parsing the api spec
- Making the spec more compliant with the OpenApi 2.0 spec ie: it currently doesn't handle `allOf` and `oneOf` keywords and allows file parameter to be in route only consuming "application/json" content type
- Making the components more reusable, by generalizing them more
- Validating and auditing the accessibility of the app
- Making the app more responsive by checking it with physical devices
- Making the app more performant by checking it with Lighthouse and fixing possible issues
- Implementing light mode
- Handling all gfm elements - only these used by https://petstore.swagger.io/v2/swagger.json are currently supported
