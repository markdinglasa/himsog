import { SFC } from "../../../types";

export const FeedbackEmail: SFC = ({ ClassName }) => {
  return (
    <>
      <div className={ClassName}>
        <div className="w-full items-start flex flex-col pt-10">
          <div className="w-full flex flex-row items-start justify-start mb-1">
            <span className="text-md font-medium">
              Have feedback on our website?
            </span>
          </div>
          <div className="w-full flex flex-row items-start justify-start">
            <span className="text-sm text-slate-600">
              If you have any feedback or suggestions,
            </span>
            <span className="ml-2 text-sm text-blue-600">
              please send us an email.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
