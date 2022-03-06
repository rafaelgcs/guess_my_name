import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useFormik, Form, FormikProvider } from 'formik';

// material
import { Stack, Checkbox, TextField, FormControlLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { updateLocalUser } from '../../services/auth';

// ----------------------------------------------------------------------

export default function UserStartForm(props) {
  const { generatedUsername, changedUsername } = props;
  const navigate = useNavigate();
  //   const [showCode, setShowCode] = useState(false);

  const FormSchema = Yup.object().shape({
    username: Yup.string().required('Username is required')
  });

  const submitForm = (data) => {
    const toSave = {
      ...data,
      points: 0
    };
    // console.log(toSave);
    updateLocalUser(JSON.stringify(toSave));
    setTimeout(() => {
      navigate('/create');
    }, 1000);
  };

  const formIk = useFormik({
    initialValues: {
      username: generatedUsername,
      remember: true
    },
    validationSchema: FormSchema,
    onSubmit: submitForm
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formIk;

  //   const handleShowPassword = () => {
  //     setShowPassword((show) => !show);
  //   };

  return (
    <FormikProvider value={formIk}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="username"
            type="text"
            label="Username"
            {...getFieldProps('username')}
            error={Boolean(touched.username && errors.username)}
            helperText={touched.username && errors.username}
            onBlur={(ev) => {
              changedUsername(ev.target.value);
            }}
          />

          {/* <TextField
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
            helperText={touched.password && errors.password}
          /> */}
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
            label="Remember me"
          />

          {/* <Link component={RouterLink} variant="subtitle2" to="#">
            Forgot password?
          </Link> */}
        </Stack>

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
        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          color="warning"
          loading={isSubmitting}
        >
          Enter in a Room
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}

UserStartForm.propTypes = {
  generatedUsername: PropTypes.string,
  changedUsername: PropTypes.func
};
