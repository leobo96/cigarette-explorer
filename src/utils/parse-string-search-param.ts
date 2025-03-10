export function parseStringSearchParam(val: string | string[] | undefined) {
  return typeof val === "string"
    ? val
    : Array.isArray(val) && val.at(0)
    ? val[0]
    : "";
}
