/**
 * @module HoverableText
 * @description A component that displays text with an optional hover card for additional details
 */

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { HoverableTextProps } from "@/types/schedule";

/**
 * HoverableText Component
 * Renders text that shows additional information in a hover card when moused over
 * @param {HoverableTextProps} props - Component props
 * @param {string} props.text - The text to display
 * @param {string} [props.description] - Optional description shown in hover card
 * @returns {JSX.Element} Rendered component
 */
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