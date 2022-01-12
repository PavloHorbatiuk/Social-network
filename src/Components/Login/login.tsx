import React from "react";








type loginType = {

}


export const LoginPage = () => {

    return (
        <div>
            <h1>Login</h1>
            <form>
                <div>
                    <input placeholder={"login"} />
                </div>
                <div>
                    <input placeholder={"Pasword"} />
                </div>
                <div> <input type={"checkbox"} />
                    <div>
                        remember me
                    </div>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}