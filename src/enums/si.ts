import { fileSize } from "@nuka9510/file-size-unit-enum/@types/interfaces/file-size-unit";
import { Util } from "@nuka9510/js-util";
import FileSizeUnit from "../interfaces/file-size-unit.js";

/** 정보 단위 (십진 접두어) */
export default class SI extends FileSizeUnit {
  static #B = new SI('B', 'Byte', 'B', 0);

  static #KB = new SI('KB', 'KiloByte', 'KB', 1);

  static #MB = new SI('MB', 'MegaByte', 'MB', 2);

  static #GB = new SI('GB', 'GigaByte', 'GB', 3);

  static #TB = new SI('TB', 'TeraByte', 'TB', 4);

  static #PB = new SI('PB', 'PetaByte', 'PB', 5);

  static #EB = new SI('EB', 'ExaByte', 'EB', 6);

  static #ZB = new SI('ZB', 'ZettaByte', 'ZB', 7);

  static #YB = new SI('YB', 'YottaByte', 'YB', 8);

  static get B(): SI { return SI.#B; }

  static get KB(): SI { return SI.#KB; }

  static get MB(): SI { return SI.#MB; }

  static get GB(): SI { return SI.#GB; }

  static get TB(): SI { return SI.#TB; }

  static get PB(): SI { return SI.#PB; }

  static get EB(): SI { return SI.#EB; }

  static get ZB(): SI { return SI.#ZB }

  static get YB(): SI { return SI.#YB }

  get baseBytes(): number { return 1000 ** this.power; }

  constructor(
    value: string,
    unitName: string,
    unitShortName: string,
    power: number
  ) { super(value, unitName, unitShortName, power); }

  static getDisplayUnit(bytes: number): SI {
    return SI.values()
              .toArray()
              .reverse()
              .entries()
              .find((...arg) => bytes >= (arg[0][1] as SI).baseBytes)?.[1] as SI ?? SI.B;
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