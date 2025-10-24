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