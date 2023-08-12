const quantityCount = (state, product) => {
    const index = state.selectedItems.findIndex(item => item.id === product._id);

    if (index === -1) {
        return false;
    } else {
        return state.selectedItems[index].quantity;
    }
};

export { quantityCount };
