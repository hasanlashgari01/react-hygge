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
    };

    const removeCategory = categoryId => {
        setCategoriesId(prev => [...prev, categoryId]);
    };

    return (
        <div>
            <ToastContainer />
            <button
                onClick={() =>
                    setIsModal({
                        status: "pending",
                        cb: deleteMany,
                    })
                }>
                Delete Many
            </button>
            <table className="w-full table-auto">
                <thead>
                    <tr className="bg-green-10 rounded-xl overflow-hidden">
                        <th className="text-left border px-4 py-2 w-2">
                            <input
                                type="checkbox"
                                className="checkbox-custom"
                                onClick={changeHandler}
                            />
                        </th>
                        <th className="text-left border px-4 py-2">Icon</th>
                        <th className="text-left border px-4 py-2">Title</th>
                        <th className="text-left border px-4 py-2">Name</th>
                        <th className="text-right border px-4 py-2 w-32">Actions</th>
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
                                <td className="px-4 py-2">{category.icon}</td>
                                <td className="px-4 py-2">{category.title}</td>
                                <td className="px-4 py-2">{category.shortName}</td>
                                <td className="flex justify-end gap-x-5 px-4 py-2">
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
    );
}

export default Category;
