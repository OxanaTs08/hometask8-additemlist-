import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/slices/authSlice';
import {
  Box,
  Paper,
  Typography,
  Button,
  styled,
  TextField,
} from '@mui/material';

const StyledButton = styled(Button)(() => ({
  color: 'rgba(59, 60, 61, 1)',
  fontWeight: 'bold',
  '&:hover': {
    cursor: 'pointer',
    color: 'white',
    backgroundColor: 'rgba(59, 60, 61, 1)',
  },
  '&:active': {
    transform: 'translateY(4px)',
  },
}));

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box sx={{ width: '100%', padding: '20px' }}>
      <Paper
        elevation={3}
        sx={{
          margin: '0 auto',
          padding: '20px',
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          gap: `10px`,
        }}
      >
        <Typography
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'rgba(59, 60, 61, 1)',
          }}
          variant="h4"
        >
          Log In
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              alignItems: 'center',
            }}
          >
            <TextField
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Email"
              onChange={handleChange}
              sx={{ width: '90%' }}
            />
            <TextField
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={handleChange}
              sx={{ width: '90%' }}
            />

            <StyledButton type="submit">Login</StyledButton>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
