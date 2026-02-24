import { decemberMockData, HeatmapValue } from "@/mocks/ActivityData.mock";
import { format, parseISO } from "date-fns";

export const YEAR = 2025;

function generateFullYearDays(year: number): HeatmapValue[] {
  const startDate = new Date(`${year}-01-01`);
  const endDate = new Date(`${year}-12-31`);
  const days: HeatmapValue[] = [];
  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    days.push({
      date: d.toLocaleDateString("en-CA"),
      count: 0,
    });
  }
  return days;
}

const fullYear = generateFullYearDays(YEAR);

export const mergedData = fullYear.map((day) => {
  const real = decemberMockData.find((d) => d.date === day.date);
  return real ? real : day;
});

export function formatHeatmapDate(dateStr: string) {
  return format(parseISO(dateStr), "MMMM do");
}
