import {useState} from 'react'

function PasswordReset() {
    const[email, setEmail]= useState('')

    function handleSubmit(e){
        e.preventDefault()

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='Email' required onChange={(e)=>setEmail(e.target.value)}/>
                <button type='submit'>send code</button>
            </form>

        </div>
    )
}

export default PasswordReset
