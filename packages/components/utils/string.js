function getKebabCase(str) {
    if (!str) return str;
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2') // get all lowercase letters that are near to uppercase ones
        .replace(/[\s_]+/g, '-')             // replace all spaces and low dash
        .toLowerCase();
}

function getPascalCase(str) {
    if (!str) return '';
    return String(str)
        .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, '$')
        .replace(/[^A-Za-z0-9]+/g, '$')
        .replace(/([a-z])([A-Z])/g, (m, a, b) => `${a  }$${  b}`)
        .toLowerCase()
        .replace(/(\$)(\w?)/g, (m, a, b) => b.toUpperCase());
}

module.exports = {
    getKebabCase,
    getPascalCase,
};
