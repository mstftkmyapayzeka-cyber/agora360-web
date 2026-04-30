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
            className={cn('tag-chip inline-flex items-center', className)}
        >
            {label}
        </span>
    );
}
