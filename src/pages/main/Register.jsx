import { useFormik } from "formik";
import { ToastContainer } from "react-toastify";
import SmoothScrollLink from "../../components/SmoothScrollLink";
import SubTitle from "../../components/main/SubTitle";
import Title from "../../components/main/Title";
import Footer from "../../layouts/main/Footer";
import Header from "../../layouts/main/Header";
import toastCustom from "../../util/toast";

const validate = values => {
    const errors = {};

    if (!values.fullName) {
        errors.fullName = "Fullname is Required";
    } else if (values.fullName.length < 3 || values.fullName.length > 28) {
        errors.fullName = "Fullname must be bigger than 3 and less than 28";
    }

    if (!values.username) {
        errors.username = "Username is Required";
    } else if (values.username.length < 3 || values.username.length > 28) {
        errors.username = "Username must be bigger than 3 and less than 28";
    }

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

    if (!values.confirmPassword) {
        errors.confirmPassword = "Confirm Password is Required";
    } else if (values.confirmPassword.length <= 6 || values.confirmPassword.length >= 20) {
        errors.confirmPassword = "Password must be bigger than 6 and less than 20";
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Password is not the same";
    }

    return errors;
};

function Register() {
    const form = useFormik({
        initialValues: {
            fullName: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validate,
        onSubmit: (values, { setSubmitting }) => {
            setSubmitting(false);
            handleSubmit(values);
        },
    });

    const handleSubmit = values => {
        fetch("http://localhost:4000/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        }).then(res => {
            res.status == 400 && toastCustom("error", "Try another email or username");
            res.status == 201 && toastCustom("success", "Create account was successfully");
        });
    };

    return (
        <div>
            <ToastContainer />
            <Header />
            <div className="space-container">
                <div>
                    <SubTitle subtitle="- Sign Up" />
                    <Title title="Create Account" />
                </div>

                <form
                    className="laptop:w-[496px] laptop:mx-auto mt-14 tablet:mt-16 bigDesktop:mt-[72px]"
                    onSubmit={form.handleSubmit}>
                    <div className="child:form-wrapper">
                        <div>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="fullName"
                                value={form.values.fullName}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            />
                            {form.errors.fullName && form.touched.fullName && (
                                <span>{form.errors.fullName}</span>
                            )}
                        </div>
                        <div>
                            <input
                                type="text"
                                name="username"
                                placeholder="username"
                                value={form.values.username}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            />
                            {form.errors.username && form.touched.username && (
                                <span>{form.errors.username}</span>
                            )}
                        </div>
                        <div>
                            <input
                                type="text"
                                name="email"
                                placeholder="email"
                                value={form.values.email}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            />
                            {form.errors.email && form.touched.email && (
                                <span>{form.errors.email}</span>
                            )}
                        </div>
                        <div>
                            <input
                                type="text"
                                name="password"
                                placeholder="password"
                                value={form.values.password}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            />
                            {form.errors.password && form.touched.password && (
                                <span>{form.errors.password}</span>
                            )}
                        </div>
                        <div>
                            <input
                                type="text"
                                name="confirmPassword"
                                placeholder="confirmPassword"
                                value={form.values.confirmPassword}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                            />
                            {form.errors.confirmPassword && form.touched.confirmPassword && (
                                <span>{form.errors.confirmPassword}</span>
                            )}
                        </div>
                    </div>
                    <div>
                        <div className="bigDesktop:mt-6 w-full h-0.5 bg-grey-1 dark:bg-grey-2 rounded-2xl overflow-hidden">
                            <div className="w-1/5 h-full bg-green-100 transition-all duration-500"></div>
                        </div>
                        <span>Message</span>
                    </div>
                    <div className="mt-10 tablet:mt-12">
                        <input id="agree-terms" type="checkbox" className="w-4 h-4" />
                        <label
                            htmlFor="agree-terms"
                            className="ml-4 text-grey-dark-100 dark:text-grey-light-100 text-base font-normal select-none">
                            I have read and agree to{" "}
                            <SmoothScrollLink
                                to="#"
                                className="text-green-100 text-base font-semibold underline">
                                terms & conditions
                            </SmoothScrollLink>
                        </label>
                    </div>
                    <div className="flex flex-col tablet:flex-row gap-y-4 tablet:gap-x-6 mt-14 tablet:mt-12">
                        <input
                            type="submit"
                            value="Create account"
                            className="w-full bg-green-100 py-3 text-center rounded-full text-grey-light-100 font-bold cursor-pointer"
                        />
                        <SmoothScrollLink
                            to="/login"
                            className="w-full py-3 text-center rounded-full text-grey-dark-100 dark:text-grey-light-100 hover:bg-green-100 hover:text-white font-bold border-2 border-grey-1 transition-colors">
                            Login
                        </SmoothScrollLink>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Register;
