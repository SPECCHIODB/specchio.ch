# specchio.ch Website

This is the source code to the [specchio website](http://specchio.ch). We use the
Static-Site-Generator [VuePress](https://vuepress.vuejs.org/) to generate the
site from markdown files. 



## Table of contents
  * [Development](#development)
  * [Change Website Content](#change-website-content)
  * [Updating](#updating)
  * [Template](#template)



## Development

To install the development environment for the website locally, you need to have
node.js installed on your machine.

Then you can clone this repository and run the following command in the
directory:

```
npm install
```

This will install all the dependencies needed to build the website. Then you can run
the `dev` command to compile the website and start a local web server:

```
npm run dev
```

You can open the website on [http://localhost:8080/](http://localhost:8080/).
VuePress will automatically reload the website while you make changes.



## Change Website Content

Making changes to the website is really easy. All you have to do is to edit the
Markdown files in the `src` folder. Most files are standard Markdown files and
you can edit them as you would with any other Markdown file. Let's take a look
at the `src/README.md` which is probably the most advanced file we have here.

It starts off with a header section that defines a title and description for the
page. You can also define other properties like the layout. See 
[Front Matter](https://vuepress.vuejs.org/guide/frontmatter.html#alternative-front-matter-formats)
for more information.

After the header section, the normal content starts which you usually would write
in Markdown. But you can also include normal HTML if you have to. On the landing
page, we use this to style different sections.

This short introduction should cover all the basics you need to make changes to
the website. But VuePress has many more features like 
[Markdown Extensions](https://vuepress.vuejs.org/guide/markdown.html#markdown-extensions), 
[Vue in Markdown](https://vuepress.vuejs.org/guide/markdown.html#markdown-extensions), 
[Internationalization](https://vuepress.vuejs.org/guide/i18n.html#internationalization), 
and 
[Markdown Slot](https://vuepress.vuejs.org/guide/markdown-slot.html#markdown-slot).



## Updating

To update VuePress and all of its dependencies you can use the following command:

```
npm update --save
```

This should not cause any problems and only update packages that are
semver-compatible. From time to time you may run `npm outdated`. This will show
you a list of packages that have newer versions but are not compatible. You may
have to update something in the template to make it work again.



## Template

The theme for this website uses the [bulma](https://bulma.io/) CSS framework and
a custom template for VuePress. 

The Theme and all configuration can be found in
[src/.vuepress/theme](src/.vuepress/theme).


### Background Images

The background images used in the header of the website were sourced from
[Pexels](https://www.pexels.com/) and are all under a CC License.

You can add more images or replace the existing ones by placing them in the
`src/.vuepress/public/backgrounds/` folder. The content of this folder is read
on compile-time and a random image is used each day.

Make sure to optimize the image size, as a too large image will slow the
websites down.