var assert = require('assert'),
    slugger = require('./slugger');

var stuff = {
    'Hello yOu CRAZY Swede!': ['hello-you-crazy-swede', 'Hello-yOu-CRAZY-Swede', 'hello_you_crazy_swede', 'hello-you', 'hello-you-crazy-swede!', 'hello-you-crazy-swede'],
    'i ∆ ∞ ♥ & YOU very much': ['i-you-very-much', 'i-YOU-very-much', 'i_you_very_much', 'i-you', 'i-&-you-very-much', 'i-you-very-much'],
    '%20boo': ['boo', 'boo', 'boo', 'boo', 'boo', '20boo']
};

for (var item in stuff) {
    assert.equal(slugger(item), stuff[item][0]);
    assert.equal(slugger(item, {maintainCase: true}), stuff[item][1]);
    assert.equal(slugger(item, {replacement: '_'}), stuff[item][2]);
    assert.equal(slugger(item, {smartTrim: 9}), stuff[item][3]);
    assert.equal(slugger(item, {alsoAllow: '&!'}), stuff[item][4]);
    assert.equal(slugger(item, {decode: false}), stuff[item][5]);
}

assert.equal(slugger('boo%20boo'), 'boo-boo');
assert.equal(slugger('boo%20boo', {decode: false}), 'boo20boo');

console.log('passed');
