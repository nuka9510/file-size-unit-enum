import { fileSize } from "../../@types/interfaces/file_size_unit";
import FileSizeUnit from "../interfaces/file_size_unit.js";
/** 정보 단위 (이진 접두어) */
export default class IEC extends FileSizeUnit {
    #private;
    static get B(): IEC;
    static get KB(): IEC;
    static get MB(): IEC;
    static get GB(): IEC;
    static get TB(): IEC;
    static get PB(): IEC;
    static get EB(): IEC;
    static get ZB(): IEC;
    static get YB(): IEC;
    get baseBytes(): number;
    constructor(value: string, unitName: string, unitShortName: string, power: number);
    static getDisplayUnit(bytes: number): IEC;
    transFromBytes(bytes: number, exp?: number): fileSize;
}
