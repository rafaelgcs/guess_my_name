import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Card, Stack, Link, Container, Typography } from '@mui/material';
// layouts
import AuthLayout from '../layouts/AuthLayout';
// components
import Page from '../components/Page';
import { MHidden } from '../components/@material-extend';
import UserStartForm from '../components/init/UserStartForm';
import { generateRandomUsername } from '../utils/functions';
import { getUser } from '../services/auth';
import CreateRoomForm from '../components/init/CreateRoomForm';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

// ----------------------------------------------------------------------

export default function CreateRoom() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const nUser = getUser();
    setUser(nUser);
    console.log(nUser);
  }, []);
  return (
    <RootStyle title="Guess My Name | Creating Your Room">
      {/* <AuthLayout>
        Don’t have an account? &nbsp;
        <Link underline="none" variant="subtitle2" component={RouterLink} to="/register">
          Get started
        </Link>
      </AuthLayout> */}

      {/* <MHidden width="mdDown">
        <SectionStyle>
          <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
            Hi, {username}! Welcome Back ;)
          </Typography>
          <img src="/static/illustrations/illustration_login.png" alt="login" />
        </SectionStyle>
      </MHidden> */}

      <Container maxWidth="sm">
        <ContentStyle>
          <Stack sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Creating your room, @{user.username}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Enter your details.</Typography>
          </Stack>

          <CreateRoomForm generatedUsername={user.username} />

          {/* <MHidden width="smUp">
            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
              Don’t have an account?&nbsp;
              <Link variant="subtitle2" component={RouterLink} to="register">
                Get started
              </Link>
            </Typography>
          </MHidden> */}
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
