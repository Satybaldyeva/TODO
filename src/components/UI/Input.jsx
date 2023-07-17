import React from 'react'

export const Input = ({value, onChange, }) => {
  return (
  <input type="text" onChange={onChange} value={value} />
  )
}
