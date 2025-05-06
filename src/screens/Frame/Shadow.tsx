import { Card } from "../../components/ui/card";

export const Box = (): JSX.Element => {
  return (
    <div className="bg-white w-full">
      <Card className="w-full h-[200px] bg-gradient-to-t from-[rgba(217,217,217,1)] to-[rgba(241,241,241,1)] border-none rounded-none shadow-none" />
    </div>
  );
};
