import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { HoverableTextProps } from "@/types/schedule";

export const HoverableText = ({ text, description }: HoverableTextProps) => {
  if (!description) return <span>{text}</span>;

  return (
    <HoverCard>
      <HoverCardTrigger className="border-dotted border-b border-gray-500 cursor-help">
        {text}
      </HoverCardTrigger>
      <HoverCardContent className="w-80 text-sm">
        <p>{description}</p>
      </HoverCardContent>
    </HoverCard>
  );
};