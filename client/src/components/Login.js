import React from "react";

export default function Login() {
  return (
    <form>
      <h1>Please Log In</h1>

      <div class="mb-3 mt-5">
        <label class="form-label">Email address</label>
        <input type="email" class="form-control" />
      </div>

      <div class="mb-3">
        <label class="form-label">Password</label>
        <input type="password" class="form-control" />
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
