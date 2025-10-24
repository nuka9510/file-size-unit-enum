import { Enum } from "@nuka9510/simple-enum";
export default class FileSizeUnit extends Enum {
    #power;
    #unitName;
    #unitShortName;
    /**
     * 기준 값 (단위 bytes)
     */
    get baseBytes() { return null; }
    ;
    get power() { return this.#power; }
    get unitName() { return this.#unitName; }
    get unitShortName() { return this.#unitShortName; }
    constructor(value, unitName, unitShortName, power) {
        super(value);
        this.#unitName = unitName;
        this.#unitShortName = unitShortName;
        this.#power = power;
    }
    /**
     * bytes를 unit 단위에 맞춰 변환한 객체 반환
     * 소수점 자릿수에 맞춰 버림 처리한다.
     */
    transFromBytes(
    /** 변환할 bytes 값 */
    bytes, 
    /** 소숫점 자릿수 `default: 2` */
    exp = 2) { return null; }
    ;
}
