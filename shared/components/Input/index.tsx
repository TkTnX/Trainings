interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  className?: string;
}

export const Input = ({ label, className, ...props }: Props) => {
  return (
    <label className={`p-3 rounded-2xl bg-[#232330] ${className}`}>
      {label}
      <input
        className={`w-full outline-none  text-white placeholder:text-gray  rounded-lg `}
        {...props}
      />
    </label>
  );
};
