import FileSizeUnit from "../../src/interfaces/file_size_unit.js";

interface fileSize {
  /** 파일 bytes */
  bytes: number;
  /** unit에 맞춰 변환 한 size 값 */
  size: number;
  /** unit */
  unit: FileSizeUnit;
}