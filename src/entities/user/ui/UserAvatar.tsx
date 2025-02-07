interface UserAvatarProps {
  firstName: string;
  lastName: string;
}

export const UserAvatar = ({ firstName, lastName }: UserAvatarProps) => {
  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dark dark:bg-light text-dark-typo dark:text-typo">
      {firstName.split("")[0].toUpperCase()}
      {lastName.split("")[0].toUpperCase()}
    </div>
  );
};
