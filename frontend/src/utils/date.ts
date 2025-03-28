import { ToastType } from "../types";
import { displayToast } from "./toast";

/*export const getCurrentDate = (CurrentDate: Date) => {
  const today = new Date(CurrentDate);
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};*/

export const getCurrentDate = (CurrentDate: string) => {
  const today = new Date(CurrentDate);
  return today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const getCurrentTime = (CurrentTime: string) => {
  // CurrentTime Sample Data = 08:00:00
  // getting an incorrect output, 08:00:00 should be 08:00 AM
  try {
    const today = new Date(`2025-03-01T${CurrentTime}`); // Ensure valid time format without timezone conversion
    if (isNaN(today.getTime())) throw new Error("Invalid time format");
    return today.toLocaleTimeString("en-PH", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }); // returns 10:45 PM, don't include the date
  } catch (error: any) {
    displayToast(error.message, ToastType.error);
    return "";
  }
};

export const formatDateToMMDDYY = (isoDateString: any): string => {
  try {
    const date = new Date(isoDateString);
    //if (isNaN(date.getTime())) throw new Error("Invalid date");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = String(date.getFullYear());
    return `${month}/${day}/${year}`;
  } catch (error: any) {
    displayToast(error.message, ToastType.error);
    return "";
  }
};
export const formatDateToYYMMDD = (isoDateString: string): string => {
  try {
    const date = new Date(isoDateString);
    //if (isNaN(date.getTime())) throw new Error("Invalid date");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = String(date.getFullYear());
    return `${year}/${month}/${day}`;
  } catch (error: any) {
    displayToast(error.message, ToastType.error);
    return "";
  }
};
export const formatDate = (isoDateString: string) => {
  try {
    const date = new Date(isoDateString);
    //if (isNaN(date.getTime())) throw new Error("Invalid date");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = String(date.getFullYear());
    const hr = String(date.getHours() + 1).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    return `${year}-${month}-${day} ${hr}:${min}:${sec}`;
  } catch (error: any) {
    displayToast(error.message, ToastType.error);
  }
};

export const formatDateToFD = (isoDateString: string) => {
  try {
    const date = new Date(isoDateString);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = String(date.getFullYear());

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    const amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert to 12-hour format, ensuring 12 for midnight/noon
    const formattedHours = String(hours).padStart(2, "0");

    return `${day}/${month}/${year} ${formattedHours}:${minutes}:${seconds} ${amPm}`;
  } catch (error: any) {
    displayToast(error.message, ToastType.error);
  }
};

export const lastDate = (currentdate: string): string => {
  const date = new Date(currentdate);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return `${diffInSeconds}s`;
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes}m`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours}h`;
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `${diffInDays}d`;
  const diffInWeeks = Math.floor(diffInDays / 7);
  return `${diffInWeeks}w`;
};

export const formatNumber = (Amount: number): string => {
  const parts = Amount.toFixed(2).split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `₱ ${parts.join(".")}`;
};

export function formatDateForInput(dateValue: string | Date) {
  const date = new Date(dateValue);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = String(date.getFullYear());
  return `${year}-${month}-${day} ${10}:${10}:${10}`;
}
