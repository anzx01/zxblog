type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center neob-card p-2 transform hover:scale-105 transition-transform duration-200">
      <div className="w-12 h-12 border-2 border-black overflow-hidden mr-3 transform rotate-3">
        <img src={picture} className="w-full h-full object-cover" alt={name} />
      </div>
      <div className="neob-text font-bold neob-text-pink">{name}</div>
    </div>
  );
};

export default Avatar;
