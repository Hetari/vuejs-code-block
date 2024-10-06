import { readdir, copyFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const iconsPath = join(__dirname, './icons');
const outputFolder = join(__dirname, '../icons');

const iconsToBundle = [
  'plain',
  'plaintext',
  'text',
  'txt',
  'extend',
  'insertBefore',
  'DFS',
  'markup',
  'html',
  'mathml',
  'svg',
  'xml',
  'ssml',
  'atom',
  'rss',
  'css',
  'clike',
  'javascript',
  'js',
  'regex',
  'actionscript',
  'coffeescript',
  'coffee',
  'javadoclike',
  'yaml',
  'yml',
  'markdown',
  'md',
  'graphql',
  'typescript',
  'ts',
  'jsdoc',
  'flow',
  'n4js',
  'n4jsd',
  'jsx',
  'tsx',
  'swift',
  'kotlin',
  'kt',
  'kts',
  'c',
  'objectivec',
  'objc',
  'reason',
  'rust',
  'go',
  'cpp',
  'python',
  'py',
  'webmanifest',
  'java',
  'json',
  'php',
  'SQL',
  'cucumber',
  'console'
];

async function copyIcons() {
  try {
    await mkdir(outputFolder, { recursive: true });
    // Read all the icons from the source directory
    const icons = await readdir(iconsPath);

    for (const icon of icons) {
      if (iconsToBundle.some((ext) => icon.startsWith(`${ext}.svg`))) {
        const sourcePath = join(iconsPath, icon);
        const destinationPath = join(outputFolder, icon);

        await copyFile(sourcePath, destinationPath);
        console.log(`Copied: ${icon}`);
      }
    }

    console.log(`All icons copied successfully to ${outputFolder}`);
  } catch (err) {
    console.error(`Error copying icons: ${err}`);
  }
}

// Run the copy function
copyIcons();
