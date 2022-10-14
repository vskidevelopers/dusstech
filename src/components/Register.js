import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../store/Auth-Slice';

const Register = () => {
	const dispatch = useDispatch();
	const { registered, loading} = useSelector(state => state.user);

	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
	});

	const { username,email,password} = formData;

	const onChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		console.log( "target name", e.target.name, "Target Value ", e.target.value )
	};

	const onSubmit = e => {
		e.preventDefault();
		console.log(formData)
		console.log(" ############ ")
		console.log(username)
		dispatch(register(formData));
	};

	if (registered) return <Navigate to='/auth' />;

	return (
    <div className="row justify-content-center py-5">
    <div className="col-md-7 col-lg-5">
      <div className="login-wrap p-4 p-md-5">
        <div className="icon d-flex align-items-center justify-content-center">
          <span className="fas fa-user"></span>
        </div>
        <h3 className="text-center mb-4">Register</h3>
        <form className='mt-5' onSubmit={onSubmit} method="POST">
				<div className='form-group'>
					<label className='form-label' htmlFor='username'>
						First Name
					</label>
					<input
						className='form-control form-input'
						type='text'
						name='username'
						onChange={onChange}
						value={username}
						required
					/>
				</div>
			
				<div className='form-group mt-3'>
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
						
					</div>
				) : (
          <div class="d-grid  col-6 mx-auto">
          <button
              type="submit"
              className=" btn  btn-outline-success rounded px-3"
            >
              Register Account
            </button>
            </div>
				)}
			</form>
      </div>
    </div>
  </div>
	);
};

export default Register;