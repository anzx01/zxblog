import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString} className="neob-text font-black text-sm">
      {format(date, "yyyy年MM月dd日")}
    </time>
  );
};

export default DateFormatter;
