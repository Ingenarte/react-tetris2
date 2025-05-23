import { default as React } from 'react';
export type Tetris2Handle = {
    start: () => void;
    restart: () => void;
};
interface Props {
    credits?: number;
    manageCredits?: boolean;
    showModals?: boolean;
    soundEnabled?: boolean;
    showControlsLegend?: boolean;
    onGameOver?: () => void;
    onScoreChange?: (score: number) => void;
    onLevelChange?: (level: number) => void;
}
export declare const Tetris2: React.ForwardRefExoticComponent<Props & React.RefAttributes<Tetris2Handle>>;
export type { Props as Tetris2Props };
export default Tetris2;
//# sourceMappingURL=Tetris2.d.ts.map