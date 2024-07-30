import Link from "next/link";
import React from "react";

export default function SignUp() {
  return (
    <div>
      <h1>This is the main sign up page</h1>
      <Link href="/login">Click here to move back to login page</Link>
    </div>
  );
}
