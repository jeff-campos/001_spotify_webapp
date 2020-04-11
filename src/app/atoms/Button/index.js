import React from 'react';

import { ButtonElement } from './styles';

export default function Button({ label, action }) {
  return <ButtonElement onClick={() => action()}>{label}</ButtonElement>;
}
