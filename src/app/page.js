import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <div>
      <div>This is the index of login page</div>
      <Link href="/sign_up">Click here to sign up</Link>
    </div>
  );
}
