import { extractColors } from "extract-colors";

export function extractFromImage(url: string) {
  const colors = extractColors(url).then(console.log).catch(console.error);
  return colors;
}