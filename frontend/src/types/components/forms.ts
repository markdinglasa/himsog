import { RouteChannel } from "../channels";

export interface NewForm {
  title: string;
  path?: string;
}

export interface FormProps {
  Title?: string;
  IsSetup?: boolean;
  IsEdit?: boolean;
  IsDisplay?: boolean;
  IsDetails?: boolean;
  IsDisapprove?: boolean;
  IsComplete?: boolean;
  IsMy?: boolean;
  IsPublic?: boolean;
  IsId?: boolean;
  OnClose?: () => void;
  OnRefetch?: () => void;
  RecordId?: string;
  Record?: Record<string, any>;
  IsAdvocate?: boolean;
  AccessToken?: string;
  RequestAccessId?: number;
  IsActive?: number;
}

export interface SetupForm {
  IsSetup?: boolean;
  IsAllergen?: boolean;
  IsClient?: boolean;
  Redirect?: RouteChannel;
  IsDetails?: boolean;
  IsRedirect?: boolean;
  Title?: string;
  OnClose?: () => void;
}
