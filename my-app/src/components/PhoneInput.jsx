import React from 'react';
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment';
import PhoneIcon from '@material-ui/icons/Phone';

function PhoneInput (prop) {
  return (
    <TextField
      value={prop.value}
      onChange={prop.onChange}
      label="Phone Number"
      InputProps={{
        id: 'Number',
        startAdornment: (
          <InputAdornment position="start">
            <PhoneIcon />
          </InputAdornment>
        ),
      }}
    />
  )
}

export default PhoneInput
