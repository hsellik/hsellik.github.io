type ChipProps = {
  label: string;
};

const Chip = ({ label }: ChipProps) => {
  return (
    <p
      className="rounded-lg py-0.5 px-2.5 text-sm text-gold/80 font-medium transition-all duration-200 hover:text-gold cursor-default bg-gold/8 border border-gold/25"
    >
      {label}
    </p>
  );
};

export default Chip;
