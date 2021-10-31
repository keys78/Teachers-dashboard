import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addStudent } from '../../redux/classListSlice';
import { countries, genderList, months } from '../../GlobalData'
import { TextField, Box, Button, Grid, CssBaseline } from '@material-ui/core';
import { Autocomplete, Alert, Snackbar } from '@mui/material';
import MuiButton from '../MuiButton';
import { Save, Close } from '@material-ui/icons'
import useStyles from './Styles';
import GuardianInfo from './GuardianInfo';
import ExamScores from './ExamScores';


const AddNewStudent = ({ toggleAddStudentModal, showAddStudentModal }) => {
	const classes = useStyles();
	const [success, setSuccess] = useState(false)
	const [swap, setSwap] = useState(false);
	const [swap2, setSwap2] = useState(false);
	const [swap3, setSwap3] = useState(false);

	const swapPage = () => {
		setSwap(!swap)
	}
	const swapPage2 = () => {
		setSwap2(!swap2)
	}
	const swapPage3 = () => {
		setSwap3(!swap3)
	}


	const [exams, setExams] = useState(
		[{},{},{},{},{},{},{}]
	)


	const [newStudent, setNewStudent] = useState(
		{
			firstName: "", middleName: "", lastName: "",
			age: "", gender: "", country: "",
			avatar: 'https://image.flaticon.com/icons/png/512/194/194938.png',
			guardianInfo: {
				relationship: '',
				title: '',
				name: '',
				phone: '',
				email: '',
				residence: '',
				occupation: '',
				workMobile: '',
				workAddress: ''

			},

			months,
			exams:exams
		}
	)


	function handleChange(evt) {
		const value = evt.target.value;
		setNewStudent({
			...newStudent,
			[evt.target.name]: value,
		});

	}
	function handleChange2(evt) {
		const value = evt.target.value;
		setNewStudent({
			...newStudent,
			guardianInfo: {
				...newStudent.guardianInfo,
				[evt.target.name]: value,
			}

		});

	}

	const handleScore = (e, index) => {
		const { name, value } = e.target;

		const item = [...exams];
		item[index][name] = value;
		setExams(item)
	}

	const handleAddInput = () => {
		// setExams([...newExams,{ subject: '', score: '' }]);
		const item = [...exams];
		item.push({subject: '',  score: ''});
		setExams(item)
	}

	const handleRemoveInput = (index) => {
		const item = [...exams]
		item.splice(index, 1);
		setExams(item)
	}


	const dispatch = useDispatch();
	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(
			addStudent({
				...newStudent,
			}),
			setSuccess(true),
			setTimeout(function () {
				setSuccess(false)
			}, 3000),
		);
		toggleAddStudentModal();
	};


	return (
		showAddStudentModal &&
		<StudentForm onSubmit={onSubmit}>

			<CssBaseline />
			<MuiButton onClick={toggleAddStudentModal} startIcon={<Close />} />

			{!swap && <div className="inputs-holder">

				{success && <Alert className={classes.alert} variant="filled" severity="success" >Student Added To List</Alert>}

				<TextField value={newStudent.firstName} onChange={handleChange} variant="outlined" label="First Name" name="firstName" fullWidth className={classes.inputField} />
				<TextField value={newStudent.middleName} onChange={handleChange} variant="outlined" label="Middle Name" name="middleName" fullWidth className={classes.inputField} />
				<TextField value={newStudent.lastName} onChange={handleChange} variant="outlined" label="Last Name" name="lastName" fullWidth className={classes.inputField} />
				<TextField value={newStudent.age} onChange={handleChange} variant="outlined" label="Age" name="age" fullWidth className={classes.inputField} />


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
			}

		

			{swap && !swap2 && <GuardianInfo handleChange2={handleChange2}
				guardianRelationship={newStudent.guardianInfo.relationship}
				guardianTitle={newStudent.guardianInfo.title}
				guardianName={newStudent.guardianInfo.name}
				guardianPhoneNumber={newStudent.guardianInfo.phone}
				guardianEmail={newStudent.guardianInfo.email}
				guardianResidence={newStudent.guardianInfo.residence}
				guardianOccupation={newStudent.guardianInfo.occupation}
				guardianWorkMobile={newStudent.guardianInfo.workMobile}
				guardianWorkAddress={newStudent.guardianInfo.workAddress}
				usedStyle={classes.inputField}

			/>

			}

			{swap && !swap3 && <ExamScores exams={exams} handleAddInput={handleAddInput} handleRemoveInput={handleRemoveInput}
			handleScore={handleScore}/>}

			{!swap && <p onClick={swapPage}>swap</p>}
			{!swap2 && <p onClick={swapPage2}>swap2</p>}
			{swap && swap2 && !swap3 && <p onClick={swapPage3}>swap3</p>}

			<MuiButton type="submit" text="SAVE" startIcon={<Save />} variant="contained" color="primary" />



			<pre>
				{/* {JSON.stringify(newStudent, null, 2)} */}
			</pre>
		</StudentForm>



	);
};

const StudentForm = styled.form`
    background:var(--tertiary);
    position: absolute;
    top:64px;
    right:0;
    width: calc(100vw - 220px);
    height: calc(100vh - 64px);
    padding-left: 33px;
    padding-right: 136px;
`

export default AddNewStudent;
