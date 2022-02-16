const { minify } = require('html-minifier-terser');
const { minify: minifyCss } = require('csso');
const fs = require('fs');

const buildDir = './build';

const minifyOptions = {
  collapseBooleanAttributes: true,
  collapseInlineTagWhitespace: true,
  collapseWhitespace: true,
  minifyCSS: true,
  minifyJS: true,
  minifyURLs: true,
  removeAttributeQuotes: true,
  removeComments: true,
  removeEmptyAttributes: true,
  removeEmptyElements: true,
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
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
  console.log('Done!!');
} catch (err) {
  console.error(err);
}
