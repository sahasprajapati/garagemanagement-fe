import { Omit } from 'lodash';
import { forwardRef } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { DatePickerProps } from '../DatePicker/DatePicker';
import './datepicker.css'
interface DateRangePickerProps
  extends Omit<DatePickerProps, 'handleDateChange'> {
  endDate: Date | null;
  handleDateChange: (dates: [startDate: Date, endDate: Date]) => void;
}
export default function CustomDateRangePicker({
  date,
  handleDateChange,
  maxDate,
  placeholder = 'Select Date...',

  format = 'Pp',
  endDate,
  showTime = true,
}: DateRangePickerProps) {
  const ExampleCustomInput = forwardRef<HTMLInputElement>(
    ({ value, onClick }: any, ref) => (
      <input
        className="form-control"
        onClick={onClick}
        ref={ref}
        value={value}
        placeholder={placeholder}
      />
    ),
  );

  console.log("Sahas startdate", date)
  console.log("Sahas end", endDate)
  return (
    <DatePicker
      selected={new Date()}
      onChange={handleDateChange}
      showTimeSelect
      isClearable
      closeOnScroll={true}
      customInput={<ExampleCustomInput />}
      maxDate={maxDate}
      dateFormat={format}
      placeholderText={placeholder}
      selectsRange
      showTimeInput={showTime}
      startDate={date}
      endDate={endDate}
    />
  );
}
