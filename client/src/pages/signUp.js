import React from 'react'

function SignUp() {
  return (
    <>
      <div class="login-wrap">
	<div class="login-html">
		{/* <input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">Sign In</label> */}
		<input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab">Sign Up</label>
		<div class="login-form">
			<div class="sign-up-htm">
				<div class="group">
					<label for="user" class="label">Username</label>
					<input id="user" type="text" class="input"/>
				</div>
				<div class="group">
					<label for="pass" class="label">Password</label>
					<input id="pass" type="password" class="input" data-type="password"/>
				</div>
				<div class="group">
					<label for="pass" class="label">Repeat Password</label>
					<input id="pass" type="password" class="input" data-type="password"/>
				</div>
				<div class="group">
					<label for="pass" class="label">Email Address</label>
					<input id="pass" type="text" class="input"/>
				</div>
				<div class="group">
					<input type="submit" class="button" value="Sign Up"/>
				</div>
				<div class="hr"></div>
				<div class="foot-lnk">
				</div>
			</div>
		</div>
	</div>
</div>
    </>
  )
}

export default SignUp