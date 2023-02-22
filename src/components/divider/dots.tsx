type DotsProps = {
    className?: string;
}

export const Dots = ({ className }: DotsProps) => {
    return <hr className={`w-full border-dotted border-t-2 ${className}`}/>;
};

Dots.defaultProps = { className: "" };
