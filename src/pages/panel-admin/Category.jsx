import { useEffect, useState } from "react";
import useToken from "../../hooks/useToken";
import SwalModal from "../../util/SwalModal";
import { ToastContainer } from "react-toastify";

function Category() {
    const [categories, setCategories] = useState([]);
    const token = useToken();
    const [setIsModal] = SwalModal();

    useEffect(() => {
        getAllCategories();
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

    return (
        <>
            <ToastContainer />
            <table className="w-full table-auto">
                <thead>
                    <tr className="bg-green-10 rounded-xl overflow-hidden">
                        <th className="text-left border px-4 py-2 w-2">
                            <input type="checkbox" />
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
                                    <input value={category._id} type="checkbox" />
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
        </>
    );
}

export default Category;
