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

Once installed, you can start using the `CodeBlock` component to display syntax-highlighted code in your Vue app. Here’s a simple example:

```vue
<template>
  <CodeBlock :code="exampleCode" language="javascript" />
</template>

<script setup>
import { CodeBlock } from 'vuejs-code-block'

const exampleCode = `function greet(name) {
  console.log('Hello, ' + name);
}

greet('World');
`
</script>
```

### Props:
- `code`: The actual code you want to display.
- `language`: The programming language for syntax highlighting.

## Advanced Features

### Line Numbers

To display line numbers alongside your code, simply use the `:show-line-numbers` prop.

```vue
<CodeBlock :code="exampleCode" language="javascript" :show-line-numbers="true" />
```

### Line Highlighting

You can also highlight specific lines by using the `:highlight-lines` prop.

```vue
<CodeBlock :code="exampleCode" language="javascript" :highlight-lines="[1, 3]" />
```

## Custom Styling

One of the key features of **vuejs-code-block** is that it provides **unstyled** components, allowing you to style them however you like. For example, using CSS or Tailwind classes:

```vue
<template>
  <div class="p-4 bg-gray-800 rounded-lg">
    <CodeBlock :code="exampleCode" language="javascript" />
  </div>
</template>

<script setup>
import { CodeBlock } from 'vuejs-code-block'

const exampleCode = `function greet(name) {
  console.log('Hello, ' + name);
}

greet('World');
`
</script>

<style>
  .my-custom-code {
    color: #00ff00;
  }
</style>
```

## Customization & Configuration

With **vuejs-code-block**, you can extend functionality to suit your needs:

- **Custom Line Numbers**: Customize how line numbers appear.
- **Syntax Themes**: Use Prism.js themes or create your own.
- **Dynamic Code Blocks**: Bind code content from your app’s data for interactive code examples.

## Conclusion

You now have everything you need to start building powerful, customizable code blocks in your Vue.js or VitePress projects using **vuejs-code-block**. For more advanced use cases, be sure to explore the documentation and available props.

## Useful Links

- [GitHub Repository](https://github.com/hetari/vuejs-code-block)
- [Prism.js Documentation](https://prismjs.com/)
- [Vue.js Documentation](https://vuejs.org/)

