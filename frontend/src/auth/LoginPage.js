import React, { useState } from 'react'
import { Navigate, useLocation } from 'react-router';
import { useAuth } from "./use-auth";
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const auth = useAuth()
  const location = useLocation()
  const { from } = location.state || { from: { pathname: "/" } }
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  if (auth.user) {
    return <Navigate to={from} />;
  }

  const handleLogin = async () => {
    if (email === '' || password === '') {
      alert('Enter Email ans Password')
      return
    }
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      alert('Enter a Valid Email')
      return
    }
    auth.signin(email, password)
  }

  return (
    <div className=''>
      <div className='m-auto mt-24 py-10 p-0 sm:p-4 md:p-10 bg-indigo-200 w-64 sm:w-2/5 text-center rounded-xl'>
        <div className='inline-block p-3 text-3xl'>
          Login
        </div>
        <div className=''>
          <div>
            <input id="email" type={'email'} value={email} onChange={({ target: { value } }) => setEmail(value)} placeholder={'Email'} className={`ml-2 my-3 p-3 px-4 placeholder:text-base placeholder:font-medium placeholder:text-gray-800 rounded-lg text-base font-medium`} />
          </div>

          <div>
            <input type={showPassword ? 'text' : 'password'} value={password} onChange={({ target: { value } }) => setPassword(value)} placeholder={'Password'} className='-ml-2 my-3 p-3 px-4 placeholder:text-base placeholder:font-medium placeholder:text-gray-800 rounded-lg text-base font-medium' /><span className='inline-block -ml-9 -mb-1.5 cursor-pointer' onClick={() => setShowPassword(v => !v)}>
              {showPassword ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>}
            </span>
          </div>

        </div>
        <div className='text-sm m-4'>
          {"*Please enter email and password for login"}
        </div>
        <div>
          <button className='px-5 py-2 bg-blue-800 rounded-xl text-base font-medium text-white shadow-lg' onClick={handleLogin}>
            Login
          </button>

          <Link to='/register'>
            <button className='ml-2 p-1  border-indigo-800 text-indigo-800 text-sm font-medium'>
              or Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage