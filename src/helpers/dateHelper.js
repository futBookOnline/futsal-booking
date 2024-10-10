const months = [
    { id: 0, name: 'January' },
    { id: 1, name: 'February' },
    { id: 2, name: 'March' },
    { id: 3, name: 'April' },
    { id: 4, name: 'May' },
    { id: 5, name: 'June' },
    { id: 6, name: 'July' },
    { id: 7, name: 'August' },
    { id: 8, name: 'September' },
    { id: 9, name: 'October' },
    { id: 10, name: 'November' },
    { id: 11, name: 'December' }
];

const days = [
    { id: 0, name: 'Sunday' },
    { id: 1, name: 'Monday' },
    { id: 2, name: 'Tuesday' },
    { id: 3, name: 'Wednesday' },
    { id: 4, name: 'Thursday' },
    { id: 5, name: 'Friday' },
    { id: 6, name: 'Saturday' }
];

const getMonthName = (monthNumber, type = "short") => {
    const matchingMonth = months.find(item => item.id === monthNumber);
    if (matchingMonth) {
        //return short or full name of the month based on type parameter
        return type === "short" ? matchingMonth.name.slice(0, 3) : matchingMonth.name;
    }
    return null;
};

const getDayName = (dayNumber, type = "short") => {
    const matchingDay = days.find(item => item.id === dayNumber);
    if (matchingDay) {
        // return short or ull name of day based on type parameter
        return type === "short" ? matchingDay.name.slice(0, 3) : matchingDay.name;
    }
    return null;
};

const getTwoWeeksFromNow = (date = new Date()) => {
    const today = date.getDate();
    return new Date(date.setDate(today + 14)); //return the date 14 days from given date
}

export { getMonthName, getDayName, getTwoWeeksFromNow }