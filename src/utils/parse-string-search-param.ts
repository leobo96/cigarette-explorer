export function parseStringSearchParam(val: string | string[] | undefined) {
  if (!val) throw new Error("Not found");

  return typeof val === "string"
    ? val
    : Array.isArray(val) && val.at(0)
    ? val[0]
    : "";
}
