import { useEffect, useState } from "react";
import useToken from "../../hooks/useToken";
import SwalModal from "../../util/SwalModal";
import { ToastContainer } from "react-toastify";

function Category() {
    const [categories, setCategories] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [categoriesId, setCategoriesId] = useState([]);

    const token = useToken();
    const [setIsModal] = SwalModal();

    useEffect(() => {
        getAllCategories();

        window.addEventListener("keyup", e => {
            e.preventDefault();

            if (window.location.href === "http://localhost:5173/p-admin/category") {
                if (e.ctrlKey && e.code === "KeyA") {
                    clearAll();
                }
            }
        });
    }, []);

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
                                <input
                                    type="checkbox"
                                    className="checkbox-custom"
                                    onClick={changeHandler}
                                />
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
                                    <td>{category.icon}</td>
                                    <td>{category.title}</td>
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
