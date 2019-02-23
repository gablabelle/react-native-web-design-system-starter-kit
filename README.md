# Work In Progress

## react-native-web-storybook-typescript

WIP for a monorepo boilerplate including 3 packages

- universal: a react storybook to develop and test your React-Native components in isolation.
- web: create-react-app project with react-native-web to import universal components (from `universal`) and render them in the browser.
- native: TODO react-native project to import universal components (from `universal`) and render them on mobile device natively.

So the goal is to have one codebase you can run on the web and on mobile devices.

## usage

1. Run `yarn` in monorepo to get the dependencies

2. In the `packages/universal` folder, run `yarn build` or `yarn watch` to transpile the components and make them available to the other packages.

3. In the `packages/universal` folder, run `yarn storybook` to launch the Storybook

4. In the `packages/web` folder, run `yarn start` to launch the create-react-app website that is using the universal component from `packages/universal`.

## issue

This is temporary: To "fix" issue #1 simply copy package.json from the Component folders into the dist's Component folders after building them.

## TODOs

1. Setup `native` package

2. Use `lerna` ?
