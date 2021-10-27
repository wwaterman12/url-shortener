# URL Shortener

|                                                      Form                                                       |                                                     Result                                                      |
| :-------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: |
| ![image](https://user-images.githubusercontent.com/16707111/138994039-e3540b55-90c5-4694-b8ca-d87ea967183d.png) | ![image](https://user-images.githubusercontent.com/16707111/138994122-468f071f-50e6-4f53-891e-e7ce82a7d60d.png) |

## Description

- This is a simple URL Shortener client. It allows users to enter a URL, optionally enter a custom slug, and then receive a shortened URL that redirects to that page. Users can also see all previous URLs they have shortened, copy these to the clipboard, or invalidate/delete old URLs.
- Commits use [Gitmoji](https://gitmoji.dev/) to specify what type of changes they make

## Dependencies

- [Create React App](https://create-react-app.dev/)
- [Redux](https://react-redux.js.org/)
- [Typescript](https://www.typescriptlang.org/)

## Notes before installation

- This project was developed using node version 16.7.0 and npm version 7.21.0. For best results, please use these versions when installing locally
- [create-react-app](https://create-react-app.dev/) uses an npm version below 7 under the hood in it's startup sequence. Npm has [breaking changes betwen versions 6 and 7](https://docs.npmjs.com/cli/v7/configuring-npm/package-lock-json). This app has not been tested with versions of npm below 7.

## Installation

1. after cloning the repository into your local via ssh or https, install npm packages

```sh
$ npm install
```

2. start a server locally

```sh
$ npm run start
```

3. Navigate to [http://localhost:3000](http://localhost:3000) in your browser of choice if the page has not automatically opened

### Tests

- Tests suits can be run via

```sh
$ npm run test
```

- For more info on what testing frameworks create react app uses, please see [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

### Next Steps

- The API used in this project does not serve valid https URLs. So, I will build a simple node API that serves valid URLs by storing full URLs in [MongoDB](https://www.mongodb.com/)
- This application would be better suited as a chrome extension. So, I will also deploy this as a chrome extension that can autofill with the active tab's window.location.href
