import { Util } from "@nuka9510/js-util";
import FileSizeUnit from "../interfaces/file_size_unit.js";
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
    static get B() { return SI.#B; }
    static get KB() { return SI.#KB; }
    static get MB() { return SI.#MB; }
    static get GB() { return SI.#GB; }
    static get TB() { return SI.#TB; }
    static get PB() { return SI.#PB; }
    static get EB() { return SI.#EB; }
    static get ZB() { return SI.#ZB; }
    static get YB() { return SI.#YB; }
    get baseBytes() { return 1000 ** this.power; }
    constructor(value, unitName, unitShortName, power) { super(value, unitName, unitShortName, power); }
    static getDisplayUnit(bytes) {
        return SI.values()
            .toArray()
            .reverse()
            .entries()
            .find((...arg) => bytes >= arg[0][1].baseBytes)?.[1] ?? SI.B;
    }
    transFromBytes(bytes, exp = 2) {
        return {
            bytes: bytes,
            size: Util.decimalAdjust('floor', bytes / this.baseBytes, exp),
            unit: this
        };
    }
}
