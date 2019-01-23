# specchio.ch Website

This is the source-code to the [specchio website](http://specchio.ch). We use the
Static-Site-Generator [VuePress](https://vuepress.vuejs.org/) to generate the
site from markdown files. 

## Table of contents
  * [Development](#development)
  * [Updating](#updating)
  * [Template](#template)


## Development

To install the development environment for the website locally, you need to have
node.js installed on your machine.

Then you can clone this repository and run the following command in the
directroy:

```
npm install
```

This will install all dependencies needed to build the website. Then you can run
the `dev` command to compile the website and start a local webserver:

```
npm run dev
```

You can open the website on [http://localhost:8080/](http://localhost:8080/).
VuePress will automatically reload the website while you make changes.


## Development

To update VuePress and all of its dependencies you can use the following command:

```
npm update --save
```

This should not cause any problems and only update packages that are
semver-compatible. From time to time you may run `npm outdated`. This will show
you a list of packages that have newer versions, but are not compatible. You may
have to update something in the template to make it work again.


## Template

The theme for this website uses the [bulma](https://bulma.io/) css framework and
a custom template for VuePress. 

The Theme and all configuration can be found in
[src/.vuepress/theme](src/.vuepress/theme).


### Background Images

The background images used in the header of the website were sourced from
[Pexels](https://www.pexels.com/) and are all ander a CC License.

You can add more images or replace the existing ones by placing them in the
`src/.vuepress/public/backgrounds/` folder. The content of this folder is read
on compile-time and a random image is used each day.

Make sure to optimize the image size, as a too large image will slow the
websites down.