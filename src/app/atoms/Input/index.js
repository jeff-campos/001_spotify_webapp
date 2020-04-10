import React, { useState } from 'react';

import { Container, Label } from './styles';

export default function Input({ placeholder, label, model }) {
  const [value, setValue] = useState('');
  return (
    <Container model={model}>
      <Label>{label}</Label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={event => setValue(event.target.value)}
      />
    </Container>
  );
}
