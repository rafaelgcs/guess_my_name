import { useState } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { useFormik, Form, FormikProvider } from 'formik';

import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';

// material
import {
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  MenuItem
} from '@mui/material';
import { LoadingButton } from '@mui/lab';

// ----------------------------------------------------------------------

const genders = [
  {
    title: 'All',
    value: 'all'
  },
  {
    title: 'Male',
    value: 'male'
  },
  {
    title: 'Female',
    value: 'female'
  }
];

const rounds = [
  {
    title: 5,
    value: 5
  },
  {
    title: 8,
    value: 8
  },
  {
    title: 10,
    value: 10
  },
  {
    title: 15,
    value: 15
  }
];

const naturality = [
  {
    title: 'All',
    value: 'all'
  },
  {
    title: 'Brazil',
    value: 'br'
  },
  {
    title: 'US',
    value: 'us'
  },
  {
    title: 'EN',
    value: 'en'
  },
  {
    title: 'German',
    value: 'gm'
  }
];

export default function CreateRoomForm(props) {
  const { generatedUsername } = props;
  //   const { code } = useParams();
  //   const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const FormSchema = Yup.object().shape({
    code: Yup.string().required('Code of the room is required'),
    rounds: Yup.number().required('The field Rounds is required'),
    creator: Yup.string().required('Username is required'),
    gender: Yup.string().nullable(),
    nat: Yup.string().nullable(),
    password: Yup.string().nullable()
  });

  const submitForm = (_, func) => {
    setTimeout(() => {
      func.setSubmitting(false);
    }, 1500);
  };

  const formIk = useFormik({
    initialValues: {
      code: uuidv4().split('-')[0],
      password: '',
      creator: generatedUsername,
      gender: 'all',
      rounds: 5,
      nat: 'all'
    },
    validationSchema: FormSchema,
    onSubmit: submitForm
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formIk;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormikProvider value={formIk}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="code"
            type="text"
            label="Room Code"
            {...getFieldProps('code')}
            error={Boolean(touched.code && errors.code)}
            helperText={touched.code && errors.code}
            disabled
          />
          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText="Insert a password if want a private room"
          />
          <hr />
          <TextField
            select
            label="Rounds"
            {...getFieldProps('rounds')}
            error={Boolean(touched.rounds && errors.rounds)}
            helperText={touched.rounds && errors.rounds}
          >
            {rounds.map((option) => (
              <MenuItem key={`${option.value}__rounds-select`} value={option.value}>
                {option.title}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Gender"
            {...getFieldProps('gender')}
            error={Boolean(touched.gender && errors.gender)}
            helperText={touched.gender && errors.gender}
          >
            {genders.map((option) => (
              <MenuItem key={`${option.value}__gender-select`} value={option.value}>
                {option.title}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Naturality"
            {...getFieldProps('nat')}
            error={Boolean(touched.nat && errors.nat)}
            helperText={touched.nat && errors.nat}
          >
            {naturality.map((option) => (
              <MenuItem key={`${option.value}__naturality-select`} value={option.value}>
                {option.title}
              </MenuItem>
            ))}
          </TextField>
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
            style={{ marginBottom: 20 }}
          >
            Create Room
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}

CreateRoomForm.propTypes = {
  generatedUsername: PropTypes.string
};
