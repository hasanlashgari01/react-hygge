import { useContext } from "react";
import AuthContext from "../../context/authContext";
import Product from "../../components/main/Product";
import Empty from "../../components/panel-user/Empty";

function Likes() {
    const { likes } = useContext(AuthContext);

    return (
        <>
            {likes.length >= 1 ? (
                <div className="grid grid-cols-1 xmobile:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-2 desktop:grid-cols-3 gap-x-12 laptop:gap-x-14 desktop:gap-x-12 gap-y-16">
                    {likes.map(like => (
                        <Product key={like._id} product={like} />
                    ))}
                </div>
            ) : (
                <Empty />
            )}
        </>
    );
}

export default Likes;
