import { Util } from "@nuka9510/js-util";
import { fileSize } from "../../@types/interfaces/file_size_unit";
import FileSizeUnit from "../interfaces/file_size_unit.js";

/** 정보 단위 (이진 접두어) */
export default class IEC extends FileSizeUnit {
  static #B = new IEC('B', 'Byte', 'B', 0);

  static #KB = new IEC('KB', 'KibiByte', 'KiB', 1);

  static #MB = new IEC('MB', 'MebiByte', 'MiB', 2);

  static #GB = new IEC('GB', 'GibiByte', 'GiB', 3);

  static #TB = new IEC('TB', 'TebiByte', 'TiB', 4);

  static #PB = new IEC('PB', 'PebiByte', 'PiB', 5);

  static #EB = new IEC('EB', 'ExbiByte', 'EiB', 6);

  static #ZB = new IEC('ZB', 'ZebiByte', 'ZiB', 7);

  static #YB = new IEC('YB', 'YobiByte', 'YiB', 8);

  static get B(): IEC { return IEC.#B; }

  static get KB(): IEC { return IEC.#KB; }

  static get MB(): IEC { return IEC.#MB; }

  static get GB(): IEC { return IEC.#GB; }

  static get TB(): IEC { return IEC.#TB; }

  static get PB(): IEC { return IEC.#PB; }

  static get EB(): IEC { return IEC.#EB; }

  static get ZB(): IEC { return IEC.#ZB }

  static get YB(): IEC { return IEC.#YB }

  get baseBytes(): number { return 1024 ** this.power; }

  constructor(
    value: string,
    unitName: string,
    unitShortName: string,
    power: number
  ) { super(value, unitName, unitShortName, power); }

  static getDisplayUnit(bytes: number): IEC {
    return IEC.values()
              .toArray()
              .reverse()
              .entries()
              .find((...arg) => bytes >= (arg[0][1] as IEC).baseBytes)?.[1] as IEC ?? IEC.B;
  }

  transFromBytes(
    bytes: number,
    exp: number = 2
  ): fileSize {
    return {
      bytes: bytes,
      size: Util.decimalAdjust('floor', bytes / this.baseBytes, exp),
      unit: this
    };
  }

}