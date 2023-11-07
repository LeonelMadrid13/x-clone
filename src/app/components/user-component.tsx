import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, User} from "@nextui-org/react";

export function UserComponent ({
  name,
  avatarUrl,
  user_name,
}: {
  name: string;
  avatarUrl: string;
  user_name: string;
}) {
  return (
    <User
      as="button"
      avatarProps={{
        src: avatarUrl,
      }}
      description={user_name}
      name={name}
    />
  );
}
