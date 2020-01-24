[![Build Status](http://drone.polygon.io/api/badges/polygon-io/ui-swagger/status.svg)](http://drone.polygon.io/polygon-io/ui-swagger)

# TODO:

[] getting started section
[] api key (dispatched from the input or the user login)
[] sticky side menu
[] polishing the try section (the select with the producing output is ugly )
[] a loader for when the app is starting
[] testing the response modal with success
[X] passing custom parameters to the test request
[] testing on different browsers (just tested in chrome and brave on linux)

Swagger UI
===

Requirements:
---

- [NodeJS](https://nodejs.org/en/download/) ( Version 9.3 )
 - We recommend using [Node Version Manager](https://github.com/creationix/nvm)
- Gulp: `npm install -g gulp`

To Get Started:
---

- Check out the repo locally
- run `npm install` inside the directory. (You only have to do this once)

Running the project:
---

Inside the directory run:

```bash
npm run dev
```


Building for prod:
---

To build the project, which puts all built files into `public/` run the following:

```bash
gulp build
```

This will:

- minify all javascript files
- optimize all image files
- minify css files
- remove all `console.log` in the code





License
----

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

