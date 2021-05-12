import React, { ReactElement } from "react";
import { Container, InputComponent, InputContainer, Label } from "./styles";

export type InputProps = {
  maxLength?: number;
  minLength?: number;
  value?: string | number;
  placeholder?: string;
  label?: string;
  disable?: boolean;
  tag?: string;
  metric?: string;
  type?: string;
  onClick?: () => void;
  onChangeValue?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onFocus?: () => void;
};

const Input = ({
  maxLength,
  minLength,
  placeholder = "",
  label = "",
  value,
  tag = "",
  metric = "",
  disable,
  type = "text",
  onClick,
  onChangeValue,
  onBlur,
  onFocus,
}: InputProps): ReactElement => {
  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      <Container>
        {tag && tag}
        <InputComponent
          type={type}
          disabled={disable}
          placeholder={placeholder}
          onChange={onChangeValue}
          onBlur={onBlur}
          onFocus={onFocus}
          onClick={onClick}
          value={value}
          minLength={minLength}
          maxLength={maxLength}
        />
        {metric && metric}
      </Container>
    </InputContainer>
  );
};

export default Input;
