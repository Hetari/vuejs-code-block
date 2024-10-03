declare module 'code-block' {
  import { DefineComponent } from 'vue';

  // Define the expected props interface
  // Props goes here
  interface CodeBlockProps {
    class: string;
    id: string;
    code: string;
    language: string;
    codeClass: string;
    linesHighlighted: string[] | number[];
    wordsHighlighted: string[];
    asElement: string;
    numbered: boolean;
  }

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
  export { CodeBlockType, SupportedLanguage as SupportedLanguageTypes };
}
