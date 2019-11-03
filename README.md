[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

# react-native-web-design-system-starter-kit

## Work in progress.

Fork this monorepo starter kit to create your own design system and use react-native primitives to build components in isolation and use them across your mobile and web apps.

- lerna
- storybook
- react-native-web
- babel
- jest
- eslint
- styled-components
- stylelint
- prettier

## How?

- `lerna boostrap` at the root of the repo to install dependencies
- `cd packages/universal && yarn run storybook` to launch storybook.
- Check the `package.json` to see all the scripts you can run. Better docs coming soon. ;-)

## TODO

[] - Configure jest and storybook addons.

[] - Examples for unit tests.

[] - Structural Testing (StoryShots).

[x] - Component files creation script using `plop` to create a new component without having to write any boilerplate. `yarn run generate component HelloWorld`

[] - Real react-native components examples working on both mobile and web.

If you are looking for the old version of this repo use `git checkout old`.
