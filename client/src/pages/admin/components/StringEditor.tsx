import React, { ReactElement } from "react";
import styled from "styled-components";

interface StringEditorProps {
  name: string;
  value: string;
  required: boolean;
  onValueChange: (newData: string) => void;
}

const StringEditor = ({
  name,
  value,
  required,
  onValueChange,
}: StringEditorProps): ReactElement => {
  function handleInputChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void {
    event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;

    onValueChange(event.target.value);
  }

  return (
    <div>
      <label>{name}</label>
      <StyledTextArea
        alert={required && !value}
        onChange={handleInputChange}
        value={value || ""}
      />
    </div>
  );
};

const StyledTextArea = styled.textarea<{ alert: boolean }>`
  background-color: ${(props) => (props.alert ? "red" : "none")};
  display: block;
  width: 15rem;
  border: 1px solid black;
  resize: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default StringEditor;
