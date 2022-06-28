import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { TextField, FormControl, InputLabel, MenuItem, Select, InputBase } from '@mui/material';
import NavigationIcon from '@mui/icons-material/Navigation'
import { SmartButton } from '@mui/icons-material';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';

// const BootstrapInput = styled(InputBase)(({ theme }) => ({
//   'label + &': {
//     marginTop: theme.spacing(3),
//   },
//   '& .MuiInputBase-input': {
//     borderRadius: 4,
//     position: 'relative',
//     backgroundColor: theme.palette.background.paper,
//     border: '1px solid #ced4da',
//     fontSize: 16,
//     padding: '10px 26px 10px 12px',
//     transition: theme.transitions.create(['border-color', 'box-shadow']),
//     // Use the system font instead of the default Roboto font.
//     fontFamily: [
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//     '&:focus': {
//       borderRadius: 4,
//       borderColor: '#80bdff',
//       boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
//     },
//   },
// }));
const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    color:'white',
    border: 0,
    '&.Mui-disabled': {
      border: 0,
      color:'white',
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
      color:'white',
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
      color:'white',
    },
  },
}));

 function SelectSmall({val, w}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: val == 'Arial' ? 100: 60 , color:'white',  }} size="small">
      <InputLabel id="demo-select-small"  sx={{color:'white'}}>{val}</InputLabel>
     
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        onChange={handleChange}
        sx={{color:'white', 
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
            borderRadius:3,
            color:'white',
            fontSize: '3px'
          },'	.MuiSelect-icon': {
            color: 'white',
        },
    }}
      >
       
        <MenuItem value="">
          {/* <em>None</em> */}
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      
    </FormControl>
  );
}

export default function CustomizedDividers() {
  const [alignment, setAlignment] = React.useState('left');
  const [formats, setFormats] = React.useState(() => ['italic']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div>
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          border: (theme) => `1px solid ${theme.palette.divider}`,
          flexWrap: 'wrap',
          color:'white',
          backgroundColor:'#006D77'
        }}
      >
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
        <SelectSmall val='Arial' w='80' />
        <SelectSmall val='14' w='50' />
        <Divider flexItem orientation="vertical" sx={{  my: 1, color: 'white', bgcolor:'white' }} />

        <Divider flexItem orientation="vertical" sx={{  my: 1, color: 'white', bgcolor:'white' }} />
        <ToggleButton>
        <FormatColorTextIcon sx={{fontSize:'170%'}} />
        <KeyboardArrowDownIcon sx={{fontSize:'100%'}}/>
        </ToggleButton>

        <ToggleButton>
        <FormatColorTextIcon sx={{fontSize:'200%'}} />
        <KeyboardArrowDownIcon sx={{fontSize:'100%'}}/>
        </ToggleButton>

        <Divider flexItem orientation="vertical" sx={{  my: 1, color: 'white', bgcolor:'white' }} />
        <ToggleButton>
        <FormatListBulletedIcon   />
        </ToggleButton>

        <ToggleButton>
        <FormatListNumberedIcon  />
        </ToggleButton>

        <Divider flexItem orientation="vertical" sx={{  my: 1, color: 'white', bgcolor:'white' }} />
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          {/* <ToggleButton value="color" aria-label="color" disabled>
            <FormatColorFillIcon />
            <ArrowDropDownIcon />
          </ToggleButton> */}
        <Divider flexItem orientation="vertical" sx={{  my: 1, color: 'white', bgcolor:'white' }} />
        </StyledToggleButtonGroup>

        <StyledToggleButtonGroup
          size="small"
          sx={{ color:'white'}}
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignRightIcon />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justified" disabled>
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Paper>
    </div>
  );
}
