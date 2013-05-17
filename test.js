var assert = require('assert'),
    slugify = require('./slugger');

var stuff = {
    'Hello yOu CRAZY Swede!': ['hello-you-crazy-swede', 'Hello-yOu-CRAZY-Swede', 'hello_you_crazy_swede'],
    'i ∆ ∞ ♥ YOU very much': ['i-you-very-much', 'i-YOU-very-much', 'i_you_very_much'],
};


for (var item in stuff) {
    assert.equal(slugify(item), stuff[item][0]);
    assert.equal(slugify(item, {maintainCase: true}), stuff[item][1]);
    assert.equal(slugify(item, {replacement: '_'}), stuff[item][2]);
}

console.log('passed');
