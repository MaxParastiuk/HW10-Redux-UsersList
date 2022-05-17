import React from "react";
import { connect } from "react-redux";
import { deleteUser } from "../../store/actions/actions";
import UsersList from "./UsersList";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

function Users({ users = [], deleteUser }) {
	if (!Object.keys(users).length) return <LinearProgress />;
	return (
		<>
			<Typography
				sx={{ margin: 2 }}
				align='center'
				variant='h4'
				className={"title"}>
				Users
			</Typography>
			<UsersList users={users} deleteUser={deleteUser} />
		</>
	);
}

const mapStateToProps = (state) => {
	return { users: state.users };
};

const mapDispatchToProps = {
	deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
