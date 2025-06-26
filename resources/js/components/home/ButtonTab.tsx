import { motion } from 'framer-motion'; // Correct import for motion
import { MouseEvent, useEffect, useRef, useState } from 'react';

interface ButtonTabProps {
    setActiveFilter: (filter: string) => void;
    activeFilter: string;
}

interface TabPosition {
    x: number;
    y: number;
    width: number;
    height: number;
}

const ButtonTab: React.FC<ButtonTabProps> = ({ setActiveFilter, activeFilter }) => {
    const [hoverTab, setHoverTab] = useState<TabPosition | null>(null);
    const [activeTab, setActiveTab] = useState<TabPosition | null>(null);
    const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

    useEffect(() => {
        const node = tabRefs.current['All'];
        if (node) {
            const rect = node.getBoundingClientRect();
            setActiveTab({
                x: node.offsetLeft,
                y: node.offsetTop,
                width: rect.width,
                height: rect.height,
            });
        }
    }, []);

    const handleMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
        const target = e.currentTarget;
        const rect = target.getBoundingClientRect();
        setHoverTab({
            x: target.offsetLeft,
            y: target.offsetTop,
            width: rect.width,
            height: rect.height,
        });
    };

    const handleMouseClick = (e: MouseEvent<HTMLButtonElement>) => {
        const target = e.currentTarget;
        const rect = target.getBoundingClientRect();
        setActiveTab({
            x: target.offsetLeft,
            y: target.offsetTop,
            width: rect.width,
            height: rect.height,
        });
    };

    const tabs: string[] = ['All', 'React', 'Vue', 'Angular'];
    const animatedTab = hoverTab || (activeTab && !hoverTab ? activeTab : null);

    return (
        <>
            {animatedTab && (
                <motion.div
                    layoutId="hover"
                    className="absolute top-0 left-0 rounded-md bg-primary"
                    initial={false}
                    style={{
                        width: animatedTab.width,
                        height: animatedTab.height,
                    }}
                    animate={{
                        x: animatedTab.x,
                        y: animatedTab.y,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
            )}

            {tabs.map((tab) => (
                <button
                    key={tab}
                    ref={(el) => {
                        if (el) tabRefs.current[tab] = el;
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={() => setHoverTab(null)}
                    onClick={(e) => {
                        setActiveFilter(tab);
                        handleMouseClick(e);
                    }}
                    className={`!rounded-button z-10 w-[100px] cursor-pointer rounded-full px-4 py-1 font-medium whitespace-nowrap transition-colors hover:text-white ${
                        activeFilter === tab && !hoverTab ? 'text-white' : ''
                    }`}
                >
                    {tab}
                </button>
            ))}
        </>
    );
};

export default ButtonTab;
