/// <reference types="react" />
export default RotaryKnob;
declare function RotaryKnob({ isDisabled, width: tWidth, value, max, min, backgroundColor, color, caretColor, showValueLabel, debounceDelay, lineWidth, cbValChanged, }: {
    isDisabled?: boolean | undefined;
    width?: number | undefined;
    value?: number | undefined;
    max?: number | undefined;
    min?: number | undefined;
    backgroundColor?: string | undefined;
    color?: string | undefined;
    caretColor?: string | undefined;
    showValueLabel?: boolean | undefined;
    debounceDelay?: number | undefined;
    lineWidth?: number | undefined;
    cbValChanged?: ((val: number) => number) | undefined;
}): JSX.Element;