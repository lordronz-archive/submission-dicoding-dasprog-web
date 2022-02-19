import { minify } from 'html-minifier-terser';
import type { Options } from 'html-minifier-terser';
import { minify as minifyCss } from 'csso';
import fs from 'fs';
import fse from 'fs-extra';
import { minify as minifyJs } from 'uglify-js';

const srcDir = 'website';
const destDir = 'build';

// To copy a folder or file
fse.copySync(srcDir, destDir, { overwrite: true });

const buildDir = './build';

const minifyOptions: Options = {
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
