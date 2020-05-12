
# hello-express

_An example legacy-free Node.js, Express, TypeScript legacy-free hello world 
project with ES6 modules, explicitly typed parameters in callbacks, and Jest for 
unit tests._

## What is this?

This is a version of an [Express][ex] framework "Hello world" example updated to:

 - Use [TypeScript][ts] and explicitly declare the types of callback parameters, 
 because [catching errors at compile time is good][tswhy].
 - Use standard (post-2015 ES6) [modules][mod], because standardization is good.
 - Use [Yarn][yarn] for package management, because community is good.
 - Use [ts-jest][ts-jest] for unit tests, because Jest is written in TypeScript
and ts-jest has some JetBrains involvement.
 - Use [Handlebars][hbars] via [express-handlebars][exhand] for templating, because 
simple is good.

[hello]: https://expressjs.com/en/starter/hello-world.html
[tswhy]: https://medium.com/javascript-in-plain-english/typescript-with-node-and-express-js-why-when-and-how-eb6bc73edd5d
[mod]: https://hacks.mozilla.org/2015/08/es6-in-depth-modules/
[ts]: https://www.typescriptlang.org/
[ex]: https://expressjs.com/
[yarn]: https://yarnpkg.com/
[ts-jest]: https://github.com/kulshekhar/ts-jest
[hbars]: http://handlebarsjs.com/
[exhand]: https://github.com/ericf/express-handlebars

Start via `yarn run server`.
Run tests via `yarn test`.

Also included are some IntelliJ IDEA configs so you can push a button to run.

## Notes

Here are the key "tricks", some of which are still poorly or inaccurately documented on the web:

 1. You need to put `"type": "module"` in `package.json` to allow standard module imports in Node.js, as of Node 12.x.
 2. Even after doing that, you still need to use the `--experimental-modules` command line flag to enable ESM, so that 
    your application's main compiled code can be loaded in module mode.
 3. You need to enable ES6+ modules in TypeScript by setting `"module": "es6"` in `tsconfig.json`.
 4. After doing that, the default module resolution for TypeScript is "classic" so you have to set 
    `"moduleResolution": "Node"` in `tsconfig.json` as well.
 5. Since Express isn't packaged as an ES6 module yet, you need to set 
    `"allowSyntheticDefaultImports": true` in `tsconfig.json` so you can import the main `express` function.
 6. Don't follow instructions and run `yarn ts-jest config:init`, because that seems to generate a config that doesn't
    run Node properly. Instead, put the Jest config in `package.json`.

If you skip #2 above, you'll get an error like this:

```
internal/modules/cjs/loader.js:1174
      throw new ERR_REQUIRE_ESM(filename, parentPath, packageJsonPath);
      ^

Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: /path/to/generated/javascript/main.js
```

At the time of writing, Yarn complains all the time about the license field in the `package.json` file.
This seems to be a Yarn bug.

