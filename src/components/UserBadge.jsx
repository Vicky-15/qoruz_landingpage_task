const UserBadge = ({ profileUrl, title, name, from, className }) => {
  return (
    <div className={`w-fit flex items-center gap-x-4 ${className}`}>
      <img
        className="rounded-full"
        src={profileUrl}
        alt={`qoruz_user-${name}`}
      />
      <div>
        <p className="text-primary-black-600 font-normal text-[12px] leading-[19px]">
          {title}
        </p>
        <p className="text-primary-black-600 font-bold leading-[22px] tracking-[-0.02em]">
          {name}
        </p>
        <p className="text-primary-black-600 font-normal text-[12px] leading-[19px]">
          {from}
        </p>
      </div>
    </div>
  );
};

export default UserBadge;
