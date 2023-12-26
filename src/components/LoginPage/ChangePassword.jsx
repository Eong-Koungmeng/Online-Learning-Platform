import { Link } from 'react-router-dom';

export const Changepassword = () => {
    return (
        <form className = "login-style">
            <p className="border-button text-center p-5">Change Your Password</p>
            <label htmlFor="validationcode"></label>
            <input className="border-button mt-4 pl-[5px] mr-10 ml-10 outline-none"  type="password" id="validationcode" placeholder="Validation code"/>
            <label htmlFor="newpassword"></label>
            <input className="border-button mt-4 pl-[5px] mr-10 ml-10 outline-none"  type="password" id="newpassword" placeholder="New password"/>
            <label htmlFor="verifypassword"></label>
            <input className="border-button mt-4 pl-[5px] mr-10 ml-10 outline-none"  type="password" id="verifypassword" placeholder="Verify password"/>
            <button className="border-2 border-green-500 rounded-lg p-2 mr-7 ml-7 mt-7 hover:bg-green-300"> Change Password </button>
            <Link to="/login" className="text-green-600 font-bold mb-10 ml-32 hover:text-green-500">Return to Login Page</Link>
        </form>
    )
}