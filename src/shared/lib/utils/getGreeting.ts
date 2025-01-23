export const getGreeting = (): string => {
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 11) {
    return "Good Morning";
  } else if (currentHour >= 11 && currentHour < 18) {
    return "Good Day";
  } else if (currentHour >= 18 && currentHour < 21) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
};
