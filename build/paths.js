var appRoot = 'src/';
var outputRoot = 'dist/';
var exporSrvtRoot = 'export/'

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.ts',
  js: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  jade: appRoot + '**/*.jade',
  fonts: appRoot+ '**/*.{ttf,woff,eof,svg}',
  css: appRoot + '**/*.css',
  sass: appRoot + '**/*.scss',
  style: 'styles/**/*.css',
  output: outputRoot,
  exportSrv: exporSrvtRoot,
  doc: './doc',
  e2eSpecsSrc: 'test/e2e/src/**/*.ts',
  e2eSpecsDist: 'test/e2e/dist/',
  dtsSrc: [
    './typings/browser/**/*.d.ts',
    './custom_typings/**/*.d.ts',
    './jspm_packages/**/*.d.ts'
  ]
}
