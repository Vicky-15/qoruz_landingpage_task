import { useState } from "react";

const ExpandableText = ({ className = "", children, limit = 300 }) => {
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;

  if (children.length <= limit) return <p>{children}</p>;

  const summary = expanded ? children : children.slice(0, limit);

  return (
    <p className={`${className}`}>
      {summary}
      <span
        className="ml-1 underline decoration-solid text-primary-orange-600 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "show less" : "read more..."}
      </span>{" "}
    </p>
  );
};

export default ExpandableText;
