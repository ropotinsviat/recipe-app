export function capitalizeWords(str: string) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

export function truncateText(text: string, maxLength: number) {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}
