const getShortMonthName = (monthNumber) => {
    const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Aug", "Nov", "Dec"];
    return Months[monthNumber];
}

export { getShortMonthName }