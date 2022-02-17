const { minify } = require('html-minifier-terser');
const { minify: minifyCss } = require('csso');
const fs = require('fs');
const fse = require('fs-extra');
const { minify: minifyJs } = require('uglify-js');

const srcDir = 'website';
const destDir = 'build';

// To copy a folder or file
fse.copySync(srcDir, destDir, { overwrite: true }, function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log('success!');
  }
});

const buildDir = './build';

const minifyOptions = {
  collapseBooleanAttributes: true,
  collapseWhitespace: true,
  minifyCSS: true,
  minifyJS: true,
  minifyURLs: true,
  removeComments: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true,
};

try {
  const html = fs.readFileSync('./website/index.html', 'utf8');
  if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir);
  }
  minify(html, minifyOptions).then((minifiedHtml) => {
    fs.writeFileSync(buildDir + '/index.html', minifiedHtml);
  });

  const css = fs.readFileSync('./website/style.css', 'utf8');
  const minifiedCss = minifyCss(css).css;
  fs.writeFileSync(buildDir + '/style.css', minifiedCss);

  const js = fs.readFileSync('./website/script.js', 'utf8');
  const minifiedJs = minifyJs(js).code;
  fs.writeFileSync(buildDir + '/script.js', minifiedJs);

  console.log('Done!!');
} catch (err) {
  console.error(err);
}
