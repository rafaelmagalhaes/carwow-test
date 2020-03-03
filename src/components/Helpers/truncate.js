const truncate = (text, limit) => {
    if (text && text.length > limit) {
        return text.substring(0, limit) + '...';
    } else {
        return text
    }
};

export default truncate
