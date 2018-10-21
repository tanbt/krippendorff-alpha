# krippendorff-alpha
Measurement of inter-rater reliability

#### Installation
* At project root, run `npm install`

#### Demo
* To bundle the app for demo, run `npm run build`
* At project root, run `npm start`
* Access `http://localhost:3000`

#### Development and Depolyment
* To test the library, run `npm test`
* To reformat js files, run `npm run format`
* To verify `src/*.js`, run `gulp lint:js`
* To publish kripendorff library: run `gulp dist`.
The file `dist/krippendorff.min.js` will be re-generated and ready to use.

#### References
* [Matrix](http://mathjs.org/docs/reference/functions.html#matrix-functions) in Mathjs
* [ES6 module structure](https://medium.com/@svinkle/getting-started-with-webpack-and-es6-modules-c465d053d988)
* [Testing syntax](https://github.com/Automattic/expect.js), [chaijs]((https://www.chaijs.com/api/bdd/))
* Configure devtool source map for debugging [video](https://www.youtube.com/watch?v=yk20pAUztLo), [documentation](https://webpack.js.org/configuration/devtool/#devtool)
* [Krippendorff's Alpha](http://www.real-statistics.com/reliability/krippendorffs-alpha/krippendorffs-alpha-basic-concepts/)
* [Krippendorff's alpha calculator](http://dfreelon.org/utils/recalfront/recal-oir/)