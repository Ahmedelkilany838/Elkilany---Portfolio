// Renders a styled dark placeholder when a project image fails to load.
// Drop-in replacement for a broken <img> — maintains layout, shows project name.

interface ImagePlaceholderProps {
    projectName: string;
}

export function ImagePlaceholder({ projectName }: ImagePlaceholderProps) {
    return (
        <div className="w-full h-full flex items-center justify-center bg-[#1a1a1a] rounded-[16px]">
            <span className="font-['Syne'] font-bold text-[#c8b89a] text-sm md:text-base uppercase tracking-[0.15em] select-none opacity-60">
                {projectName}
            </span>
        </div>
    );
}

export default ImagePlaceholder;
