import React from "react";
import UserListItem from "./UserListItem";
import { Link } from "react-router-dom";
import { Table } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Paper from "@mui/material/Paper";
import { IconButton, Container } from "@mui/material";

function UsersList({ users, deleteUser }) {
	return (
		<Container maxWidth='xl'>
			<TableContainer component={Paper}>
				<Table className={"table"} size='small' aria-label='a dense table'>
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell>Surname</TableCell>
							<TableCell>Phone</TableCell>
							<TableCell align='right'>Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{users.map((user) => (
							<UserListItem key={user.id} item={user} deleteUser={deleteUser} />
						))}
						<TableRow align='right'>
							<TableCell colSpan={5} align='right'>
								<Link to='/addUser'>
									<IconButton>
										<AddCircleIcon color='primary' />
									</IconButton>
								</Link>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	);
}

export default UsersList;
