import logo from '../assets/react.svg';

const Avatar = () => {
  return (
    <div className="flex flex-col items-center space-y-2 mb-5">
      <img
        src={logo}
        alt="avatar"
        className="h-24 w-24 rounded-full border-4 border-white object-cover"
      />
      <div className="text-center">name</div>
    </div>
  );
};

export default Avatar;
