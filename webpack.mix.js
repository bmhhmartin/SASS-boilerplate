const mix = require("laravel-mix");

mix.sass("assets/sass/style.scss", "assets/css").options({
  processCssUrls: false,
});
