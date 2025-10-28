import { FileSizeUnit } from "@nuka9510/file-size-unit-enum";

interface fileSize {
  /** 파일 bytes */
  bytes: number;
  /** unit에 맞춰 변환 한 size 값 */
  size: number;
  /** unit */
  unit: FileSizeUnit;
}