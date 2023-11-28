function yearsToDays(){
    // დღეების რაოდენობა
    const daysInYear = 365;
    // დღეების ექვივალენტობა
    const days = years * daysInYear;

    return days;
}

const years = 1;
const days = yearsToDays();
console.log(`${years} წელში არის ${days} დღე.`);
