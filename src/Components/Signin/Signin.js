import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

export default function SignIn() {
  const history = useHistory();
  const handleSubmit = () => {
    history.push("./listingPage");
  };
  //   const history = useHistory();
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const data = new FormData(event.currentTarget);

  // axios
  //   .post("http://127.0.0.1:8000/api/userlogin/", {
  //     username: data.get("username"),
  //     password: data.get("password"),
  //   })
  //   .then((res) => {
  //     if (res.data.username === "Manager") {
  //       history.push("/");
  //       return;
  //     }
  //     history.push("/employee");

  //     console.log(res);
  //   });
  //   };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="off"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="off"
          />

          <Button
            onClick={handleSubmit}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Typography variant="p">
            New user (<Link to="/signup">SignUp</Link>)
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
