import React, {useRef, useState} from 'react';

const RegisterUser = () => {
    const pw1Ref = useRef()
    const pw2Ref = useRef()
    const usernameRef = useRef()



    async function registerUser() {
        const item = {

            username: usernameRef.current.value,
            pw1: pw1Ref.current.value,
            pw2: pw2Ref.current.value

        }

        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(item)
        }


        const response = await fetch(`http://localhost:4000/register`, options)
        const data = await response.json()
        if (data.success) {
            alert("Success! You've Added a User")
        } else {
            alert(data.errorMessage)
        }

    }

    return (
        <div className='d-flex column m-20 center'>

            <input ref={usernameRef} defaultValue="asdasd" type="text"/>
            <input defaultValue="asdasd" ref={pw1Ref} type="text"/>
            <input defaultValue="asdasd" ref={pw2Ref} type="text"/>


            <button onClick={registerUser}>Add</button>

        </div>
    );
};

export default RegisterUser;