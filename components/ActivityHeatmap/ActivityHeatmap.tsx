"use client";

import CalendarHeatmap from "react-calendar-heatmap";
import { HeatmapValue } from "@/mocks/ActivityData.mock";
import React, { useState } from "react";
import { formatHeatmapDate } from "@/lib/utils/heatmap";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./ActivityHeatmap.css";

type RectWithDataProps = React.SVGProps<SVGRectElement> & {
  "data-tooltip-id"?: string;
  "data-tooltip-content"?: string;
};

type ActivityDay = {
  date: string;
  count: number;
};

interface ActivityHeatmapProps {
  data: ActivityDay[];
}

export const ActivityHeatmap = ({ data }: ActivityHeatmapProps) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  if (!data || data.length === 0) return null;

  const startDate = new Date(data[0].date);
  startDate.setDate(startDate.getDate() - 1);
  const endDate = data[data.length - 1].date;

  const selectedActivity = selectedDate
    ? data.find((d) => d.date === selectedDate)
    : null;

  return (
    <div style={{ display: "flex", gap: "240px" }}>
      {/* Heatmap */}
      <CalendarHeatmap
        startDate={startDate}
        endDate={endDate}
        values={data}
        gutterSize={4}
        classForValue={(value: HeatmapValue | null) => {
          if (!value || value.count === 0) return "color-github-0";
          if (value.count >= 5) return "color-github-4";
          if (value.count >= 3) return "color-github-3";
          if (value.count >= 2) return "color-github-2";
          return "color-github-1";
        }}
        transformDayElement={(
          element: React.ReactElement<RectWithDataProps>,
          value: HeatmapValue | null,
        ) => {
          const date = value?.date ?? "unknown";
          const count = value?.count ?? 0;
          const tooltipId = `heatmap-tooltip-${date}`;

          return React.cloneElement(element, {
            key: tooltipId,
            onClick: () => setSelectedDate(date),
            style: { cursor: "pointer" },
            "data-tooltip-id": tooltipId,
            "data-tooltip-content":
              count > 0
                ? `${count} activities · ${formatHeatmapDate(date)}`
                : `No activities · ${formatHeatmapDate(date)}`,
          });
        }}
      />

      {data.map((d) => {
        const id = `heatmap-tooltip-${d.date}`;
        return <Tooltip key={id} id={id} place="top" content={""} />;
      })}

      {/* Блок с информацией */}
      <div style={{ minWidth: "200px" }}>
        {selectedActivity ? (
          <>
            <h3>{formatHeatmapDate(selectedActivity.date)}</h3>
            <p>Activities: {selectedActivity.count}</p>
            {/* Можно добавить список деталей */}
            {/* selectedActivity.details?.map((item, i) => <div key={i}>{item}</div>) */}
          </>
        ) : (
          <p>Click on a day to see activities</p>
        )}
      </div>
    </div>
  );
};
