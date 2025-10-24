[![LICENSE][license]][license-url]
[![GITHUB-VERSION][github-version]][github-version-url]
[![NPM-VERSION][npm-version]][npm-version-url]
![GITHUB-LAST-COMMIT][github-last-commit]
![NPM-LAST-UPDATE][npm-last-update]
![GITHUB-REPO-SIZE][github-repo-size]
![NPM-UNPACKED-SIZE][npm-unpacked-size]
![JSDELIVR-DOWNLOAD][jsdelivr-download]
![NPM-DOWNLOAD][npm-download]
![TOP-LANGUAGE][top-language]

[license]: https://img.shields.io/npm/l/%40nuka9510%2Ffile-size-unit-enum
[license-url]: https://github.com/nuka9510/file-size-unit-enum/blob/main/LICENSE

[github-version]: https://img.shields.io/github/package-json/v/nuka9510/file-size-unit-enum?logo=github
[github-version-url]: https://github.com/nuka9510/file-size-unit-enum

[npm-version]: https://img.shields.io/npm/v/%40nuka9510%2Ffile-size-unit-enum?logo=npm
[npm-version-url]: https://www.npmjs.com/package/@nuka9510/file-size-unit-enum

[github-last-commit]: https://img.shields.io/github/last-commit/nuka9510/file-size-unit-enum?logo=github

[npm-last-update]: https://img.shields.io/npm/last-update/%40nuka9510%2Ffile-size-unit-enum?logo=npm

[github-repo-size]: https://img.shields.io/github/repo-size/nuka9510/file-size-unit-enum?logo=github

[npm-unpacked-size]: https://img.shields.io/npm/unpacked-size/%40nuka9510%2Ffile-size-unit-enum?logo=npm

[jsdelivr-download]: https://img.shields.io/jsdelivr/npm/hm/%40nuka9510/file-size-unit-enum?logo=jsdelivr

[npm-download]: https://img.shields.io/npm/dm/%40nuka9510%2Ffile-size-unit-enum?logo=npm

[top-language]: https://img.shields.io/github/languages/top/nuka9510/file-size-unit-enum

## Install
```
npm i @nuka9510/file-size-unit-enum
```
```
<script src="https://cdn.jsdelivr.net/npm/@nuka9510/file-size-unit-enum/dist/js/index.min.js"> </script>
```
```
<script src="https://cdn.jsdelivr.net/npm/@nuka9510/file-size-unit-enum@latest/dist/js/index.min.js"> </script>
```
```
<script src="https://cdn.jsdelivr.net/npm/@nuka9510/file-size-unit-enum@<specific-version>/dist/js/index.min.js"> </script>
```
```
<script type="importmap">
  {
    "imports": { "@nuka9510/file-size-unit-enum": "https://cdn.jsdelivr.net/npm/@nuka9510/file-size-unit-enum/dist/esm/index.min.mjs" }
  }
</script>
```
```
<script type="importmap">
  {
    "imports": { "@nuka9510/file-size-unit-enum": "https://cdn.jsdelivr.net/npm/@nuka9510/file-size-unit-enum@latest/dist/esm/index.min.mjs" }
  }
</script>
```
```
<script type="importmap">
  {
    "imports": { "@nuka9510/file-size-unit-enum": "https://cdn.jsdelivr.net/npm/@nuka9510/file-size-unit-enum@<specific-version>/dist/esm/index.min.mjs" }
  }
</script>
```
## Usage
### js
```
fileSizeUnitEnum.IEC;
fileSizeUnitEnum.SI;
```
### mjs
```
import { IEC, SI } from "@nuka9510/file-size-unit-enum";

IEC;
SI;
```
### cjs
```
const fileSizeUnitEnum = require('@nuka9510/file-size-unit-enum');

fileSizeUnitEnum.IEC;
fileSizeUnitEnum.SI;
```
### example
```
example
├── js
│  └── case_1.mjs
└── view
   └── case_1.html
```
- `js/case_1.mjs`
```
import { IEC } from "@nuka9510/file-size-unit-enum";

class Case1 {
  constructor() {
    this.onFileChange = this.onFileChange.bind(this);

    document.querySelectorAll('[data-action="file-change"]')
            .forEach((...arg) => { arg[0].addEventListener('change', this.onFileChange); });
  }

  onFileChange(
    /** @type {Event} */ ev
  ) {
    /** @type {HTMLInputElement} */
    const target = ev.currentTarget,
    /** @type {HTMLParagraphElement} */
    fileListEl = document.querySelector('[data-name="file-list"]');

    fileListEl.innerHTML = [...target.files].map((...arg) => {
                                              const file = arg[0],
                                              iec = IEC.getDisplayUnit(file.size);

                                              return `${ file.name } | ${ file.size }${ IEC.B.unitShortName } | ${ iec.transFromBytes(file.size).size }${ iec.unitShortName }`;
                                            })
                                            .join('<br/>');
  }
}

new Case1();
```
- `view/case_1.html`
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <input type="file" data-action="file-change" multiple>
  <p data-name="file-list"></p>
</body>
<script type="importmap">
  {
    "imports": { "@nuka9510/file-size-unit-enum": "https://cdn.jsdelivr.net/npm/@nuka9510/file-size-unit-enum/dist/esm/index.min.mjs" }
  }
</script>
<script src="../js/case_1.mjs" type="module"></script>
</html>