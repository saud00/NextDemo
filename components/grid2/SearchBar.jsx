import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',borderColor: "#E29578",
      borderRadius:4,
      width: '20vw','&:focus': {
        boxShadow: `0 0 0 0.2rem`,
        borderColor: "#E29578",
      }, }}
    >
    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
      <SearchIcon />
    </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
    </Paper>
  );
}
