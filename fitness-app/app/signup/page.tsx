import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";

export default function Login() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="flex flex-col p-4 rounded space-y-2 w-1/2">
          <div className="text-center space-y-2 p-4">
            <h1 className="text-4xl font-bold">Welcome to FitnessWeb!</h1>
            <p className="text-xs">
              Sign up to connect with your perfect coach!
            </p>
          </div>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            className="w-full"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            fullWidth
          />
          <TextField
            id="outlined-password-input"
            label="Verify Password"
            type="password"
            autoComplete="current-password"
            fullWidth
          />

          <Button
            variant="contained"
            sx={{ width: "50%", margin: "auto", padding: "10px" }}
          >
            Login
          </Button>
          <hr className="border-gray-400 my-2" />
          <div className="flex items-center justify-center p-2 text-sm space-x-1">
            <p>Already have an account?</p>
            <Link href="/login" className="hover:underline text-sky-700">
              Log In
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-blue-200 w-1/2">
        <p className="text-center mt-8">Image</p>
      </div>
    </div>
  );
}
