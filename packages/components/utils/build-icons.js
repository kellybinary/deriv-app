/**
 * Generate components/icon/index.js file automatically
 */

const { EOL } = require('os');
const path = require('path');
const fs = require('fs');

const entries_object = require('./icons.js');

function buildIcons() {

    console.info('Build icons starting.');

    let modules = 0;

    const buffer = [
        '// auto-generated file. DO NOT MODIFY.', '',
    ];

    const emitModule = (file) => {
        const pathname = entries_object[file].replace('.svg', '').replace('./src/components/icon/', '');
    
        modules += 1;

        buffer.push(`import './${pathname}.svg';`);
    };

    const files = Object.keys(entries_object);
    files
        .forEach(f => {
            const stats = fs.statSync(entries_object[f]);
            if (stats.isFile()) {
                emitModule(f);
            }
        });

    buffer.push(
        'import \'./icon.scss\';\nexport default from \'./icon.jsx\';'
    );

    fs.writeFileSync(path.join(__dirname, '../src/components/icon/index.js'), buffer.join(EOL) + EOL);

    console.info(`Build icons done. 'components/icon/index.js' emitted with ${modules} modules.`);
}

module.exports.buildIcons = buildIcons;
