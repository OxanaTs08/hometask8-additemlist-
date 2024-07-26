import { useDispatch } from 'react-redux';
import { Button, Stack, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../redux/slices/authSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (localStorage.getItem('token')) {
      dispatch(logout());
      localStorage.removeItem('token');
      navigate('/login');
    }
  };

  return (
    <Stack alignItems={'center'} sx={{ padding: '50px' }} spacing={4}>
      <Typography variant="h4">It is Your Profile Page</Typography>
      <Typography variant="subtitle">
        Do you want to logout or keep on adding Items?
      </Typography>
      <Stack
        flexDirection={'row'}
        sx={{ gap: '10px' }}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <NavLink to="/listitems">
          <Button variant="contained">Continue</Button>
        </NavLink>

        <Button variant="contained" onClick={handleLogout}>
          Log out
        </Button>
      </Stack>
    </Stack>
  );
};

export default Profile;
