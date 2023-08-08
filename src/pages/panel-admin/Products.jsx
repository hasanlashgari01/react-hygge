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
    const [setIsModal] = SwalModal();
    const token = useToken();
    const form = useFormik({
        initialValues: {
            image: "product",
            title: "",
            description: "",
            priceOriginal: "",
            ability: "",
            categoryID: "64cd19ff11ae1a7a9712fe61",
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

    const handleSubmit = values => {
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
                // navigate("/");
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
        getAllProducts();
    }, []);

    return (
        <>
            <ToastContainer />
            <form
                className="grid gap-5 grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 child:form-wrapper"
                onSubmit={form.handleSubmit}>
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
                    <input
                        type="text"
                        name="categoryID"
                        placeholder="Product categoryID"
                        value={form.values.categoryID}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                    />
                    {form.errors.categoryID && form.touched.categoryID && (
                        <span>{form.errors.categoryID}</span>
                    )}
                </div>
                <div>
                    <input type="submit" name="off" value="Add Product" />
                </div>
            </form>
            <div className="mt-10">
                <div>
                    <input type="text" />
                </div>
            </div>
            <table className="w-full ">
                <thead>
                    <tr className="bg-green-100/40">
                        {/* <th className="border py-2.5">Image</th> */}
                        <th className="border py-2.5">Product</th>
                        <th className="border py-2.5">Status</th>
                        <th className="border py-2.5">Price</th>
                        <th className="border py-2.5">Likes</th>
                    </tr>
                </thead>
                {products && (
                    <tbody>
                        {products.map(product => (
                            <tr key={product._id}>
                                {/* <td>{product.image}</td> */}
                                <td>{product.title}</td>
                                <td>{product.description}</td>
                                <td>{product.priceOriginal}</td>
                                <td className="flex gap-x-5">
                                    <button
                                        onClick={() =>
                                            setIsModal({
                                                status: "pending",
                                                id: product._id,
                                                cb: deleteProduct,
                                            })
                                        }>
                                        Delete
                                    </button>
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
