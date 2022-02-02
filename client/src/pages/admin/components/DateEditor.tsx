import React, { ReactElement } from "react";
import styled from "styled-components";

interface DateEditorProps {
  name: string;
  date?: Date | null;
  required: boolean;
  onValueChange: (newDate: Date | null) => void;
}

const DateEditor = ({
  name,
  date,
  required,
  onValueChange,
}: DateEditorProps): ReactElement => {
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const timeZoneOffsetMs = new Date().getTimezoneOffset() * 60 * 1000;

    const inputDate = new Date(event.target.value);
    inputDate.setTime(inputDate.getTime() + timeZoneOffsetMs);

    onValueChange(inputDate.getTime() ? inputDate : null);
  }

  return (
    <div>
      <label>{name}</label>
      <StyledInput
        type="date"
        alert={required && !date}
        onChange={handleInputChange}
        value={date ? date.toISOString().split("T")[0] : ""}
      />
    </div>
  );
};

const StyledInput = styled.input<{ alert: boolean }>`
  background-color: ${(props) => (props.alert ? "red" : "none")};
  display: block;
  width: 15rem;
  border: 1px solid black;
  resize: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default DateEditor;
