declare module "pdf2table" {
  export function parse(
    buffer: Buffer,
    callback: (err: Error | null, rows: string[][], debugRows: unknown) => void
  ): void;
}
