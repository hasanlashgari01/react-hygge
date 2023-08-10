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
            <table className="w-full ">
                <thead>
                    <tr className="bg-green-100/40">
                        <th className="border py-2.5">Icon</th>
                        <th className="border py-2.5">Title</th>
                        <th className="border py-2.5">name</th>
                    </tr>
                </thead>
                {categories && (
                    <tbody>
                        {categories.map(category => (
                            <tr key={category._id}>
                                <td>{category.icon}</td>
                                <td>{category.title}</td>
                                <td>{category.shortName}</td>
                                <td className="flex gap-x-5">
                                    <button
                                        onClick={() =>
                                            setIsModal({
                                                status: "pending",
                                                id: category._id,
                                                cb: deleteCategory,
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
        </>
    );
}

export default Category;
