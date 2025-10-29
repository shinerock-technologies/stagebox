const colors = ["#ef4444", "#22c55e", "#eab308"]; // red-500, green-500, yellow-500

export function getSectionLabelColor(index: number): string {
  return colors[index % colors.length];
}
