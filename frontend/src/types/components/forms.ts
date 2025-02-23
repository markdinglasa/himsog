export interface NewForm {
  title: string;
  path?: string;
}

export interface FormProps {
  Title?: string;
  IsEdit?: boolean;
  IsDisplay?: boolean;
  IsDetails?: boolean;
  IsId?: boolean;
  OnClose?: () => void;
  OnRefetch?: () => void;
  RecordId?: string;
  Record?: Record<string, any>;
}
