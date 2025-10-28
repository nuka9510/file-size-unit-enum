import { Util } from "@nuka9510/js-util";
import FileSizeUnit from "../interfaces/file-size-unit.js";
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
    static get B() { return IEC.#B; }
    static get KB() { return IEC.#KB; }
    static get MB() { return IEC.#MB; }
    static get GB() { return IEC.#GB; }
    static get TB() { return IEC.#TB; }
    static get PB() { return IEC.#PB; }
    static get EB() { return IEC.#EB; }
    static get ZB() { return IEC.#ZB; }
    static get YB() { return IEC.#YB; }
    get baseBytes() { return 1024 ** this.power; }
    constructor(value, unitName, unitShortName, power) { super(value, unitName, unitShortName, power); }
    static getDisplayUnit(bytes) {
        return IEC.values()
            .toArray()
            .reverse()
            .entries()
            .find((...arg) => bytes >= arg[0][1].baseBytes)?.[1] ?? IEC.B;
    }
    transFromBytes(bytes, exp = 2) {
        return {
            bytes: bytes,
            size: Util.decimalAdjust('floor', bytes / this.baseBytes, exp),
            unit: this
        };
    }
}
