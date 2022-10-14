import { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../store/Auth-Slice';


const Login = () => {
  const dispatch = useDispatch();
	const { loading, isAuthenticated } = useSelector(
		state => state.user
	);

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	// useEffect(() => {
	// 	if (registered) dispatch(resetRegistered());
	// }, [registered, dispatch]);

	const { email, password } = formData;

	const onChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const onSubmit = e => {
		e.preventDefault();

		dispatch(login(formData));
	};

	if (isAuthenticated) return <Navigate to='/shop' />;

  return (
  
        <div className="row justify-content-center py-5">
          <div className="col-md-7 col-lg-5">
            <div className="login-wrap p-4 p-md-5">
              <div className="icon d-flex align-items-center justify-content-center">
                <span className="fas fa-user"></span>
              </div>
              <h3 className="text-center mb-4">Sign In</h3>
              <form className='mt-5' onSubmit={onSubmit}>
				<div className='form-group'>
					<label className='form-label' htmlFor='email'>
						Email
					</label>
					<input
						className='form-control form-input'
						type='email'
						name='email'
						onChange={onChange}
						value={email}
						required
					/>
				</div>
				<div className='form-group mt-3'>
					<label className='form-label' htmlFor='password'>
						Password
					</label>
					<input
						className='form-control form-input'
						type='password'
						name='password'
						onChange={onChange}
						value={password}
						required
					/>
				</div>
				{loading ? (
					<div className='spinner-border text-primary' role='status'>
						<span className='visually-hidden'>Loading...</span>
					</div>
				) : (
          <div class="d-grid  col-6 mx-auto">
          <button
              type="submit"
              className=" btn  btn-outline-success rounded px-3"
            >
              Login
            </button>
            </div>
				)}
			</form>
            </div>
          </div>
        </div>
  );
};

export default Login;