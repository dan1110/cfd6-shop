import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFormValidate from '../../../../hook/useFormValidate';
import { loginAction } from '../../../../redux/actions/authAction';
export function LoginForm() {
	let { loginErr } = useSelector((state) => state.auth);
	let { form, error, inputChange, check } = useFormValidate(
		{
			username: '',
			password: '',
		},
		{
			rule: {
				username: {
					required: true,
					pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
				},
				password: {
					required: true,
					// pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
				},
			},
			message: {
				username: {
					required: 'Email không được bỏ trống',
					pattern: 'Email không đúng định dạng',
				},
				password: {
					required: 'Mật khẩu không được bỏ trống',
					pattern: 'Mật khẩu tối thiểu 8 ký tự, ít nhất một chữ cái và một số',
				},
			},
		}
	);
	let dispatch = useDispatch();

	function onSubmitLogin(e) {
		e.preventDefault();
		let inputError = check();
		if (Object.keys(inputError).length === 0) {
			dispatch(loginAction(form));
			console.log(form);
		}
	}

	return (
		<div className="col-12 col-md-6">
			{/* Card */}
			<div className="card card-lg mb-10 mb-md-0">
				<div className="card-body">
					{/* Heading */}
					<h6 className="mb-7">Returning Customer</h6>
					{/* Form */}
					<form>
						<div className="row">
							{loginErr && <p className="error-text">{loginErr}</p>}
							<div className="col-12">
								{/* Email */}
								<div className="form-group">
									<label className="sr-only" htmlFor="loginEmail">
										Email Address *
									</label>
									<input
										className="form-control form-control-sm"
										id="loginEmail"
										type="email"
										name="username"
										placeholder="Email Address *"
										value={form.username}
										onChange={inputChange}
									/>
									{error.username && <span className="error-text">{error.username}</span>}
								</div>
							</div>
							<div className="col-12">
								{/* Password */}
								<div className="form-group">
									<label className="sr-only" htmlFor="loginPassword">
										Password *
									</label>
									<input
										value={form.password}
										className="form-control form-control-sm"
										id="loginPassword"
										name="password"
										type="password"
										onChange={inputChange}
										placeholder="Password *"
									/>
									{error.password && <span className="error-text">{error.password}</span>}
								</div>
							</div>
							<div className="col-12 col-md">
								{/* Remember */}
								<div className="form-group">
									<div className="custom-control custom-checkbox">
										<input className="custom-control-input" id="loginRemember" type="checkbox" />
										<label className="custom-control-label" htmlFor="loginRemember">
											Remember me
										</label>
									</div>
								</div>
							</div>
							<div className="col-12 col-md-auto">
								{/* Link */}
								<div className="form-group">
									<a
										className="font-size-sm text-reset"
										data-toggle="modal"
										href="#modalPasswordReset"
									>
										Forgot Password?
									</a>
								</div>
							</div>
							<div className="col-12">
								{/* Button */}
								<button className="btn btn-sm btn-dark" type="submit" onClick={onSubmitLogin}>
									Sign In
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
