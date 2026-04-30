import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

interface SectionHeaderProps {
    title: string;
    description?: string;
    linkTo?: string;
    linkText?: string;
    className?: string;
}

export function SectionHeader({ title, description, linkTo, linkText = 'Tümünü Gör', className }: SectionHeaderProps) {
    return (
        <div className={cn('mb-8', className)}>
            <div
                className="flex items-end justify-between gap-4 pb-3"
                style={{ borderBottom: '1px solid var(--ink)' }}
            >
                <div>
                    <div className="kicker mb-2">Bölüm</div>
                    <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3.4vw, 42px)' }}>
                        {title}
                    </h2>
                </div>
                {linkTo && (
                    <Link to={linkTo} className="byline whitespace-nowrap ink-link">
                        {linkText} →
                    </Link>
                )}
            </div>
            {description && (
                <p className="lede mt-3 italic" style={{ maxWidth: 720, fontSize: 16, color: 'var(--ink-muted)' }}>
                    {description}
                </p>
            )}
        </div>
    );
}
