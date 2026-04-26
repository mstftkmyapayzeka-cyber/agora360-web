import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

interface SectionHeaderProps {
    title: string;
    description?: string;
    linkTo?: string;
    linkText?: string;
    className?: string;
}

export function SectionHeader({ title, description, linkTo, linkText = "Tümünü Gör", className }: SectionHeaderProps) {
    return (
        <div className={cn("flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8", className)}>
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50">{title}</h2>
                {description && (
                    <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
                        {description}
                    </p>
                )}
            </div>
            {linkTo && (
                <Link
                    to={linkTo}
                    className="group inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                    {linkText}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
            )}
        </div>
    );
}
