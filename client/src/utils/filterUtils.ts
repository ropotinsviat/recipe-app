export function buildRequestBody(filterType?: string, filterValue?: string) {
  if (!filterType || !filterValue) return {};
  return { filterType, filterValue };
}
