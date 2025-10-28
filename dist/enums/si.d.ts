import { fileSize } from "@nuka9510/file-size-unit-enum/@types/interfaces/file-size-unit";
import FileSizeUnit from "../interfaces/file-size-unit.js";
/** 정보 단위 (십진 접두어) */
export default class SI extends FileSizeUnit {
    #private;
    static get B(): SI;
    static get KB(): SI;
    static get MB(): SI;
    static get GB(): SI;
    static get TB(): SI;
    static get PB(): SI;
    static get EB(): SI;
    static get ZB(): SI;
    static get YB(): SI;
    get baseBytes(): number;
    constructor(value: string, unitName: string, unitShortName: string, power: number);
    static getDisplayUnit(bytes: number): SI;
    transFromBytes(bytes: number, exp?: number): fileSize;
}
