export function timeAgo(date: string | number | Date) {
  const now = Date.now();
  const past = new Date(date).getTime();
  const diff = now - past;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours   = Math.floor(minutes / 60);
  const days    = Math.floor(hours / 24);
  const weeks   = Math.floor(days / 7);

  const format = (value: number, unit: string) =>
    `${value} ${unit}${value === 1 ? "" : "s"} ago`;

  if (seconds < 60) return format(seconds, "second");
  if (minutes < 60) return format(minutes, "minute");
  if (hours < 24)   return format(hours, "hour");
  if (days < 7)     return format(days, "day");
  return format(weeks, "week");
}
