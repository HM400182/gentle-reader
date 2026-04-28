import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

interface StatNumberProps {
  /** Display value, e.g. "500+", "75%", "10K+", "1,200", "3" */
  value: string | number;
  className?: string;
  duration?: number;
}

/**
 * Animated stat number that counts up when scrolled into view.
 * Parses common suffixes (+, %, K, K+, M, M+) and preserves them.
 */
const parseValue = (raw: string | number) => {
  const str = String(raw).trim();
  // Match: optional digits w/ commas/decimal, optional K/M, optional %, optional +
  const match = str.match(/^([\d,.]+)\s*([KM]?)\s*(%?)\s*(\+?)$/i);
  if (!match) return { end: 0, suffix: str, valid: false };

  const [, numPart, magnitude, percent, plus] = match;
  const base = parseFloat(numPart.replace(/,/g, ""));
  if (Number.isNaN(base)) return { end: 0, suffix: str, valid: false };

  const suffix = `${magnitude.toUpperCase()}${percent}${plus}`;
  return { end: base, suffix, valid: true, hasComma: numPart.includes(",") };
};

const StatNumber = ({ value, className, duration = 2 }: StatNumberProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const parsed = parseValue(value);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  if (!parsed.valid) {
    return <div ref={ref} className={className}>{value}</div>;
  }

  return (
    <div ref={ref} className={className}>
      {inView ? (
        <CountUp
          end={parsed.end}
          duration={duration}
          separator={parsed.hasComma ? "," : ""}
          decimals={parsed.end % 1 !== 0 ? 1 : 0}
          suffix={parsed.suffix}
        />
      ) : (
        <span>0{parsed.suffix}</span>
      )}
    </div>
  );
};

export default StatNumber;
