export const AuthRight = () => {
  return (
    <aside className="hidden md:flex items-center justify-end w-full h-screen bg-primary/10 dark:bg-primary/15 rounded-l-[5rem] pl-20 py-20">
      <div className="bg-light dark:bg-gray-500 shadow-xl rounded-l-[4rem] overflow-hidden flex items-center justify-center h-full pl-1 py-1 w-full">
        <div className="bg-typo dark:bg-gray-800 rounded-l-[3.95rem] overflow-hidden h-full pl-3 py-3 w-full">
          <div className="bg-auth-right dark:bg-auth-right-dark w-full h-full rounded-l-[3.45rem] size-full bg-left-top bg-no-repeat" />
        </div>
      </div>
    </aside>
  );
};
