import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface ExpandableTextProps {
  text: string;
  maxLength: number;
  className?: string;
  expandButtonText: string;
  collapseButtonText: string;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({
  text,
  maxLength,
  className,
  expandButtonText,
  collapseButtonText,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const displayText = isExpanded
    ? text
    : `${text.slice(0, maxLength)}${text.length > maxLength ? "..." : ""}`;

  return (
    <div className={cn(className)}>
      <p>
        {displayText}{" "}
        {text.length > maxLength && (
          <button
            onClick={toggleExpanded}
            className="text-purple-500 hover:underline font-medium text-xs"
          >
            {isExpanded ? collapseButtonText : expandButtonText}
          </button>
        )}
      </p>
    </div>
  );
};

export default ExpandableText;
