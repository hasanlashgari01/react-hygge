function InfoBadge({ title, count }) {
    return (
        <div className="h-28 laptop:h-40 p-4 bg-white dark:bg-grey-2 rounded-md transition-custom child:transition-custom">
            <h1 className="mb-2 dark:text-white/90 text-2xl font-semibold">{title}</h1>
            <span className="dark:text-white text-lg font-bold font-mono">{count}</span>
        </div>
    );
}

export default InfoBadge;
