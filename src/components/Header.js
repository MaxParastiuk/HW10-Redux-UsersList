import { AppBar, Toolbar, Button } from "@mui/material";
import { useNavigate } from "react-router";
import "./Header.css";

export default function Header() {
	const navigate = useNavigate();

	return (
		<div>
			<AppBar sx={{ backgroundColor: "#d2d2d2" }} position='static'>
				<Toolbar sx={{ display: "flex", justifyContent: "center" }}>
					<Button
						sx={{ marginRight: 2 }}
						variant='contained'
						onClick={() => navigate("/users")}>
						Users
					</Button>
					<Button
						sx={{ marginRight: 2 }}
						variant='contained'
						onClick={() => navigate("/addUser")}>
						Add User
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
