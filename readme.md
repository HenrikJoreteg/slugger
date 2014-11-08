# slugger

Dead simple slugification for node and browser.

## What it does:

Converts any string into a url friendly version:

```js
slugger('Hello yOu CRAZY Swede!'); // returns 'hello-you-crazy-swede'

// optionally maintain case
slugger('Hello yOu CRAZY Swede!', {maintainCase: true}); // returns 'Hello-yOu-CRAZY-Swede'

// optionally use a different replacement character
slugger('Hello yOu CRAZY Swede!', {replacement: '_'}); // returns 'hello_you_crazy_swede'

// optionally trim to max length while not breaking any words
slugger('Hello yOu CRAZY Swede!', {smartTrim: 9}); // returns 'hello-you'

// optionally allow additional characters
// just pass string of characters that would normally be removed
// that you want to allow.
slugger('Hello yOu CRAZY Swede!', {alsoAllow: "!&"}); // returns 'hello-you-crazy-swede!'

// decodes URI components by default, so {decode: true} is not required
slugger('boo%20boo') // returns 'boo-boo';
// now without decode
slugger('boo%20boo', {decode: false}) // returns boo20boo;

```

That's all there is to it!

## Installing

```
npm install slugger
```

Or just grab the slugger.js file and drop it into your project.

It also plays nicely with: https://github.com/henrikjoreteg/clientmodules

## Why did I write this when there's already https://github.com/dodo/node-slug ?

Because I wanted something simpler that didn't try to do anything with special characters or unicode and I wanted something that worked well in the browser or node.

## Tests? 

Just run `npm test`

## Changelog

- 0.1.0 - Adding option to allow other characters

## Dig it?

Then you should probably follow [@HenrikJoreteg](http://twitter.com/henrikjoreteg) on twitter.

## License
 
MIT
