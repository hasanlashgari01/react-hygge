import { useContext } from "react";
import AuthContext from "../../context/authContext";

function Profile() {
    const authContext = useContext(AuthContext);

    const formHandler = e => {
        e.preventDefault();
    };

    return (
        <div className="flex flex-col tablet:flex-row py-10">
            <div className="w-[287px] mx-10 pb-10">
                <div className="w-full h-[188px] bg-green-100 rounded-2xl"></div>
                <div className="hidden mt-14 w-full h-[188px] bg-green-10 rounded-2xl"></div>
            </div>

            <div className="flex-1 px-10 border-l dark:border-grey-dark-100 transition-custom">
                <h3 className="mb-10 text-2xl font-bold dark:text-white">Personal Informations</h3>
                <div className="flex gap-8">
                    <div className="w-16 h-16 laptop:w-[105px] laptop:h-[105px] rounded-full overflow-hidden">
                        <img
                            src="https://images.pexels.com/photos/2173872/pexels-photo-2173872.jpeg?auto=compress&cs=tinysrgb&w=600"
                            className="w-full h-full object-cover"
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-2xl font-bold dark:text-white">{authContext.userInfos.fullName}</h2>
                    </div>
                </div>
                <form className="flex flex-col mt-5 tablet:mt-9" onSubmit={formHandler}>
                    <input type="text" className="form-input" placeholder="First Name" name="" id="" />
                    <input type="text" className="form-input" placeholder="Email" name="" id="" />
                    <input type="text" className="form-input" placeholder="Phone number" name="" id="" />
                    <input type="submit" value="Update" className="form-input bg-green-100 text-white mt-8 tablet:mt-16" />
                </form>
            </div>
        </div>
    );
}

export default Profile;
