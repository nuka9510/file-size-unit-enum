import { Enum } from "@nuka9510/simple-enum";
import { fileSize } from "../../@types/interfaces/file_size_unit";
export default class FileSizeUnit extends Enum<string> {
    #private;
    /**
     * 기준 값 (단위 bytes)
     */
    get baseBytes(): number | null;
    get power(): number;
    get unitName(): string;
    get unitShortName(): string;
    constructor(value: string, unitName: string, unitShortName: string, power: number);
    /**
     * bytes를 unit 단위에 맞춰 변환한 객체 반환
     * 소수점 자릿수에 맞춰 버림 처리한다.
     */
    transFromBytes(
    /** 변환할 bytes 값 */
    bytes: number, 
    /** 소숫점 자릿수 `default: 2` */
    exp?: number): fileSize | null;
}
