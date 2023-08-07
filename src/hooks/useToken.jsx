export default function useToken() {
    const token = JSON.parse(localStorage.getItem("user")).token;

    return token;
}
