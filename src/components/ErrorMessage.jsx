function ErrorMessage({ title }) {
    return (
        <div className="flex justify-center items-center w-full h-12 mt-10 bg-red text-white text-xl font-semibold z-0">
            {title}
        </div>
    );
}

export default ErrorMessage;
