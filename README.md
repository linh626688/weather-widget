# Coding Test

## Weather Widget

This is a simple page using the following technologies

- JavaScript Framework: ReactJS
- HTML/CSS

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements

Need Node.js and Yarn installed on your environment. (_OS: Ubuntu 20.04 (Optional)_)

### Node

    $ node --version
    v12.16.3

    $ yarn --version
    >=1.22.4

## Install

    $ cd PROJECT
    $ yarn install

## Start & watch

    $ yarn start
    
    Runs the app in the development mode.
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
## Testing

    $ yarn test
## Lint and fix

    $ yarn lint:fix

    
## Languages & dependencies

### JavaScript

- [React](http://facebook.github.io/react) is used for UI.

### Dependencies

- [Bootstrap](https://getbootstrap.com/)  CSS framework base
- [Lodash](https://lodash.com/)  JavaScript utility library delivering modularity, performance & extras
- [Moment](https://momentjs.com/)  Parse, validate, manipulate, and display dates in javascript.
- [React-Error-Boundary](https://github.com/bvaughn/react-error-boundary)   React error boundary component
- [Prettier](https://prettier.io/) & [ESLint](https://eslint.org/)   Formatting & Linting errors 
- [Axios](https://github.com/axios/axios)  Promise based HTTP client for the browser


### Reference
- Formula converting wind direction to text words form [stackoverflow](https://stackoverflow.com/questions/7490660/converting-wind-direction-in-angles-to-text-words)
- [use-react-error-boundary](https://kentcdodds.com/blog/use-react-error-boundary-to-handle-errors-in-react) quick handle Error Boundary on React

### Note
- _useDebounce_ is a custom hook, avoid execute too frequently function callAPI search, it's not necessary and bad performance to the server.
  Debounce will delay 500ms to execute search when user typing. 
- _Loading_ effect will appear on the screen when executing search function. This effect disappears after call API finish. Make user have better UX on the Webpage