import { DayPicker } from 'react-day-picker';

const THEMES = { light: '', dark: '.dark' } as const;

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

export interface ChartContextProps {
  config: ChartConfig;
};


export type CalendarProps = React.ComponentProps<typeof DayPicker>;