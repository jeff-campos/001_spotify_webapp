import React, { useState, useEffect } from 'react';
import { Container, Label } from './styles';

export default function Input({ placeholder, label, model, action }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    action(value);
  }, [action, value]);

  return (
    <Container model={model}>
      <Label>{label}</Label>
      <input
        type="text"
        aria-label="input-default"
        placeholder={placeholder}
        value={value}
        onChange={event => setValue(event.target.value)}
      />
    </Container>
  );
}
