import { useContext } from "react";
import AuthContext from "../../context/authContext";
import Product from "../../components/main/Product";
import Empty from "../../components/panel-user/Empty";

function Bookmarks() {
    const { bookmarks } = useContext(AuthContext);

    return (
        <>
            {bookmarks.length >= 1 ? (
                <div className="grid grid-cols-1 mobile:grid-cols-2 desktop:grid-cols-3 gap-x-12 laptop:gap-x-14 desktop:gap-x-12 gap-y-16">
                    {bookmarks.map(bookmark => (
                        <Product key={bookmark._id} {...bookmark} />
                    ))}
                </div>
            ) : (
                <Empty />
            )}
        </>
    );
}

export default Bookmarks;
