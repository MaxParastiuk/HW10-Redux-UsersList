import React from "react";
import { TableCell, TableRow, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router";

function UserListItem({ item, deleteUser }) {
	const navigate = useNavigate();

	const goBack = () => navigate(-1);

	function deleteUserA(e) {
		e.stopPropagation();
		deleteUser(item.id);
	}
	return (
		<TableRow hover style={{ cursor: "pointer" }} onClick={goBack}>
			<TableCell component='th' scope='row'>
				{item.name}
			</TableCell>
			<TableCell>{item.surname}</TableCell>
			<TableCell>{item.phone}</TableCell>
			<TableCell align='right'>
				<IconButton aria-label='delete' onClick={(e) => deleteUserA(e)}>
					<DeleteIcon />
				</IconButton>
			</TableCell>
		</TableRow>
	);
}

export default UserListItem;
