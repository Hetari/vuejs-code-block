declare module 'code-block' {
  import { DefineComponent } from 'vue';

  // Define the expected props interface
  // Props goes here
  interface CodeBlockProps {
    class: string;
    id: string;
    code: string;
    language: SupportedLanguage;
    codeClass: string;
    linesHighlighted: string[] | number[];
    wordsHighlighted: string[];
    asElement: string;
    numbered: boolean;
    theme: themesType;
    fileName: string;
  }

  type themesType =
    | 'nightOwl'
    | 'dracula'
    | 'duotoneDark'
    | 'duotoneLight'
    | 'github'
    | 'oceanicNext'
    | 'prismCoy'
    | 'prismDark'
    | 'prismFunky'
    | 'prismOkaidia'
    | 'prismSolarizedLight'
    | 'prismTomorrow'
    | 'prismTwilight'
    | 'prism'
    | 'shadesOfPurple'
    | 'ultramin'
    | 'vsDark'
    | 'none';

  type SupportedLanguage =
    | 'DFS'
    | 'actionscript'
    | 'c'
    | 'clike'
    | 'coffee'
    | 'coffeescript'
    | 'cpp'
    | 'css'
    | 'extend'
    | 'flow'
    | 'go'
    | 'graphql'
    | 'html'
    | 'java'
    | 'javascript'
    | 'js'
    | 'json'
    | 'jsx'
    | 'kotlin'
    | 'kt'
    | 'kts'
    | 'markdown'
    | 'markup'
    | 'mathml'
    | 'md'
    | 'objc'
    | 'objectivec'
    | 'plain'
    | 'plaintext'
    | 'py'
    | 'python'
    | 'regex'
    | 'rust'
    | 'sql'
    | 'ssml'
    | 'svg'
    | 'swift'
    | 'text'
    | 'ts'
    | 'tsx'
    | 'txt'
    | 'typescript'
    | 'webmanifest'
    | 'xml'
    | 'yaml'
    | 'yml'
    | 'php'
    | 'SQL'
    | 'gherkin'
    | 'bash'
    | 'shell';

  const CodeBlockType: DefineComponent<CodeBlockProps>;
  export {
    CodeBlockType,
    SupportedLanguage as SupportedLanguageTypes,
    themesType
  };
}
