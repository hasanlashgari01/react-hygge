import { useFormik } from "formik";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import SmoothScrollLink from "../../components/SmoothScrollLink";
import SubTitle from "../../components/main/SubTitle";
import Title from "../../components/main/Title";
import AuthContext from "../../context/authContext";
import Footer from "../../layouts/main/Footer";
import Header from "../../layouts/main/Header";
import toastCustom from "../../util/toast";

const validate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = "Email is Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }

    if (!values.password) {
        errors.password = "Password is Required";
    } else if (values.password.length <= 6 || values.password.length >= 20) {
        errors.password = "Password must be bigger than 6 and less than 20";
    }

    return errors;
};

function Login() {
    const authContext = useContext(AuthContext);

    const form = useFormik({
        initialValues: { email: "", password: "" },
        validate,
        onSubmit: (values, { setSubmitting }) => {
            setSubmitting(false);
            handleSubmit(values);
        },
    });

    const handleSubmit = values => {
        fetch("http://localhost:4000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        })
            .then(res => {
                if (!res.ok) {
                    return res.text().then(text => {
                        throw new Error(text);
                    });
                } else {
                    return res.json();
                }
            })
            .then(result => {
                toastCustom("success", "You're login was successfully");
                console.log(result);
                authContext.login(result.user, result.accessToken);
            })
            .catch(() => {
                toastCustom("error", "Email or password is wrong");
            });
    };

    return (
        <div>
            <ToastContainer />
            <Header />
            <div className="space-container">
                <div>
                    <SubTitle subtitle="- Login" />
                    <Title title="Login to Your Account" />
                </div>
                <form
                    className="laptop:w-[496px] laptop:mx-auto mt-14 tablet:mt-16 bigDesktop:mt-[72px]"
                    onSubmit={form.handleSubmit}>
                    <div className="child:form-wrapper">
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                value={form.values.email}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                className="mt-10"
                            />
                            {form.errors.email && form.touched.email && (
                                <span>{form.errors.email}</span>
                            )}
                        </div>
                        <div>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                value={form.values.password}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                className="mt-10"
                            />
                            {form.errors.password && form.touched.password && (
                                <span>{form.errors.password}</span>
                            )}
                        </div>
                    </div>

                    <div className="mt-10 tablet:mt-12">
                        <input id="agree-terms" type="checkbox" className="w-4 h-4 rounded-full" />
                        <label
                            htmlFor="agree-terms"
                            className="ml-4 text-grey-dark-100 dark:text-grey-light-100 laptop:text-xl/8  font-normal select-none">
                            Remember me
                        </label>
                    </div>

                    <div className="flex flex-col gap-y-3 mt-14 tablet:mt-12">
                        <input
                            type="submit"
                            value="Login"
                            className="w-full bg-green-100 py-3 text-center rounded-full text-grey-light-100 font-bold cursor-pointer"
                        />
                        <div className="flex flex-col tablet:flex-row gap-y-4 tablet:gap-x-6">
                            <SmoothScrollLink
                                to="/register"
                                className="flex-1 py-3 text-center rounded-full text-grey-dark-100 hover:bg-green-100 hover:text-white font-bold border-2 border-grey-1 transition-colors">
                                Create Account
                            </SmoothScrollLink>
                            <SmoothScrollLink
                                to="/login"
                                className="flex-1 py-3 text-center rounded-full text-grey-dark-100 hover:text-green-100 font-bold underline transition-colors">
                                Forget Password?
                            </SmoothScrollLink>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
