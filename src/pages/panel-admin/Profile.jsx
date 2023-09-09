import { useContext, useState } from "react";
import AuthContext from "../../context/authContext";
import useToken from "../../hooks/useToken";
import toastCustom from "../../util/toast";
import { ToastContainer } from "react-toastify";

function Profile() {
    const authContext = useContext(AuthContext);

    const token = useToken();

    const [fullName, setFullName] = useState(authContext.userInfos.fullName);
    const [email, setEmail] = useState(authContext.userInfos.email);
    const [phone, setPhone] = useState(authContext.userInfos.phone);

    const formHandler = e => {
        e.preventDefault();

        const data = {
            fullName,
            email,
            phone,
        };

        fetch("http://localhost:4000/api/users/profile", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        }).then(res => {
            if (res.status == 200) {
                toastCustom("success", "Profile updated successfully");
            } else if (res.status == 404) {
                toastCustom("error", "User not found");
            } else {
                toastCustom("error", "Profile update failed");
            }
        });
    };

    const imageUploadHandler = e => {
        e.preventDefault();
    };

    return (
        <>
            <ToastContainer />
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
                                src={`http://localhost:4000/api/admins/avatar/${authContext.userInfos.image}`}
                                className="w-full h-full object-cover"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col justify-evenly">
                            <h2 className="text-2xl font-bold dark:text-white">{authContext.userInfos.fullName}</h2>
                            <form onSubmit={imageUploadHandler}>
                                <input type="file" name="avatar" id="avatar" />
                                <input type="submit" value="Upload" className="bg-green-100 py-2 px-6 rounded-md" />
                            </form>
                        </div>
                    </div>
                    <form
                        className="flex flex-col gap-y-2 laptop:w-1/2 mt-5 tablet:mt-9 child:form-wrapper"
                        onSubmit={formHandler}>
                        <div>
                            <input
                                type="text"
                                className="form-input"
                                placeholder="First Name"
                                value={fullName}
                                onChange={e => setFullName(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                className="form-input"
                                placeholder="Email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                className="form-input"
                                placeholder="Phone number"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                            />
                        </div>
                        <div>
                            <input type="submit" value="Update" className="bg-green-100 text-white mt-8" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Profile;
