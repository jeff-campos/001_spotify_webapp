import React from 'react'
import { useDispatch } from 'react-redux'
import { render, fireEvent } from '@testing-library/react'
import Login from '../../src/app/templates/Login'
import { signInRequest } from '../../src/store/modules/auth/actions'

jest.mock('react-redux')

const { getByLabelText, getByText } = render(<Login />)
const input = getByLabelText('input-default')
const button = getByText('Entrar')

describe('Login component', () => {
  it('must call an action when filling in the token', () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    fireEvent.change(input, { target: { value: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' } })
    fireEvent.click(button)

    expect(dispatch).toBeCalledWith(signInRequest('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'))

  })
})