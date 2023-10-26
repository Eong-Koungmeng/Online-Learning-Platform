import { Link } from 'react-router-dom';

export const Registration = () => {
    return (
        <form class = "login-style">
            <p class="border-button text-center p-5">Sign Up</p>
            <label for="fname"></label>
            <input class="border-button mt-9 pl-[5px] mr-10 ml-10 outline-none" type="text" id="fname" placeholder="First Name"/>
            <label for="lname"></label>
            <input class="border-button mt-4 pl-[5px] mr-10 ml-10 outline-none" type="text" id="lname" placeholder="Last Name"/>
            <label for="email"></label>
            <input class="border-button mt-4 pl-[5px] mr-10 ml-10 outline-none"  type="email" id="email" placeholder="Youremailaddress@gmail.com"/>
            <label for="pwd"></label>
            <input class="border-button mt-4 pl-[5px] mr-10 ml-10 outline-none" type="password" id="pwd" placeholder="Password"/>
            <label for="confirmpwd"></label>
            <input class="border-button mt-4 pl-[5px] mr-10 ml-10 outline-none" type="password" id="confirmpwd" placeholder="Confirm Password"/>
            <div class="flex mt-6 justify-center">
                <p>Already login?</p>
                <Link to="/Login" class=" font-bold ml-1 hover:text-stone-400">Log In</Link>
            </div>
            <button class="border-2 border-black rounded-lg p-2 m-7 hover:bg-slate-300"> Sign Up </button>
        </form>
    )
}