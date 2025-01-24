interface UserAvatarProps {
  firstName: string;
  lastName: string;
}

export const UserAvatar = ({ firstName, lastName }: UserAvatarProps) => {
  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white">
      {firstName.split("")[0].toUpperCase()}
      {lastName.split("")[0].toUpperCase()}
    </div>
  );
};
