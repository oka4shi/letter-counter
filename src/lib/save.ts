export const save_to_localstorage = (input_text: string) => {
    localStorage.setItem("text", input_text);
    const saved_date = new Date();
    return saved_date;
};
