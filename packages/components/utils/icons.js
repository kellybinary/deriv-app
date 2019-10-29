const glob = require('glob');

const icons = glob.sync('./src/components/icon/**/*.svg');

module.exports = icons;
