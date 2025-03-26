import React from 'react';
import { Controller } from "react-hook-form";
import { IconConteiner, InputContainer, InputText } from './styles';

const Input = ({leftIcon, name, control, ...rest}) => {
  return (
    <InputContainer>
    {leftIcon ? (<IconConteiner>{leftIcon}</IconConteiner>) : null}
        <Controller 
        name={name}
        control={control}
        render={({ field }) => <InputText {...field} {...rest} />}
        />
    </InputContainer>
  )
}

export { Input };
