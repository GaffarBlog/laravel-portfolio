import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

export default function SettingsLayout({ children, type = 'profile' }: PropsWithChildren & { type?: string }) {
    let navItems = [
        {
            title: 'Profile',
            href: '/admin-ag/settings/profile',
        },
        {
            title: 'Password',
            href: '/admin-ag/settings/password',
        },
        {
            title: 'Appearance',
            href: '/admin-ag/settings/appearance',
        },
    ];

    if (type === 'home') {
        navItems = [
            {
                title: 'Hero Section',
                href: '/admin-ag/home-contents/hero',
            },
            {
                title: 'Summary',
                href: '/admin-ag/home-contents/summary',
            },
        ];
    }
    // When server-side rendering, we only render the layout on the client...
    if (typeof window === 'undefined') {
        return null;
    }

    const currentPath = window.location.pathname;

    return (
        <div className="px-4 py-6">
            <Heading
                title={type === 'profile' ? 'Settings ' : 'Home Page Contents'}
                description={type === 'profile' ? 'Manage your profile and account settings' : 'Manage home page contents information.'}
            />

            <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-12">
                <aside className="w-full max-w-xl lg:w-48">
                    <nav className="flex flex-col space-y-1 space-x-0">
                        {navItems.map((item, index) => (
                            <Button
                                key={`${item.href}-${index}`}
                                size="sm"
                                variant="ghost"
                                asChild
                                className={cn('w-full justify-start', {
                                    'bg-muted': currentPath === item.href,
                                })}
                            >
                                <Link href={item.href} prefetch>
                                    {item.title}
                                </Link>
                            </Button>
                        ))}
                    </nav>
                </aside>

                <Separator className="my-6 md:hidden" />

                <div className="flex-1 md:max-w-2xl">
                    <section className="max-w-xl space-y-12">{children}</section>
                </div>
            </div>
        </div>
    );
}
