# Submission akhir Dicoding - Belajar Dasar Pemrograman Web

## [Preview](https://lordronz-archive.github.io/submission-dicoding-dasprog-web/)

Source code ada di dalam folder [website](https://github.com/LordRonz/submission-dicoding-dasprog-web/tree/main/website).

File typescript [build.ts](https://github.com/lordronz-archive/submission-dicoding-dasprog-web/blob/main/build.ts) adalah kode yang digunakan untuk meminifikasi source code yang ada di folder website untuk di deploy di [github pages](https://lordronz-archive.github.io/submission-dicoding-dasprog-web/). Untuk melakukan build, digunakan package-package berikut:

- [csso](https://www.npmjs.com/package/csso)
- [html-minifier-terser](https://www.npmjs.com/package/html-minifier-terser)
- [uglify-js](https://www.npmjs.com/package/uglify-js)

Untuk melakukan build, kita execute command berikut:

```bash
yarn build
```

Maka folder bernama build akan muncul dan berisi file source code yang sudah diminifikasi beserta asset-assetnya.
