module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a component',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/components/{{pascalCase name}}/src/{{pascalCase name}}.tsx',
        // Handlebars template used to generate content of new file
        templateFile: 'templates/component/component.tsx.hbs',
      },
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path:
          'src/components/{{pascalCase name}}/src/{{pascalCase name}}.stories.tsx',
        // Handlebars template used to generate content of new file
        templateFile: 'templates/component/component.stories.tsx.hbs',
      },
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/components/{{pascalCase name}}/package.json',
        // Handlebars template used to generate content of new file
        templateFile: 'templates/component/package.json.hbs',
      },
      {
        // Add a new file
        type: 'add',
        // Path for the new file
        path: 'src/components/{{pascalCase name}}/tsconfig.json',
        // Handlebars template used to generate content of new file
        templateFile: 'templates/component/tsconfig.json.hbs',
      },
      {
        // Action type 'append' injects a template into an existing file
        type: 'append',
        path: 'universal.ts',
        // Pattern tells plop where in the file to inject the template
        pattern: `/* INJECT_IMPORT */`,
        template: `export { default as {{pascalCase name}} } from './src/components/{{pascalCase name}}';`,
      },
    ],
  });
};
