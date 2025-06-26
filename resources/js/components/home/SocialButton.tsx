interface SocialButtonProps {
    src: string;
    title: string;
    className?: string;
}

const SocialButton = ({ src, title, className }: SocialButtonProps) => {
    return (
        <button
            className={`group glass-md hover-pr-6 relative flex h-12 w-12 items-center justify-start gap-2 rounded p-2 font-medium text-black shadow-primary duration-700 hover:w-32 ${className}`}
        >
            <img src={src} alt="" className="inline-block h-8 w-8 shrink-0 fill-neutral-50" />
            <span className="inline-flex origin-left scale-x-0 transform border-l-2 px-1 opacity-0 transition-all duration-100 group-hover:scale-x-100 group-hover:opacity-100 group-hover:delay-500 group-hover:duration-300">
                {title}
            </span>
        </button>
    );
};

export default SocialButton;
