export const formatDateToMMDDYY = (currentDate: string): string => {
  try {
    const date = new Date(currentDate);
    //if (isNaN(date.getTime())) throw new Error("Invalid date");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = String(date.getFullYear());
    return `${month}/${day}/${year}`;
  } catch (error: any) {
    return "";
  }
};
