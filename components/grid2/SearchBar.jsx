import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';


export default function SearchBar() {
  return (
    <Paper
    variant="outlined"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',
      borderRadius:4, borderColor: '#E29578',
      width: '20vw',
        boxShadow: `#E29578 0.2rem`,
        // borderColor: "#E29578",
      }}
    >
    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
      <SearchIcon />
    </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="search"
        // inputProps={{ 'aria-label': 'search google maps' }}
      />
    </Paper>
  );
}
