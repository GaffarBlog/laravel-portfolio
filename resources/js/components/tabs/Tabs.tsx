import { LucideProps } from 'lucide-react';

// Main Tabs Wrapper
interface TabsProps {
    children: React.ReactNode;
}
const Tabs = ({ children }: TabsProps) => {
    return (
        <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
            <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 p-5 md:min-h-min dark:border-sidebar-border">
                <div className="md:flex">{children}</div>
            </div>
        </div>
    );
};
// Tab Buttons Wrapper
export const TabButtons = ({ children }: { children: React.ReactNode }) => {
    return <ul className="flex-column space-y mb-4 space-y-4 text-sm font-medium text-gray-500 md:me-4 md:mb-0 dark:text-gray-400">{children}</ul>;
};

// Tab Buttons
interface TabItemProps {
    className?: string;
    [key: string]: any;
    title: string;
    isActive?: boolean;
    Icon: React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>;
}
export const TabItem = ({ className, title, isActive = false, Icon, ...props }: TabItemProps) => {
    let activeClass,
        iconClass = '';
    if (isActive) {
        activeClass = 'bg-blue-700 text-white dark:bg-blue-600';
        iconClass = 'text-white';
    } else {
        activeClass = 'bg-gray-100 hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white';
        iconClass = 'text-gray-500 dark:text-gray-400';
    }
    return (
        <li {...props}>
            <a href="#" className={`inline-flex w-full items-center rounded-lg px-4 py-3 ${activeClass} ${className}`} aria-current="page">
                <Icon className={`me-2 h-5 w-5 ${iconClass}`} />
                {title}
            </a>
        </li>
    );
};

// Tab Contents
interface TabContentsProps {
    children?: React.ReactNode;
}
export const TabContents = ({ children }: TabContentsProps) => {
    return <div className="text-medium w-full rounded-lg bg-gray-50 p-5 text-gray-500 dark:bg-gray-800 dark:text-gray-400">{children}</div>;
};

// Tab Contents Heading
interface TabHeadingProps {
    title?: string;
    children?: React.ReactNode;
}
export const TabHeading = ({ title, children }: TabHeadingProps) => {
    return <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">{title || children}</h3>;
};

export default Tabs;
