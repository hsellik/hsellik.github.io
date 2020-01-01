# home-page
Jekyll based home page

Features:

- Gulp
- SASS
- Sweet Scroll
- Particle.js
- BrowserSync
- Font Awesome and Devicon icons
- Google Analytics
- Info Customization

## Basic Setup

1. [Install Jekyll](http://jekyllrb.com)

## Color and Particle Customization
- Color Customization
  - Edit the sass variables
- Particle Customization
  - Edit the json data in particle function in app.js
  - Refer to [Particle.js](https://github.com/VincentGarreau/particles.js/) for help

## Running the site in local

In order to compile the assets and run Jekyll on local you need to follow those steps:

- Install [NodeJS](https://nodejs.org/)
- Install [Jekyll](https://jekyllrb.com): `sudo gem install bundler jekyll`
- Install Ruby-dev: `sudo apt-get install ruby-dev`
- Install [Yarn](https://yarnpkg.com/): `npm install -g yarn`
- Install [Yarn](https://yarnpkg.com/): `npm install -g`
- Set bundler path: `bundle config set path 'vendor/bundle'`
- Install [Jekyll Plugins](https://jekyllrb.com/docs/plugins/installation/): `bundle install --path vendor/bundle`
- Install dependencies: `yarn`
- Run Gulp: `node ./node_modules/gulp/bin/gulp.js`
