import { NextFunction, Request, Response } from "express";
import { OAuth2Client } from "google-auth-library";
import passport from "passport";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "../../../config";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { GOOGLE_CALLBACK_URL } from "../../../constants";
import { UserQuery } from "../../../shared";
import { AddService, GetService } from "../../../services";
import { hash } from "bcrypt";
import { getByEmail } from "../../../functions";
import { CivilStatus, UserRole, UserTable } from "../../../types";

export const GoogleAuth = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    /*passport.use(
      new GoogleStrategy(
        {
          clientID: GOOGLE_CLIENT_ID,
          clientSecret: GOOGLE_CLIENT_SECRET,
          callbackURL: "http:/127.0.0.1:3500/api/v1/auth/google-redirect",
        },
        (accessToken, refreshToken, profile, done) => {
          // Handle user profile here+

          console.log("Google access token:", accessToken);
          console.log("Google refresh token:", refreshToken);
          console.log("Google profile:", profile);
          return done(null, profile);
        },
      ),
    );
    passport.serializeUser((user, done) => {
      done(null, user);
    });
    passport.deserializeUser((user: Express.User | null, done) => {
          return done(null, user);
        });*/
    passport.authenticate("google", {
      scope: ["email", "profile"],
      accessType: "offline",
      prompt: "consent",
    })(req, res, next);
  } catch (error: any) {
    logging.log("----------------------------------------");
    logging.error("oAuth-Controller [GoogleAuth]:", error.message);
    logging.log("----------------------------------------");
  }
};
/*
const redirectUrl =
  process.env.REDIRECT_URL || "http://127.0.0.1:3000/api/v1/oauth";
const oAuth2Client = new OAuth2Client(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  redirectUrl,
);

const authorizeUrl = oAuth2Client.generateAuthUrl({
  access_type: "offline",
  prompt: "consent",
  scope: ["email", "profile"],
});
*/

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      callbackURL: GOOGLE_CALLBACK_URL,
      passReqToCallback: true,
    },

    async function (request, accessToken, refreshToken, profile, done) {
      const email =
        profile.emails && profile.emails.length > 0
          ? profile.emails[0].value
          : null;
      const displayName = profile.displayName || "";
      const avatar =
        profile.photos && profile.photos.length > 0
          ? profile.photos[0].value
          : "";
      const googleId = profile.id;
      const RefreshToken: string = refreshToken;
      if (!email) return done(new Error("Email not found"), undefined);
      const [existingUser]: any = await GetService.byFields(
        UserQuery.q003,
        ["Email"],
        [String],
        [email],
      );

      const Password = await hash("GoogleAuthenticatedOnly", 10);

      if (!existingUser || existingUser.length === 0)
        console.log("User not found, creating new user");
      const CreateUser: UserTable = {
        Email: email,
        Password: "",
        Firstname: "",
        Middlename: null,
        Lastname: "",
        ContactNumber: "",
        Role: UserRole.DEFAULT,
        CivilStatus: CivilStatus.DEFAULT,
        ProfilePhoto: avatar,
        IsSuspended: false,
        Genrder: "",
        Religion: "",
        GoogleId: googleId,
      };
      // await AddService.record(DBTable.t007, Fields, Types, Datas);
      // else console.log("User found, updating user");
      const finalUser = await getByEmail(email ?? "");
      const userWithTokens = { ...finalUser.data, RefreshToken };
      return done(null, userWithTokens);
    },
  ),
);

passport.serializeUser(function (user, done) {
  //console.log("Serializing user:", user);
  done(null, user);
});

passport.deserializeUser(function (user: any, done) {
  //console.log("Deserializing user:", user);
  done(null, user);
});
