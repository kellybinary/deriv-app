

// import all svg modules
const req = require.context('\./', false, /\.svg$/);

const modules = {};
req.keys().forEach(fileName => {
    const prefix_ic  = /.\/ic-/.test(fileName) ? './ic' : '';
    const prefix_img = /.\/img-/.test(fileName) ? './img' : '';
    const iconName = fileName
        .split(prefix_ic || prefix_img)[1]  // remove ic-, img- prefix
        .split('.svg')[0]                   // remove file .svg extension
        .replace(/-([a-z])/g,  (m, w) => w.toUpperCase()); // convert to PascalCase
    
    modules[`Icon${iconName}`] = fileName.split('./')[1];
});

// export all svg modules
export const deriv_icon_map = modules;
