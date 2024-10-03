import { themesType } from 'code-block';
import { css as createClassName } from '@emotion/css';

// @ts-ignore
import nightOwl from '@theme-ui/prism/presets/night-owl.json';
// @ts-ignore
import dracula from '@theme-ui/prism/presets/dracula.json';
// @ts-ignore
import duotoneDark from '@theme-ui/prism/presets/duotone-dark.json';
// @ts-ignore
import duotoneLight from '@theme-ui/prism/presets/duotone-light.json';
// @ts-ignore
import github from '@theme-ui/prism/presets/github.json';
// @ts-ignore
import oceanicNext from '@theme-ui/prism/presets/oceanic-next.json';
// @ts-ignore
import prismCoy from '@theme-ui/prism/presets/prism-coy.json';
// @ts-ignore
import prismDark from '@theme-ui/prism/presets/prism-dark.json';
// @ts-ignore
import prismFunky from '@theme-ui/prism/presets/prism-funky.json';
// @ts-ignore
import prismOkaidia from '@theme-ui/prism/presets/prism-okaidia.json';
// @ts-ignore
import prismSolarizedLight from '@theme-ui/prism/presets/prism-solarizedlight.json';
// @ts-ignore
import prismTomorrow from '@theme-ui/prism/presets/prism-tomorrow.json';
// @ts-ignore
import prismTwilight from '@theme-ui/prism/presets/prism-twilight.json';
// @ts-ignore
import prism from '@theme-ui/prism/presets/prism.json';
// @ts-ignore
import shadesOfPurple from '@theme-ui/prism/presets/shades-of-purple.json';
// @ts-ignore
import ultramin from '@theme-ui/prism/presets/ultramin.json';
// @ts-ignore
import vsDark from '@theme-ui/prism/presets/vs-dark.json';

const none = { ...prism, colors: undefined, backgroundColor: undefined };

export function addThemeToCodeBlock(
  elementClass: HTMLDivElement,
  theme: themesType
) {
  const className = createClassName(theme);
  elementClass.className = className;
}

export const themes = {
  nightOwl,
  dracula,
  duotoneDark,
  duotoneLight,
  github,
  oceanicNext,
  prismCoy,
  prismDark,
  prismFunky,
  prismOkaidia,
  prismSolarizedLight,
  prismTomorrow,
  prismTwilight,
  prism,
  shadesOfPurple,
  ultramin,
  vsDark,
  none
};
