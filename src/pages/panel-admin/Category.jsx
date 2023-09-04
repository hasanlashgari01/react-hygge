import { useEffect, useState } from "react";
import useToken from "../../hooks/useToken";
import SwalModal from "../../util/SwalModal";
import { ToastContainer } from "react-toastify";
import { useFormik } from "formik";
import { firstLetterUpperCase } from "../../util/func";

function Category() {
    const [categories, setCategories] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [categoriesId, setCategoriesId] = useState([]);

    const token = useToken();

    useEffect(() => {
        getAllCategories();
    }, []);

    const form = useFormik({
        initialValues: {
            icon: "",
            title: "",
            shortName: "",
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
            if (values.shortName === "") {
                errors.shortName = "shortName is Required";
            } else if (values.shortName.length < 2) {
                errors.shortName = "shortName must be bigger than 2";
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
        formData.append("icon", values.icon);
        formData.append("title", values.title);
        formData.append("shortName", values.shortName);

        fetch("http://localhost:4000/api/categories", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        })
            .then(res => res.json())
            .then(result => {
                getAllCategories();
            });
    };

    const [setIsModal] = SwalModal();

    const getAllCategories = () => {
        fetch("http://localhost:4000/api/categories", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(res => res.json())
            .then(result => {
                setCategories(result);
            });
    };

    const deleteCategory = categoryId => {
        if (token) {
            fetch(`http://localhost:4000/api/categories/${categoryId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(res => res.json())
                .then(() => {
                    getAllCategories();
                });
        }
    };

    const changeHandler = () => {
        setIsChecked(!isChecked);
        const select = document.querySelectorAll("tbody input");

        select.forEach(s => {
            if (!isChecked) {
                s.checked = true;
            } else {
                s.checked = false;
            }
        });
    };

    const deleteMany = () => {
        if (categoriesId.length !== 0) {
            fetch("http://localhost:4000/api/categories/deleteMany", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ id: categoriesId }),
            })
                .then(res => res.json())
                .then(() => {
                    console.log("ok");
                    getAllCategories();
                });
        }
    };

    const removeCategory = categoryId => {
        setCategoriesId(prev => [...prev, categoryId]);
    };

    return (
        <>
            <ToastContainer />
            <form
                className="grid gap-10 grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 child:form-wrapper"
                onSubmit={form.handleSubmit}
                encType="multipart/form-data">
                <div>
                    <input
                        type="text"
                        name="title"
                        placeholder="Category Title"
                        value={form.values.title}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    />
                    {form.errors.title && form.touched.title && <span>{form.errors.title}</span>}
                </div>
                <div>
                    <input
                        type="text"
                        name="shortName"
                        placeholder="Category shortName"
                        value={form.values.shortName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    />
                    {form.errors.shortName && form.touched.shortName && <span>{form.errors.shortName}</span>}
                </div>
                <div>
                    <input
                        type="file"
                        name="icon"
                        id="icon"
                        accept="image/png, .svg, image/svg+xml"
                        onChange={e => {
                            if (e.currentTarget.files) {
                                form.setFieldValue("icon", e.currentTarget.files[0]);
                            }
                        }}
                    />
                </div>
                <div>
                    <input type="submit" value="Add Product" />
                </div>
            </form>
            <div className="flex flex-col">
                <button
                    className="self-end mb-4 py-2 px-4 bg-red/10 text-red rounded-lg disabled:bg-red/5 disabled:cursor-not-allowed"
                    onClick={() =>
                        categoriesId.length &&
                        setIsModal({
                            status: "pending",
                            cb: deleteMany,
                        })
                    }>
                    Delete Many
                </button>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="text-left px-4 py-2 w-2">
                                <input type="checkbox" className="checkbox-custom" onClick={changeHandler} />
                            </th>
                            <th className="w-40">Icon</th>
                            <th>Title</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {categories && (
                        <tbody>
                            {categories.map(category => (
                                <tr key={category._id}>
                                    <td className="px-4 py-2">
                                        <input
                                            type="checkbox"
                                            className="checkbox-custom"
                                            value={category._id}
                                            onChange={() => removeCategory(category._id)}
                                        />
                                    </td>
                                    <td className="w-4 h-4 overflow-hidden">
                                        <img
                                            src={`http://localhost:4000/api/categories/icon/${category.icon}`}
                                            alt=""
                                        />
                                    </td>
                                    <td>{firstLetterUpperCase(category.title)}</td>
                                    <td className="px-4 py-2">{category.shortName}</td>
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
                                                    id: category._id,
                                                    cb: deleteCategory,
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
            </div>
        </>
    );
}

export default Category;
