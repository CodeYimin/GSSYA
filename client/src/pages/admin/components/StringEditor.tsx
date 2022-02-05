import { FieldContainer, FieldLabel } from "@src/styles/styles";
import { camelCaseToNormal } from "@src/util/stringUtil";
import React, { ReactElement, useState } from "react";
import styled from "styled-components";

interface StringEditorProps {
  name?: string;
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
  const [inputFocused, setInputFocused] = useState<boolean>(false);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    event.target.style.height = "auto";
    event.target.style.height = `${event.target.scrollHeight}px`;

    onValueChange(event.target.value);
  }

  return (
    <FieldContainer>
      <FieldLabel>{name && camelCaseToNormal(name)}</FieldLabel>
      <StyledInput
        onChange={handleInputChange}
        value={value || ""}
        placeholder="Type something..."
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
      />
      <InputUnderline focused={inputFocused} />
    </FieldContainer>
  );
};

const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem 0.2rem 0.2rem 0;
  color: black;

  &:focus {
    outline: none;
  }
`;

const InputUnderline = styled.div<{ focused: boolean }>`
  width: 100%;
  height: 1px;
  background-color: #cbcbcb;

  &:before {
    display: block;
    content: "";
    margin: auto;
    width: ${(props) => (props.focused ? 100 : 0)}%;
    height: 2px;
    background-color: #585858;
    transition: all 0.2s;
  }
`;

export default StringEditor;
