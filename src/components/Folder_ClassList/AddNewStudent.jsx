import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../../redux/classListSlice';
import { countries, genderList } from '../../GlobalData'
import { TextField, Box, Button, Grid, CssBaseline } from '@material-ui/core';
import Autocomplete from '@mui/material/Autocomplete';
import { Save } from '@material-ui/icons'
import useStyles from './Styles';



const AddNewStudent = () => {
	const classes = useStyles();

	const [newStudent, setNewStudent] = useState({
		firstName: "", middleName: "", lastName: "",
		age: "", gender: "", country: "",
	})

	function handleChange(evt) {
		const value = evt.target.value;
		setNewStudent({
			...newStudent,
			[evt.target.id]: value
		});
	}

	function resetForm() {
		setNewStudent({
			firstName: "", middleName: "", lastName: "",
			age: "", gender: "", country: ""
		})
	}


	const dispatch = useDispatch();

	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(
			addStudent({
				...newStudent
			})
		);
		resetForm();
	};

	return (
		<form onSubmit={onSubmit}>
			<CssBaseline />
			<div className="inputs-holder">

				<TextField value={newStudent.firstName} onChange={handleChange} variant="outlined" label="First Name" id="firstName" fullWidth className={classes.inputField} />
				<TextField value={newStudent.middleName} onChange={handleChange} variant="outlined" label="Middle Name" id="middleName" fullWidth className={classes.inputField} />
				<TextField value={newStudent.lastName} onChange={handleChange} variant="outlined" label="Last Name" id="lastName" fullWidth className={classes.inputField} />
				<TextField value={newStudent.age} onChange={handleChange} variant="outlined" label="Age" id="age" fullWidth className={classes.inputField} />

				<Autocomplete
					options={genderList} id="combo-box-demo"
					onChange={(event, value) => (newStudent.gender = value.label)}
					renderInput={params => (
						<TextField {...params} label="Select Gender" variant="outlined" fullWidth />
					)}
				/>


				<Autocomplete
					id="country-select-demo"
					sx={{ width: 'auto' }}
					options={countries}
					autoHighlight
					onChange={(event, value) => (newStudent.country = value.label)}
					getOptionLabel={(option) => option.label}
					renderOption={(props, option) => (
						<Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
							<img loading="lazy" width="20" src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`} srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`} alt=""
							/>
							&nbsp; {option.label}  ({option.code})
						</Box>
					)}
					renderInput={(params) => (
						<TextField
							variant="outlined"
							{...params}
							label="Choose a country"
							inputProps={{
								...params.inputProps,
								autoComplete: 'new-password', // disable autocomplete and autofill
							}}
						/>
					)}
				/>
			</div>


			<Button type="submit" className={classes.submit_btn} startIcon={<Save />} color="primary" variant="contained">SAVE</Button>
		</form>
	);
};

export default AddNewStudent;
