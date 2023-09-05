import { useEffect, useState } from "react";
import useToken from "../../hooks/useToken";
import { firstLetterUpperCase } from "../../util/func";
import { useFormik } from "formik";
import SwalModal from "../../util/SwalModal";

function Blog() {
    const token = useToken();

    const [blogs, setBlogs] = useState([]);

    const [setIsModal] = SwalModal();

    useEffect(() => {
        getAllBlogs();
    }, []);

    const getAllBlogs = () => {
        fetch("http://localhost:4000/api/blogs", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(res => res.json())
            .then(result => {
                setBlogs(result);
            });
    };

    const form = useFormik({
        initialValues: {
            image: "",
            title: "",
            tip: "",
        },
        validate: values => {
            const errors = {};
            // Title Validation
            if (values.title === "") {
                errors.title = "Title is Required";
            } else if (values.title.length < 2) {
                errors.title = "Title must be bigger than 2";
            }
            // Description Validation
            if (values.tip === "") {
                errors.tip = "Tip is Required";
            } else if (values.tip.length < 2) {
                errors.tip = "Tip must be bigger than 2";
            }

            return errors;
        },
        onSubmit: (values, { setSubmitting }) => {
            setSubmitting(false);
            handleSubmit(values);
        },
    });

    const handleSubmit = values => {
        const formData = new FormData();
        formData.append("image", values.image);
        formData.append("title", values.title);
        formData.append("tip", values.tip);

        fetch("http://localhost:4000/api/blogs", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        })
            .then(res => res.json())
            .then(result => {
                getAllBlogs();
            });
    };

    const deleteBlog = blogId => {
        if (token) {
            fetch(`http://localhost:4000/api/blogs/${blogId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(res => res.json())
                .then(() => {
                    getAllBlogs();
                });
        }
    };

    return (
        <>
            <form
                className="grid gap-10 grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 child:form-wrapper"
                onSubmit={form.handleSubmit}
                encType="multipart/form-data">
                <div>
                    <input
                        type="text"
                        name="title"
                        placeholder="Blog Title"
                        value={form.values.title}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    />
                    {form.errors.title && form.touched.title && <span>{form.errors.title}</span>}
                </div>
                <div>
                    <input
                        type="text"
                        name="tip"
                        placeholder="Blog Tip"
                        value={form.values.tip}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    />
                    {form.errors.tip && form.touched.tip && <span>{form.errors.tip}</span>}
                </div>
                <div>
                    <input
                        type="file"
                        name="icon"
                        id="icon"
                        accept="image/png, .svg, image/svg+xml"
                        onChange={e => {
                            if (e.currentTarget.files) {
                                form.setFieldValue("image", e.currentTarget.files[0]);
                            }
                        }}
                    />
                </div>
                <div>
                    <input type="submit" value="Add Product" />
                </div>
            </form>
            <table className="table">
                <thead>
                    <tr>
                        <th className="text-left px-4 py-2 w-2">
                            <input type="checkbox" className="checkbox-custom" />
                        </th>
                        <th className="w-40">Image</th>
                        <th>Title</th>
                        <th>Tip</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {blogs && (
                    <tbody>
                        {blogs.map(blog => (
                            <tr key={blog._id}>
                                <td className="px-4 py-2">
                                    <input type="checkbox" className="checkbox-custom" value={blog._id} />
                                </td>
                                <td className="h-16 overflow-hidden">
                                    <img
                                        src={`http://localhost:4000/api/blogs/image/${blog.image}`}
                                        alt=""
                                        className="h-full object-cover"
                                    />
                                </td>
                                <td>{blog.title}</td>
                                <td className="px-4 py-2">{firstLetterUpperCase(blog.tip)}</td>
                                <td className="flex gap-x-5 px-4 py-2">
                                    <span className="p-1 bg-blue-100/10 text-blue-100 rounded-md laptop:cursor-pointer">
                                        <svg className="w-6 h-6">
                                            <use href="#pencil-square"></use>
                                        </svg>
                                    </span>
                                    <span
                                        className="p-1 bg-red/10 text-red rounded-md laptop:cursor-pointer"
                                        onClick={() =>
                                            setIsModal({
                                                status: "pending",
                                                id: blog._id,
                                                cb: deleteBlog,
                                            })
                                        }>
                                        <svg className="w-6 h-6">
                                            <use href="#trash"></use>
                                        </svg>
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                )}
            </table>
        </>
    );
}

export default Blog;
