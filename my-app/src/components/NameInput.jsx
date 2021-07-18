import React from 'react';
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';

function NameInput (prop) {
  return (
    <TextField
      value={prop.value}
      onChange={prop.onChange}
      label={prop.label}
      InputProps={{
        id: 'Name',
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        ),
      }}
    />
  )
}

export default NameInput
