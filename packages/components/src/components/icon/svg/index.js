import IconBase from '../icon-base.jsx';

const getComponentName = (str) => {
    return str.split(/^.\/(ic|img)/)[2]
        .split('.svg')[0]
        .replace(/-([a-z])/g, (m, w) => w.toUpperCase());
}

const req = require.context('!@svgr/webpack!./', false, /\.svg$/);
const IconSVGs = {};
req.keys().map(path => {
    IconSVGs[`Icon${getComponentName(path)}`] = () => IconBase(req(path).default());
});

export default IconSVGs;
