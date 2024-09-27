// // Import necessary functions from Vue
// import { provide, inject, defineComponent } from 'vue';
// import type { LineContextProps, RootContextProps } from './types';

// // Create a symbol for context injection
// const RootContextSymbol = Symbol('RootContext');
// const LineContextSymbol = Symbol('LineContext');

// // Define a composable for the Root context
// export const useRootContext = () => {
//   // Inject the Root context value
//   const ctx = inject(RootContextSymbol);

//   // Throw an error if the context is undefined
//   if (!ctx) {
//     throw new Error(
//       'Could not find nearest <CodeBlock /> component. Please wrap this component with a <CodeBlock /> component.'
//     );
//   }
//   return ctx;
// };

// // Define a composable for the Line context
// export const useLineContext = () => {
//   // Inject the Line context value
//   const ctx = inject(LineContextSymbol);

//   // Throw an error if the context is undefined
//   if (!ctx) {
//     throw new Error(
//       'Could not find nearest <CodeBlock.Code /> component. Please wrap this component with <CodeBlock.Code /> component.'
//     );
//   }
//   return ctx;
// };

// // Define the main CodeBlock component
// export const CodeBlock = defineComponent({
//   setup() {
//     // Provide the context values to child components
//     provide(RootContextSymbol, {
//       // Place your RootContextProps values here
//     });

//     provide(LineContextSymbol, {
//       // Place your LineContextProps values here
//     });

//     // Render the component's template or return JSX here
//     return () => (
//       // Your template goes here
//     );
//   }
// });

// // Define a subcomponent for Line
// export const CodeBlockLine = defineComponent({
//   setup() {
//     // You can use LineContext within this component
//     const lineContext = useLineContext();

//     // Render the component's template or return JSX here
//     return () => (
//       // Your template goes here
//     );
//   }
// });
