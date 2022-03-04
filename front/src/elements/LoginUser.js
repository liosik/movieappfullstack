import React, {useRef} from 'react';

const LoginUser = ({setUser, user}) => {
    const pw1Ref = useRef()
    const usernameRef = useRef()


    async function registerUser() {
        const item = {

            username: usernameRef.current.value,
            pw1: pw1Ref.current.value,


        }

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(item)
        }


        const response = await fetch(`http://localhost:4000/login`, options)
        const data = await response.json()
        if (data.success) {
            alert("Success! You've Logged In")
            setUser(data.currentUser)
            console.log(data.currentUser)

        } else {
            alert(data.errorMessage)
        }

    }

    return (
        <div>
            <div className='d-flex column m-20 center'>

                <input ref={usernameRef} defaultValue="asdasd" type="text"/>
                <input defaultValue="asdasd" ref={pw1Ref} type="text"/>


                <button onClick={registerUser}>Add</button>

            </div>
        </div>
    );
};

export default LoginUser;