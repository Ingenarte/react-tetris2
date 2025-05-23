import { default as React } from 'react';
interface DigitsProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** Value to display */
    children: number;
    /** Total digits to pad to (default = 4) */
    count?: number;
}
/**
 * Zero-pads a number and renders it inside a monospace `<span>`.
 * All extra props (e.g. `data-testid`, `className`, `style`) are forwarded
 * to the underlying element so external code and tests can target it.
 */
declare const Digits: React.FC<DigitsProps>;
export default Digits;
//# sourceMappingURL=Digits.d.ts.map