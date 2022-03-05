import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';
import plusFill from '@iconify/icons-eva/plus-fill';
import arrowDownLeft from '@iconify/icons-mdi/arrow-down-left';
import arrowUpRight from '@iconify/icons-mdi/arrow-up-right';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Button, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';

// ----------------------------------------------------------------------

export default function NewRegisterButton() {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        ref={ref}
        variant="contained"
        onClick={() => setIsOpen(true)}
        startIcon={<Icon icon={plusFill} />}
      >
        New Register
      </Button>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' }
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem component={RouterLink} to="#" sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <Icon icon={arrowDownLeft} width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Receita" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>

        <MenuItem sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <Icon icon={arrowUpRight} width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Despesa" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>
      </Menu>
    </>
  );
}
