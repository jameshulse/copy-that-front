import * as React from 'react';

type Input = 'text' | 'number' | 'textarea';
type Value = string | number;

interface InputProps<I extends Input, V extends Value> {
  name: string;
  type: I;
  value: V;
  changeHandler: React.EventHandler<any>;
  placeholder?: string;
}

/** A Generic, labelled input for a form */
const Input = <I extends Input, V extends Value>({
  name,
  value,
  type,
  changeHandler,
  placeholder,
}: InputProps<I, V>) =>
  <label htmlFor={name}>
    <span>{name}</span>
    {
      type === 'textarea'
        ? <textarea
            id={name}
            name={name}
            value={value}
            onChange={changeHandler}
            placeholder={placeholder}
          />
        : <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={changeHandler}
            placeholder={placeholder}
          />
    }
  </label>;

export default Input;
