import axios from "axios";
import { FC, memo, useEffect, useState } from "react";
import UserRow from "./UserRow";

interface Props {
  page: number;
}

const UserList: FC<Props> = ({ page }) => {
  const [users, setUsers] = useState<any>([]);
  console.log("UserList Rendering with page: " + page);

  useEffect(() => {
    console.log("Before Request Trigger");
    axios
      .get(
        "https://randomuser.me/api/?inc=id,name,gender,email&page" +
          page +
          "&results=20"
      )
      .then((response) => {
        console.log("After response arrival");
        console.log(response.data.results);
        setUsers(response.data.results);
      });

    console.log("After Request trigger");
  }, [page]);

  return (
    <div className="flex flex-col items-center border border-black bg-white rounded-xl p-3">
      {users.map((u: any) => (
        <UserRow email={u.email} gender={u.gender} />
      ))}
    </div>
  );
};

UserList.defaultProps = {};

export default memo(UserList);
