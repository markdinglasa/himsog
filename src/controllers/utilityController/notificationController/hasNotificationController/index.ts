import { NextFunction, Request, Response } from "express";
import { Error, Success, UserQuery } from "../../../../shared";
import { isFound } from "../../../../functions";
import { NotificationQuery } from "../../../../shared/";
import { GetService } from "../../../../services";

export const NotificationIsNotificationController = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  try {
    const UserId: number = parseInt(req.params?.Id, 10); // UserId
    if (!UserId || UserId === 0 || UserId === undefined)
      return res.status(401).json({ data: [], message: Error.m005 });
    if (!(await isFound(UserQuery.q006, ["Id"], [Number], [UserId])).data)
      return res.status(401).json({ data: [], message: Error.m011 }); // check User existence
    const response = (
      await GetService.byFields(
        NotificationQuery.q005,
        ["UserId"],
        [Number],
        [UserId],
      )
    )[0];
    return res.status(200).json({ data: response, message: Success.m005 });
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("Notification-Controller [IsNotification]:", error.message);
    logging.log("----------------------------------------");
    return res
      .status(500)
      .json({ data: [], message: error.message || Error.m001 });
  }
};
