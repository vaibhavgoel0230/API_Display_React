import { FC, memo } from "react";

interface Props {
  email: string;
  gender: string;
}

const UserRow: FC<Props> = ({ email, gender }) => {
  return (
    <div className="py-2 mb-2">
      <div className="flex mb-1">
        <div className="bg-black py-1 px-3 w-24 text-white rounded-md">
          Email:
        </div>
        <div className="py-1 px-3 ml-1 w-96 text-black border border-solid rounded-md border-black ">
          {email}
        </div>
      </div>
      <div className="flex">
        <div className="bg-black py-1 px-3 w-24 text-white rounded-md shadow-lg">
          Gender:
        </div>
        <div className="py-1 px-3 ml-1 w-96 text-black border border-solid rounded-md border-black ">
          {gender}
        </div>
      </div>
    </div>
  );
};

UserRow.defaultProps = {};

export default memo(UserRow);
