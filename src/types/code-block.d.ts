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
    | 'plain'
    | 'plaintext'
    | 'text'
    | 'txt'
    | 'extend'
    | 'insertBefore'
    | 'DFS'
    | 'markup'
    | 'html'
    | 'mathml'
    | 'svg'
    | 'xml'
    | 'ssml'
    | 'atom'
    | 'rss'
    | 'css'
    | 'clike'
    | 'javascript'
    | 'js'
    | 'regex'
    | 'actionscript'
    | 'coffeescript'
    | 'coffee'
    | 'javadoclike'
    | 'yaml'
    | 'yml'
    | 'markdown'
    | 'md'
    | 'graphql'
    | 'sql'
    | 'typescript'
    | 'ts'
    | 'jsdoc'
    | 'flow'
    | 'n4js'
    | 'n4jsd'
    | 'jsx'
    | 'tsx'
    | 'swift'
    | 'kotlin'
    | 'kt'
    | 'kts'
    | 'c'
    | 'objectivec'
    | 'objc'
    | 'reason'
    | 'rust'
    | 'go'
    | 'cpp'
    | 'python'
    | 'py'
    | 'json'
    | 'webmanifest'
    | 'java';

  const CodeBlockType: DefineComponent<CodeBlockProps>;
  export {
    CodeBlockType,
    SupportedLanguage as SupportedLanguageTypes,
    themesType
  };
}
