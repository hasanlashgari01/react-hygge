import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/authContext";
import Product from "../../components/main/Product";
import Empty from "../../components/panel-user/Empty";

function Bookmarks() {
    const { userInfos } = useContext(AuthContext);

    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {
        setBookmarks(userInfos.bookmarks);
    }, []);

    return (
        <>
            {bookmarks.length >= 1 ? (
                <div className="grid grid-cols-1 mobile:grid-cols-2 desktop:grid-cols-3 gap-x-12 laptop:gap-x-14 desktop:gap-x-12 gap-y-16">
                    {bookmarks.map(bookmark => (
                        <Product key={bookmark._id} product={bookmark} />
                    ))}
                </div>
            ) : (
                <Empty />
            )}
        </>
    );
}

export default Bookmarks;
