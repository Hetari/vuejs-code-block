---
layout: doc
---

# Get Started with vuejs-code-block

## Installation

To get started, install the package via npm:

```bash
npm install vuejs-code-block
```

Alternatively, if you're using Yarn:

```bash
yarn add vuejs-code-block
```

## Basic Usage

Once installed, you can start using the `CodeBlock` component in your `Vue 3` app to display syntax-highlighted code. Here’s a simple example:

```vue ts:line-numbers {1}
<template>
  <CodeBlock
    theme="dark"
    :code="codeExample"
    language="javascript"
    class="custom-class"
    id="example-code-block" />
</template>

<script setup lang="ts">
  import { CodeBlock } from 'vuejs-code-block';

  const codeExample = `
function greet(name) {
  console.log('Hello, ' + name);
}

greet('World');
`;
</script>
```

> [!WARNING] WARNING ❗
> Make sure the content of the `codeExample` string does **NOT** have leading spaces.
> The code should be formatted like this:
>
> ```ts
> const codeExample = `
> function greet(name) {
>   console.log('Hello, ' + name);
> }
> 
> greet('World');
> `;
> ```
>
> Avoid writing it with leading spaces like this:
>
> ```ts
> const codeExample = `
>   function greet(name) {
>     console.log('Hello, ' + name);
>   }
> 
>   greet('World');
> `;
> ```
>
> Incorrect formatting may cause unexpected whitespace in the code block.

<!-- - **`codeClass`** (optional): A custom CSS class for the `<code>` element inside the block. This allows you to style the code content specifically. -->
<!-- - **`linesHighlighted`** (optional): An array of line numbers to be highlighted. Accepts an array of strings or numbers (e.g., `[1, 3]` to highlight the 1st and 3rd lines). -->
<!-- - **`wordsHighlighted`** (optional): An array of specific words to be highlighted within the code. Accepts an array of strings (e.g., `['console', 'log']`). -->

## Props:

| Prop        | Type      | Required | Default | Description                                                             |
| ----------- | --------- | -------- | ------- | ----------------------------------------------------------------------- |
| `code`      | `string`  | Yes      | N/A     | The code you want to display, passed as a string.                       |
| `language`  | `string`  | Yes      | N/A     | Specifies the programming language for syntax highlighting.             |
| `theme`     | `string`  | Yes      | N/A     | Specifies the theme to be used for syntax highlighting (light or dark). |
| `asElement` | `string`  | No       | `<pre>` | Defines the HTML element wrapping the code block (defaults to `<pre>`). |
| `numbered`  | `boolean` | No       | `false` | Displays line numbers when set to `true`.                               |

<!-- ## Custom Styling

One of the key features of **vuejs-code-block** is that it provides **unstyled** components, allowing you to style them however you like. For example, using CSS or Tailwind classes:

```vue
<template>
  <div class="p-4 bg-gray-800 rounded-lg">
    <CodeBlock
      theme="dark"
      :code="exampleCode"
      language="javascript" />
  </div>
</template>

<script setup>
  import { CodeBlock } from 'vuejs-code-block';

  const exampleCode = `function greet(name) {
  console.log('Hello, ' + name);
}

greet('World');
`;
</script>
```
-->

## Themes:

| Theme Name                  | Image                                                            |
| --------------------------- | ---------------------------------------------------------------- |
| Dracula                     | ![Dracula Theme](./images/draculaTheme.webp)                     |
| Duotone Dark                | ![Duotone Dark Theme](./images/duotoneDarkTheme.webp)            |
| Duotone Light               | ![Duotone Light Theme](./images/duotoneLightTheme.webp)          |
| GitHub                      | ![GitHub Theme](./images/githubTheme.webp)                       |
| Night Owl                   | ![Night Owl Theme](./images/nightOwlTheme.webp)                  |
| None                        | ![None](./images/none.webp)                                      |
| Oceanic Next                | ![Oceanic Next Theme](./images/oceanicNextTheme.webp)            |
| Prism Dark                  | ![Prism Dark Theme](./images/prismDarkTheme.webp)                |
| Prism Funky                 | ![Prism Funky Theme](./images/prismFunkyTheme.webp)              |
| Prism Okaidia               | ![Prism Okaidia Theme](./images/prismOkaidiaTheme.webp)          |
| Prism Solarized Light Theme | ![Prism Solarized Light](./images/prismSolarizedLightTheme.webp) |
| Prism                       | ![Prism Theme](./images/prismTheme.webp)                         |
| Prism Theme Coy             | ![Prism Theme Coy](./images/prismThemeCoy.webp)                  |
| Prism Tomorrow              | ![Prism Tomorrow Theme](./images/prismTomorrowTheme.webp)        |
| Prism Twilight              | ![Prism Twilight Theme](./images/prismTwilightTheme.webp)        |
| Shades of Purple            | ![Shades of Purple](./images/shadesOfPurple.webp)                |
| UltraMin                    | ![UltraMin Theme](./images/ultraminTheme.webp)                   |
| VS Dark                     | ![VS Dark Theme](./images/vsDarkTheme.webp)                      |

## Useful Links

- [GitHub Repository](https://github.com/hetari/vuejs-code-block)
