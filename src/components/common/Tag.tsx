import { cn } from '../../lib/utils';

interface TagProps {
    label: string;
    className?: string;
    onClick?: () => void;
}

export function Tag({ label, className, onClick }: TagProps) {
    return (
        <span
            onClick={onClick}
            className={cn(
                "inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-200",
                onClick && "cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700",
                className
            )}
        >
            {label}
        </span>
    );
}
