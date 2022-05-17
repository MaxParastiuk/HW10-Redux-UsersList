import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { saveUser } from "../../store/actions/actions";
import { useParams } from "react-router-dom";
import { Container, TextField, Button, LinearProgress } from "@mui/material";

function Form({ users, saveUser }) {
	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	const { id } = useParams();
	const userEditingData = users.find((user) => user.id === id);
	const [userData, setUserData] = useState(
		userEditingData || {
			name: "",
			surname: "",
			phone: "",
		}
	);
	const onInputChange = (e) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};
	const submitForm = (e) => {
		e.preventDefault();
		saveUser(userData);
		goBack();
	};
	if (!Object.keys(users).length) return <LinearProgress />;
	return (
		<Container maxWidth='sm'>
			<form className={"form"} noValidate autoComplete='off'>
				<TextField
					className={"form_item"}
					fullWidth
					label='Name'
					name='name'
					variant='outlined'
					defaultValue={userData.name}
					onChange={onInputChange}
				/>
				<TextField
					className={"form_item"}
					fullWidth
					label='Surname'
					name='surname'
					variant='outlined'
					type='tel'
					defaultValue={userData.surname}
					onChange={onInputChange}
				/>
				<TextField
					className={"form_item"}
					fullWidth
					label='Phone'
					name='phone'
					variant='outlined'
					type='tel'
					defaultValue={userData.phone}
					onChange={onInputChange}
				/>
				<div className={"form_item_button"}>
					<Button variant='contained' color='secondary' onClick={goBack}>
						Cancel
					</Button>
					<Button variant='contained' color='primary' onClick={submitForm}>
						Save
					</Button>
				</div>
			</form>
		</Container>
	);
}
const mapStateToProps = (state) => {
	return { users: state.users };
};

const mapDispatchToProps = {
	saveUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
