[![Build Status](http://drone.polygon.io/api/badges/polygon-io/ui-swagger/status.svg)](http://drone.polygon.io/polygon-io/ui-swagger)

# Swagger UI

## Requirements:

- [NodeJS](https://nodejs.org/en/download/) ( Version 9.3 )
- We recommend using [Node Version Manager](https://github.com/creationix/nvm)
- Gulp: `npm install -g gulp`

## Making Doc Changes

The docs are built from swagger YAML files, which are located: `app/swagger/`. Changes to those files will update the documentation which is generated on the page.

## To Get Started:

- Check out the repo locally
- run `npm install` inside the directory. (You only have to do this once)

## Running the project:

Inside the directory run:

```bash
npm run dev
```

## Building for prod:

To build the project, which puts all built files into `public/` run the following:

```bash
gulp build
```

This will:

- minify all javascript files
- optimize all image files
- minify css files
- remove all `console.log` in the code!
