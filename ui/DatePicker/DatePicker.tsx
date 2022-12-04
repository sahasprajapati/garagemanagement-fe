import { forwardRef } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './datepicker.css'
export interface DatePickerProps {
  date: Date;
  handleDateChange: (date: Date) => void;
  maxDate?: Date;
  placeholder?: string;
  format?: string;
  showTime?: boolean;
}
export default function CustomDatePicker({
  date,
  handleDateChange,
  maxDate,
  placeholder = 'Select Date...',
  format = 'Pp',
  showTime = true,
}: DatePickerProps) {
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
  return (
    <DatePicker
      selected={date}
      onChange={handleDateChange}
      showTimeSelect
      isClearable
      closeOnScroll={true}
      customInput={<ExampleCustomInput />}
      maxDate={maxDate}
      dateFormat={format}
      showTimeInput={showTime}
      placeholderText={placeholder}
    />
  );
}
