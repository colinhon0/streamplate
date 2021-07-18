import React from 'react';
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment';
import EmailIcon from '@material-ui/icons/Email';

function TextInput (prop) {
  return (
    <TextField
      value={prop.value}
      onChange={prop.onChange}
      label="Email"
      InputProps={{
        id: 'Email',
        startAdornment: (
          <InputAdornment position="start">
            <EmailIcon />
          </InputAdornment>
        ),
      }}
    />
  )
}

export default TextInput
