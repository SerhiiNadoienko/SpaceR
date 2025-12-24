"use client";

import { HeatmapValue } from "@/mocks/ActivityData.mock";
import CalendarHeatmap from "react-calendar-heatmap";
import "./ActivityHeatmap.css";

type ActivityDay = {
  date: string;
  count: number;
};

interface ActivityHeatmapProps {
  data: ActivityDay[];
}

export const ActivityHeatmap = ({ data }: ActivityHeatmapProps) => {
  return (
    <CalendarHeatmap
      startDate={shiftDate(new Date(), -365)}
      endDate={new Date()}
      values={data}
      gutterSize={4}
      classForValue={(value: HeatmapValue | null) => {
        if (!value || !value.count) return "color-github-0";
        if (value.count >= 5) return "color-github-4";
        if (value.count >= 3) return "color-github-3";
        if (value.count >= 2) return "color-github-2";
        return "color-github-1";
      }}
      tooltipDataAttrs={(value: HeatmapValue | null) => {
        if (!value) return null;
        return {
          "data-tip": `${value.count} activities on ${value.date}`,
        };
      }}
    />
  );
};

function shiftDate(date: Date, numDays: number) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}
