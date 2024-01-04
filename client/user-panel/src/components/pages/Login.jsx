import { Button} from "@/components/ui"
import Input from "@/components/ui/FormControls/Input"
import {useState } from "react"
import { NavLink } from "react-router-dom"



const Login = () => {
    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: '',
    })

    const [loginFormInvalid, setLoginFormInvalid] = useState({
        email: false,
        password: false,
    })

    const [registerFormData, setRegisterFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })

    const [registerFromInvalid, setRegisterFormInvalid] = useState({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
    })

    const loginInputChangeHandler = (event) => {
        const { name, value } = event.target;
        setLoginFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })

        setLoginFormInvalid(prev => {
            return {
                ...prev,
                [name]: value.length == 0
            }
        })
    }

    const loginInputBlurHandler = (event) => {
        const { name, value } = event.target;
        console.log(loginFormInvalid)
        setLoginFormInvalid(prev => {
            return {
                ...prev,
                [name]: value.length == 0
            }
        })
    }

    const registerInputChangeHandler = (event) => {
        const { name, value } = event.target;
        setRegisterFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })

        setRegisterFormInvalid(prev => {
            return {
                ...prev,
                [name]: value.length == 0
            }
        })
    }

    const registerInputBlurHandler = (event) => {
        const { name, value } = event.target;
      
        setRegisterFormInvalid(prev => {
            return {
                ...prev,
                [name]: value.length == 0
            }
        })
    }

    return (
        <div className="pageContent py-4 flex max-sm:flex-col justify-between">
            <div className="login flex flex-col items-center w-1/2 max-sm:w-full px-20 max-md:px-8 max-sm:px-2">
                <h1 className="uppercase font-bold text-base my-4">Login</h1>
                <form className="w-full">
                    <div>
                        <Input type={"email"} name={"email"} id={"email"} label={"Email Address"} required onChange={loginInputChangeHandler} value={loginFormData.email} onBlur={loginInputBlurHandler} invalid={loginFormInvalid.email} invalidMessage={"Please enter your email address"} />
                    </div>

                    <div className="mt-2">
                        <Input className={"mt-4"} type={"password"} name={"password"} id={"password"} label={"Password"} required onChange={loginInputChangeHandler} value={loginFormData.password} onBlur={loginInputBlurHandler} invalid={loginFormInvalid.password} invalidMessage={"Please enter password"} />
                    </div>

                    <Button dark buttonClass={"my-8"}>Login</Button>

                    <p className="my-2 text-sm">HAVE YOU FORGOTTEN YOUR PASSWORD?</p>
                    <NavLink className={"underline text-sm"} to={'#'}>CLICK HERE TO RESET</NavLink>
                </form>
            </div>

            <div className="register flex flex-col items-center w-1/2 max-sm:w-full px-20 max-md:px-8 max-sm:px-2 max-sm:pt-8">
                <h1 className="uppercase font-bold text-base my-4">Register</h1>

                <form className="w-full">
                    <div>
                        <Input type={"text"} name={"firstName"} id={"firstName"} label={"First Name"} required onChange={registerInputChangeHandler} value={registerFormData.firstName} onBlur={registerInputBlurHandler} invalid={registerFromInvalid.firstName} invalidMessage={"Please enter your first name"} />
                    </div>

                    <div className="mt-2">
                        <Input className={"mt-4"} type={"text"} name={"lastName"} id={"lastName"} label={"Last Name"} required onChange={registerInputChangeHandler} value={registerFormData.lastName} onBlur={registerInputBlurHandler} invalid={registerFromInvalid.lastName} invalidMessage={"Please enter your last name"} />
                    </div>

                    <div className="mt-2">
                        <Input className={"mt-4"} type={"email"} name={"regEmail"} id={"regEmail"} label={"Email Address"} required onChange={registerInputChangeHandler} value={registerFormData.email} onBlur={registerInputBlurHandler} invalid={registerFromInvalid.email} invalidMessage={"Please enter valid email"} />
                    </div>

                    <div className="mt-2">
                        <Input className={"mt-4"} type={"password"} name={"regPassword"} id={"regPassword"} label={"Password"} required onChange={registerInputChangeHandler} value={registerFormData.password} onBlur={registerInputBlurHandler} invalid={registerFromInvalid.password} invalidMessage={"Please enter password"} />
                    </div>

                    <Button dark buttonClass={"my-8"}>Register</Button>
                    
                </form>
            </div>
        </div>
    )
}

export default Login