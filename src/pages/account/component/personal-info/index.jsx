import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFormValidate from '../../../../hook/useFormValidate';
import { updateInfoAction } from '../../../../redux/actions/authAction';

export function PersonalInfo() {
	let { data } = useSelector((state) => state.auth);

	let dispatch = useDispatch();

	let birthday = '';
	if (data.birthday === null) {
		birthday = '1/1/2000';
	} else {
		birthday = data.birthday;
	}
	let [day, month, year] = birthday.split('/'); //dung split de cat chuoi

	let [date, setDate] = useState({
		day: day,
		month: month,
		year: year,
	});

	let [isFormChange, setIsFormChange] = useState('');

	let formChange = {
		firstName: data.first_name,
		lastName: data.last_name,
	};

	let { form, check, error, inputChange } = useFormValidate(
		{
			confirm: '',
			first_name: '',
			last_name: '',
			confirmPassword: '',
			email: '',
			gender: 'male',
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
				confirm: {
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
				confirm: {
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

	function handleSelected(e) {
		let name = e.target.name;
		setDate({
			...date,
			[name]: e.target.value,
		});
	}

	function onSubmit(e) {
		e.preventDefault();

		let exclude = {};
		if (!form.password) {
			exclude = {
				email: true,
				password: true,
				confirm_password: true,
			};
		}

		let inputErr = check({ exclude });

		let sendBirthday = date.day + '/' + date.month + '/' + date.year;
		if (Object.keys(inputErr).length === 0) {
			if (formChange !== form.first_name || formChange !== form.last_name) {
				dispatch(
					updateInfoAction({
						...form,
						birthday: sendBirthday,
					})
				);
				setIsFormChange('');
			} else {
				setIsFormChange('Vui lòng thay đổi thông tin!');
			}
			console.log('form', form);
		}
	}

	let years = new Date().getFullYear();
	// console.log(day);
	// console.log(month);
	// console.log(year);

	return (
		<div className="col-12 col-md-9 col-lg-8 offset-lg-1">
			{/* Form */}
			<form>
				{isFormChange && <p className="error-text">{isFormChange}</p>}
				<div className="row">
					<div className="col-12 col-md-6">
						{/* Email */}
						<div className="form-group">
							<label htmlFor="accountFirstName">First Name *</label>
							<input
								className="form-control form-control-sm"
								name="first_name"
								onChange={inputChange}
								type="text"
								value={data?.first_name}
							/>
							{error.first_name && <p className="error-text">{error.first_name}</p>}
						</div>
					</div>
					<div className="col-12 col-md-6">
						{/* Email */}
						<div className="form-group">
							<label htmlFor="accountLastName">Last Name *</label>
							<input
								className="form-control form-control-sm"
								name="last_name"
								onChange={inputChange}
								type="text"
								value={data?.last_name}
							/>
							{error.last_name && <p className="error-text">{error.last_name}</p>}
						</div>
					</div>
					<div className="col-12">
						{/* Email */}
						<div className="form-group">
							<label htmlFor="accountEmail">Email Address *</label>
							<input
								className="form-control form-control-sm"
								name="email"
								onChange={inputChange}
								type="email"
								value={data?.email}
								readOnly="true"
							/>
						</div>
					</div>
					<div className="col-12 col-md-6">
						{/* Password */}
						<div className="form-group">
							<label htmlFor="accountPassword">Current Password *</label>
							<input
								className="form-control form-control-sm"
								name="confirm"
								onChange={inputChange}
								type="password"
								placeholder="Current Password *"
								value={data?.confirmPassword}
							/>
							{error.password && <p className="error-text">{error.password}</p>}
						</div>
					</div>
					<div className="col-12 col-md-6">
						{/* Password */}
						<div className="form-group">
							<label htmlFor="AccountNewPassword">New Password *</label>
							<input
								className="form-control form-control-sm"
								name="newPassword"
								onChange={inputChange}
								type="password"
								placeholder="New Password *"
							/>
							{error.confirm_password && <p className="error-text">{error.confirm_password}</p>}
						</div>
					</div>
					<div className="col-12 col-lg-6">
						{/* Birthday */}
						<div className="form-group">
							{/* Label */}
							<label>Date of Birth</label>
							{/* Inputs */}
							<div className="form-row">
								<div className="col-auto">
									{/* Date */}
									<label className="sr-only" htmlFor="accountDate">
										Date
									</label>
									<select
										id="accountDate"
										className="custom-select custom-select-sm"
										name="day"
										onChange={handleSelected}
										value={date.day}
									>
										{[...Array(31)].map((e, i) => (
											<option key={i}>{i + 1}</option>
										))}
									</select>
								</div>
								<div className="col">
									{/* Date */}
									<label className="sr-only" htmlFor="accountMonth">
										Month
									</label>
									<select
										id="accountMonth"
										className="custom-select custom-select-sm"
										name="month"
										onChange={handleSelected}
										value={date.month}
									>
										{[...Array(12)].map((e, i) => (
											<option key={i}>{i + 1}</option>
										))}
									</select>
								</div>
								<div className="col-auto">
									{/* Date */}
									<label className="sr-only" htmlFor="accountYear">
										Year
									</label>
									<select
										id="accountYear"
										className="custom-select custom-select-sm"
										name="year"
										onChange={handleSelected}
										value={date.year}
									>
										{[...Array(100)].map((e, i) => (
											<option key={years - i}>{years - i}</option>
										))}
									</select>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-6">
						{/* Gender */}
						<div className="form-group mb-8">
							<label>Gender</label>
							<div className="btn-group-toggle" data-toggle="buttons">
								<label className="btn btn-sm btn-outline-border active">
									<input
										type="radio"
										name="gender"
										value="male"
										defaultChecked={form.gender === 'male'}
										onClick={inputChange}
									/>{' '}
									Male
								</label>
								<label className="btn btn-sm btn-outline-border">
									<input
										type="radio"
										name="gender"
										value="female"
										defaultChecked={form.gender === 'female'}
										onClick={inputChange}
									/>{' '}
									Female
								</label>
							</div>
						</div>
					</div>
					<div className="col-12">
						{/* Button */}
						<button className="btn btn-dark" type="submit" onClick={onSubmit}>
							Save Changes
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}
