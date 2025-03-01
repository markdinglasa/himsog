import { BASE_URL } from "../../../shared";

export const AppointmentChannel = {
  APPOINTMENT: `${BASE_URL}/transaction/appointment`,
  APPOINTMENT_ID: `${BASE_URL}/transaction/appointment/:Id`,
  APPOINTMENT_PARENT: `${BASE_URL}/transaction/appointment/u?=:Id`,
};
