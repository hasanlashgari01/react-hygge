function InfoBadge({ title, count }) {
    return (
        <div className="h-28 laptop:h-40 p-4 bg-white rounded-md">
            <h1 className="mb-2 text-2xl font-semibold">{title}</h1>
            <span>{count}</span>
        </div>
    );
}

export default InfoBadge;
