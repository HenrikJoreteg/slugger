// replaces all whitespace with '-' and removes
// all non-url friendly characters
(function () {
var whitespace = /\s+/g,
    nonAscii = /[^A-Za-z0-9_ \-]/g;

function slugger(string, opts) {
    var options = {
            replacement: '-',
            maintainCase: false
        },
        key;

    if (typeof string !== 'string') return '';
    if (typeof opts === 'object') {
        for (key in opts) {
            options[key] = opts[key];
        }
    }

    if (!options.maintainCase) {
        string = string.toLowerCase();
    }

    return string.replace(nonAscii, '').replace(whitespace, options.replacement);
};

if (typeof module !== 'undefined') {
    module.exports = slugger;
} else {
    window.slugger = slugger;
}
})();
