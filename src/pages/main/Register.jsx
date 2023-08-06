import { ErrorMessage, Field, Form, Formik } from "formik";
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
                <Formik
                    validate={validate}
                    initialValues={{ fullName: "", username: "", email: "", password: "", confirmPassword: "" }}
                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(false);
                        handleSubmit(values);
                    }}>
                    {({ touched, errors, isSubmitting }) => (
                        <Form className="laptop:w-[496px] laptop:mx-auto mt-14 tablet:mt-16 bigDesktop:mt-[72px]">
                            <div>
                                <div className="mb-5">
                                    <h5 className="form-text">Fullname</h5>
                                    <Field
                                        type="text"
                                        name="fullName"
                                        className={`form-input w-full ${
                                            touched.fullName && errors.fullName ? "outline-red focus:outline-red" : ""
                                        }`}
                                    />
                                    <div
                                        className={`text-sm transition-all duration-300
                                        ${
                                            !errors.fullName
                                                ? "-translate-y-full z-0 opacity-0"
                                                : "text-red translate-y-0 opacity-100"
                                        }`}>
                                        <ErrorMessage name="fullName" />
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <h5 className="form-text">Username</h5>
                                    <Field
                                        type="text"
                                        name="username"
                                        className={`form-input w-full ${
                                            touched.username && errors.username ? "outline-red focus:outline-red" : ""
                                        }`}
                                    />
                                    <div
                                        className={`text-sm transition-all duration-300
                                        ${
                                            !errors.username
                                                ? "-translate-y-full z-0 opacity-0"
                                                : "text-red translate-y-0 opacity-100"
                                        }`}>
                                        <ErrorMessage name="username" />
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <h5 className="form-text">Email Address</h5>
                                    <Field
                                        type="email"
                                        name="email"
                                        className={`form-input w-full ${
                                            touched.email && errors.email ? "outline-red focus:outline-red" : ""
                                        }`}
                                    />
                                    <div
                                        className={`text-sm transition-all duration-300
                                        ${
                                            !errors.email
                                                ? "-translate-y-full z-0 opacity-0"
                                                : "text-red translate-y-0 opacity-100"
                                        }`}>
                                        <ErrorMessage name="email" />
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <h5 className="form-text">Password</h5>
                                    <Field
                                        type="password"
                                        name="password"
                                        className={`form-input w-full ${
                                            touched.password && errors.password ? "outline-red focus:outline-red" : ""
                                        }`}
                                    />
                                    <div
                                        className={`text-sm transition-all duration-300
                                        ${
                                            !errors.password
                                                ? "-translate-y-full z-0 opacity-0"
                                                : "text-red translate-y-0 opacity-100"
                                        }`}>
                                        <ErrorMessage name="password" />
                                    </div>
                                </div>
                                <div className="">
                                    <h5 className="form-text">Confirm Passowrd</h5>
                                    <Field
                                        type="password"
                                        name="confirmPassword"
                                        className={`form-input w-full ${
                                            touched.confirmPassword && errors.confirmPassword
                                                ? "outline-red focus:outline-red"
                                                : ""
                                        }`}
                                    />
                                    <div
                                        className={`text-sm transition-all duration-300
                                        ${
                                            !errors.confirmPassword
                                                ? "-translate-y-full z-0 opacity-0"
                                                : "text-red translate-y-0 opacity-100"
                                        }`}>
                                        <ErrorMessage name="confirmPassword" />
                                    </div>
                                </div>

                                <div className="mt-4 bigDesktop:mt-6 w-full h-0.5 bg-grey-1 dark:bg-grey-2 rounded-2xl overflow-hidden">
                                    <div className="w-1/5 h-full bg-green-100 transition-all duration-500"></div>
                                </div>
                            </div>
                            <div className="mt-10 tablet:mt-12">
                                <input id="agree-terms" type="checkbox" className="w-4 h-4 rounded-full" />
                                <label
                                    htmlFor="agree-terms"
                                    className="ml-4 text-grey-dark-100 dark:text-grey-light-100 laptop:text-xl/8  font-normal select-none">
                                    I have read and agree to{" "}
                                    <SmoothScrollLink to="#" className=" laptop:text-xl/8 font-semibold underline">
                                        terms & conditions
                                    </SmoothScrollLink>
                                </label>
                            </div>
                            <div className="flex flex-col tablet:flex-row gap-y-4 tablet:gap-x-6 mt-14 tablet:mt-12">
                                <input
                                    type="submit"
                                    value={isSubmitting ? "Loading..." : "Create account"}
                                    className={`w-full bg-green-100 py-3 text-center rounded-full text-grey-light-100 font-bold ${
                                        isSubmitting ? "opacity-30 cursor-default" : "cursor-pointer"
                                    }`}
                                    disabled={isSubmitting}
                                />
                                <SmoothScrollLink
                                    to="/login"
                                    className="flex-1 py-3 text-center rounded-full text-grey-dark-100 dark:text-grey-light-100 hover:bg-green-100 hover:text-white font-bold border-2 border-grey-1 transition-colors">
                                    Login
                                </SmoothScrollLink>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <Footer />
        </div>
    );
}

export default Register;
