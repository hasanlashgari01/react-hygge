import { ErrorMessage, Field, Form, Formik } from "formik";
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
                authContext.login(result.user, result.accessToken);
                // navigate("/");
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
                <Formik
                    validate={validate}
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(false);
                        handleSubmit(values);
                    }}>
                    {({ touched, errors, isSubmitting }) => (
                        <Form className="laptop:w-[496px] laptop:mx-auto mt-14 tablet:mt-16 bigDesktop:mt-[72px]">
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
                            <div>
                                <h5 className="form-text">Password</h5>
                                <Field
                                    type="password"
                                    name="password"
                                    className={`form-input w-full ${
                                        touched.password && errors.password ? "outline-red focus:outline-red" : ""
                                    }`}
                                />
                                <div
                                    className={`text-sm transition-all duration-300 ${
                                        !errors.password
                                            ? "-translate-y-full z-0 opacity-0"
                                            : "text-red translate-y-0 opacity-100"
                                    }`}>
                                    <ErrorMessage name="password"></ErrorMessage>
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
                                    value={isSubmitting ? "Loading..." : "Login"}
                                    className={`w-full bg-green-100 py-3 text-center rounded-full text-grey-light-100 font-bold ${
                                        isSubmitting ? "opacity-30 cursor-default" : "cursor-pointer"
                                    }`}
                                    disabled={isSubmitting}
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
                        </Form>
                    )}
                </Formik>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
