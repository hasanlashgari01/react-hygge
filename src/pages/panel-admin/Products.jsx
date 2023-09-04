import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";
import ErrorMessage from "../../components/ErrorMessage";
import SwalModal from "../../util/SwalModal";
import toastCustom from "../../util/toast";
import useToken from "../../hooks/useToken";

function Products() {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const [setIsModal] = SwalModal();
    const token = useToken();
    const form = useFormik({
        initialValues: {
            image: "product",
            title: "",
            description: "",
            priceOriginal: "",
            ability: "",
            category: "",
            image: "",
        },
        validate: values => {
            const errors = {};
            // Title Validation
            values.title === "" && (errors.title = "Title is Required");
            // Description Validation
            if (values.description === "") {
                errors.description = "Description is Required";
            } else if (values.description.length < 20) {
                errors.description = "Description must be bigger than 20";
            }
            // Price Original Validation
            values.priceOriginal == "" && (errors.priceOriginal = "Price is Required");
            // Ability Validation
            values.ability === "" && (errors.ability = "Ability is Required");

            return errors;
        },
        onSubmit: (values, { setSubmitting }) => {
            setSubmitting(false);
            handleSubmit(values);
        },
    });

    const getAllProducts = () => {
        if (token) {
            fetch("http://localhost:4000/api/products", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(res => res.json())
                .then(result => {
                    if (result.statusCode === 401) {
                        navigate("/");
                    } else {
                        setProducts(result);
                    }
                });
        }
    };

    const getAllCategories = () => {
        if (token) {
            fetch("http://localhost:4000/api/categories", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(res => res.json())
                .then(result => {
                    setCategories(result);
                });
        }
    };

    const handleSubmit = values => {
        console.log(values);
        fetch("http://localhost:4000/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(values),
        })
            .then(res => res.json())
            .then(() => {
                getAllProducts();
                toastCustom("success", "Product Created");
            })
            .catch(() => {
                toastCustom("error", "Email or password is wrong");
            });
    };

    const deleteProduct = productId => {
        if (token) {
            fetch(`http://localhost:4000/api/products/${productId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(res => res.json())
                .then(result => {
                    getAllProducts();
                });
        }
    };

    useEffect(() => {
        getAllCategories();
        getAllProducts();
    }, []);

    return (
        <>
            <ToastContainer />
            <form
                className="grid gap-5 grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 child:form-wrapper"
                onSubmit={form.handleSubmit}
                encType="multipart/form-data">
                <div>
                    <input
                        type="text"
                        name="title"
                        placeholder="Product Title"
                        value={form.values.title}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    />
                    {form.errors.title && form.touched.title && <span>{form.errors.title}</span>}
                </div>
                <div>
                    <input
                        type="text"
                        name="description"
                        placeholder="Product Description"
                        value={form.values.description}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    />
                    {form.errors.description && form.touched.description && (
                        <span>{form.errors.description}</span>
                    )}
                </div>
                <div>
                    <input
                        type="number"
                        name="priceOriginal"
                        placeholder="Product Price"
                        value={form.values.priceOriginal}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    />
                    {form.errors.priceOriginal && form.touched.priceOriginal && (
                        <span>{form.errors.priceOriginal}</span>
                    )}
                </div>
                <div>
                    <input
                        type="text"
                        name="ability"
                        placeholder="Product Ability"
                        value={form.values.ability}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    />
                    {form.errors.ability && form.touched.ability && (
                        <span>{form.errors.ability}</span>
                    )}
                </div>
                <div>
                    <select
                        id="category"
                        name="category"
                        className="p-2.5 outline-0"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}>
                        <option value="Select category" selected disabled>
                            Select none
                        </option>
                        {categories.map(category => (
                            <option key={category._id} value={category._id}>
                                {category.title}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <input type="file" name="image" id="image" />
                </div>

                <div>
                    <input type="submit" value="Add Product" />
                </div>
            </form>
            <div className="mt-10">
                <div>
                    <input
                        type="text"
                        className="dark:bg-grey-4 dark:text-white/90 py-2 px-4 w-full mobile:w-1/2 desktop:w-1/3 outline-0 rounded-md"
                        placeholder="Search Product"
                    />
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th className="w-32 py-2.5">Image</th>
                        <th className="w-60">Product</th>
                        <th className="w-1/3">Description</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {products && (
                    <tbody>
                        {products.map(product => (
                            <tr key={product._id}>
                                <td className="flex justify-center h-12 w-16">
                                    <img
                                        src={`http://localhost:4000/api/products/cover/${product.productImage}`}
                                        alt=""
                                        className="h-full object-cover"
                                    />
                                </td>
                                <td>{product.title}</td>
                                <td>{product.description}</td>
                                <td>{product.priceOriginal}</td>
                                <td className="flex gap-x-5 px-4 py-2">
                                    <span className="p-1 w-min bg-blue-100/10 text-blue-100 rounded-md laptop:cursor-pointer">
                                        <svg className="w-6 h-6">
                                            <use href="#pencil-square"></use>
                                        </svg>
                                    </span>
                                    <span
                                        className="p-1 w-min bg-red/10 text-red rounded-md laptop:cursor-pointer"
                                        onClick={() =>
                                            setIsModal({
                                                status: "pending",
                                                id: product._id,
                                                cb: deleteProduct,
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
            {!products && <ErrorMessage title="There is no product" />}
        </>
    );
}

export default Products;
