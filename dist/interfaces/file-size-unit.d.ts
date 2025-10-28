import { fileSize } from "@nuka9510/file-size-unit-enum/@types/interfaces/file-size-unit";
import { Enum } from "@nuka9510/simple-enum";
export default class FileSizeUnit extends Enum<string> {
    #private;
    /** 기준 값 (단위 bytes) */
    get baseBytes(): number | null;
    /** 단위 별 승수 */
    get power(): number;
    /** 단위 명 */
    get unitName(): string;
    /** 단위 축약명 */
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
