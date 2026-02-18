interface MarqueeTitleProps {
    text: string;
    number?: string;
    className?: string;
}

export default function MarqueeTitle({
    text,
    number,
    className = ""
}: MarqueeTitleProps) {
    return (
        <div className={`w-full overflow-hidden flex mb-12 relative ${className}`}>
            <h2 className="font-extrabold text-[10.2vw] tracking-[-0.05em] text-white leading-none uppercase flex items-start gap-4">
                {text}
                {number && (
                    <span className="align-top text-[3.4vw] font-light opacity-50 font-mono tracking-normal">
                        ({number})
                    </span>
                )}
            </h2>
        </div>
    );
}
