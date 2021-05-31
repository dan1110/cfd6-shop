import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFormValidate from '../../../../hook/useFormValidate';
import '../../../../assets/custom.scss';
import { registerAction } from '../../../../redux/actions/authAction';

export function NewCustomer() {
	let { registerErr } = useSelector((state) => state.auth);
	let dispatch = useDispatch();
	let { form, check, error, inputChange } = useFormValidate(
		{
			password: '',
			first_name: '',
			last_name: '',
			confirmPassword: '',
			email: '',
		},
		{
			rule: {
				first_name: {
					required: true,
					pattern: 'name',
				},
				last_name: {
					required: true,
					pattern: 'name',
				},
				password: {
					required: true,
					check: 'password',
					// pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
				},
				confirmPassword: {
					required: true,
					confirmPassword: true,
				},
				email: {
					required: true,
					pattern: 'email',
				},
			},
			message: {
				email: {
					required: 'Email không được bỏ trống',
					pattern: 'Email không đúng định dạng',
				},
				password: {
					required: 'Mật khẩu không được bỏ trống',
					// pattern: 'Mật khẩu tối thiểu 8 ký tự, ít nhất một chữ cái và một số',
				},
				confirmPassword: {
					required: 'Mật khẩu không được bỏ trống',
					pattern: 'Nhập lại mật khẩu không đúng!',
				},
			},
		}
	);

	function handleRegister(e) {
		e.preventDefault();

		let inputerr = check();
		if (Object.keys(inputerr).length === 0) {
			dispatch(registerAction(form));
		}
	}

	return (
		<div className="col-12 col-md-6">
			{/* Card */}
			<div className="card card-lg">
				<div className="card-body">
					{/* Heading */}
					<h6 className="mb-7">New Customer</h6>
					{/* Form */}
					<form>
						<div className="row">
							<div className="col-12">
								{/* Email */}
								{registerErr && <p className="error-text">{registerErr}</p>}
								<div className="form-group">
									<label className="sr-only" htmlFor="registerFirstName">
										First Name *
									</label>
									<input
										className="form-control form-control-sm"
										name="first_name"
										type="text"
										placeholder="First Name *"
										onChange={inputChange}
									/>
									{error.first_name && <p className="error-text">{error.first_name}</p>}
								</div>
							</div>
							<div className="col-12">
								{/* Email */}
								<div className="form-group">
									<label className="sr-only" htmlFor="registerLastName">
										Last Name *
									</label>
									<input
										className="form-control form-control-sm"
										name="last_name"
										onChange={inputChange}
										type="text"
										placeholder="Last Name *"
									/>
									{error.last_name && <p className="error-text">{error.last_name}</p>}
								</div>
							</div>
							<div className="col-12">
								{/* Email */}
								<div className="form-group">
									<label className="sr-only" htmlFor="registerEmail">
										Email Address *
									</label>
									<input
										className="form-control form-control-sm"
										onChange={inputChange}
										name="email"
										type="email"
										placeholder="Email Address *"
									/>
									{error.email && <p className="error-text">{error.email}</p>}
								</div>
							</div>
							<div className="col-12 col-md-6">
								{/* Password */}
								<div className="form-group">
									<label className="sr-only" htmlFor="registerPassword">
										Password *
									</label>
									<input
										className="form-control form-control-sm"
										onChange={inputChange}
										name="password"
										type="text"
										placeholder="Password *"
									/>
									{error.password && <p className="error-text">{error.password}</p>}
								</div>
							</div>
							<div className="col-12 col-md-6">
								{/* Password */}
								<div className="form-group">
									<label className="sr-only" htmlFor="registerPasswordConfirm">
										Confirm Password *
									</label>
									<input
										className="form-control form-control-sm"
										onChange={inputChange}
										type="text"
										name="confirmPassword"
										placeholder="Confrm Password *"
									/>
									{error.confirmPassword && <p className="error-text">{error.confirmPassword}</p>}
								</div>
							</div>
							<div className="col-12 col-md-auto">
								{/* Link */}
								<div className="form-group font-size-sm text-muted">
									By registering your details, you agree with our Terms &amp; Conditions, and Privacy
									and Cookie Policy.
								</div>
							</div>
							<div className="col-12 col-md">
								{/* Newsletter */}
								<div className="form-group">
									<div className="custom-control custom-checkbox">
										<input
											className="custom-control-input"
											id="registerNewsletter"
											type="checkbox"
										/>
										<label className="custom-control-label" htmlFor="registerNewsletter">
											Sign me up for the Newsletter!
										</label>
									</div>
								</div>
							</div>
							<div className="col-12">
								{/* Button */}
								<button className="btn btn-sm btn-dark" type="submit" onClick={handleRegister}>
									Register
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
