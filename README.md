# specchio.ch Website

This is the source-code to the specchio website. We use the
Static-Site-Generator [VuePress](https://vuepress.vuejs.org/) to generate the
site from markdown files. 

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