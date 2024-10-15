type ChipProps = {
  label: string;
};

const Chip = ({ label }: ChipProps) => {
  return (
    <p className="rounded-lg bg-quaternary py-0.5 px-2.5 border border-transparent text-sm text-white transition-all shadow-sm">
      {label}
    </p>
  );
};

export default Chip;
