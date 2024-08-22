import { useState } from "react";
import logo from "/logo.png";
import Button from "../../components/ui/Button";

const Auth = () => {
    let [login, setLogin] = useState(false);
    let [register, setRegister] = useState(false);

    let handelLoginClick = () => {

    }

    let handelRegisterClick = () => {

    }
    
    let authOptions = (
        <>
            <img src={logo} alt="" />

            <h2>
                Enjoy your Smuthi
            </h2>
            <div className="flex gap-8 justify-center items-center w-screen px-4">
                <Button onClick={handelRegisterClick}>
                    Register
                </Button>
                <Button>
                    Login
                </Button>
            </div>

        </>
    );

    return (
        <div className="flex justify-center items-center flex-col p-8 gap-8 h-screen w-screen bg-custom-gradient shadow-2xl">
            {!login && !register && authOptions}
        </div>
    );
}

export default Auth;
