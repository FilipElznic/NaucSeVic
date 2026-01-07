import React from "react";
import { InlineMath, BlockMath } from "react-katex";

const LatexRenderer = ({ text }) => {
  if (!text) return null;

  // Split by $$ for block math first
  // We use a regex that captures the delimiters to preserve them in the split array
  // The regex looks for $$...$$
  const blockParts = text.split(/(\$\$[\s\S]*?\$\$)/g);

  return (
    <span>
      {blockParts.map((part, index) => {
        if (part.startsWith("$$") && part.endsWith("$$")) {
          // Extract content between $$
          const math = part.slice(2, -2);
          return <BlockMath key={index} math={math} />;
        }

        // Inside non-block parts, look for inline math $...$
        // We look for $...$ but not $$...$$ (already handled)
        const inlineParts = part.split(/(\$[^\$]+?\$)/g);

        return (
          <span key={index}>
            {inlineParts.map((subPart, subIndex) => {
              if (subPart.startsWith("$") && subPart.endsWith("$")) {
                // Extract content between $
                const math = subPart.slice(1, -1);
                return <InlineMath key={subIndex} math={math} />;
              }
              return <span key={subIndex}>{subPart}</span>;
            })}
          </span>
        );
      })}
    </span>
  );
};

export default LatexRenderer;
