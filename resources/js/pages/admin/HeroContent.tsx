import HeadingSmall from '@/components/heading-small';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { SharedData, type BreadcrumbItem } from '@/types';
import { Transition } from '@headlessui/react';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Home Page Contents',
        href: '',
    },
];

type ProfileForm = {
    badge: string;
    sub_title: string;
    title: string;
    image_1: File | null;
    image_2: File | null;
    image_3: File | null;
    image_4: File | null;
    button_1: string;
    button_2: string;
};

const HeroContent = ({ mustVerifyEmail, status }: { mustVerifyEmail: boolean; status?: string }) => {
    const { auth } = usePage<SharedData>().props;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm<Required<ProfileForm>>({
        badge: '',
        sub_title: '',
        title: '',
        image_1: null,
        image_2: null,
        image_3: null,
        image_4: null,
        button_1: '',
        button_2: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch('/admin-ag/home-contents/update', {
            preserveScroll: true,
        });
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <SettingsLayout type="home">
                <div className="space-y-6">
                    <HeadingSmall title="Hero Content" description="Update your hero section content" />

                    <form onSubmit={submit} className="space-y-6" encType="multipart/form-data">
                        <div className="grid gap-2">
                            <Label htmlFor="badge">Badge</Label>
                            <Input
                                id="badge"
                                className="mt-1 block w-full"
                                value={data.badge}
                                onChange={(e) => setData('badge', e.target.value)}
                                autoComplete="badge"
                                placeholder="Badge"
                            />
                            <InputError className="mt-2" message={errors.badge} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                className="mt-1 block w-full"
                                value={data.title}
                                onChange={(e) => setData('title', e.target.value)}
                                autoComplete="title"
                                placeholder="Title"
                            />
                            <InputError className="mt-2" message={errors.title} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="sub_title">Sub Title</Label>
                            <Input
                                id="sub_title"
                                className="mt-1 block w-full"
                                value={data.sub_title}
                                onChange={(e) => setData('sub_title', e.target.value)}
                                autoComplete="sub_title"
                                placeholder="Sub Title"
                            />
                            <InputError className="mt-2" message={errors.sub_title} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="image_1">Image 1</Label>
                            <Input
                                id="image_1"
                                className="mt-1 block w-full"
                                onChange={(e) => setData('image_1', e.target.files && e.target.files[0] ? e.target.files[0] : null)}
                                autoComplete="image_1"
                                placeholder="Image 1"
                                type="file"
                            />
                            <InputError className="mt-2" message={errors.image_1} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="image_2">Image 2</Label>
                            <Input
                                id="image_2"
                                className="mt-1 block w-full"
                                onChange={(e) => setData('image_2', e.target.files && e.target.files[0] ? e.target.files[0] : null)}
                                autoComplete="image_2"
                                placeholder="Image 2"
                                type="file"
                            />
                            <InputError className="mt-2" message={errors.image_2} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="image_3">Image 3</Label>
                            <Input
                                id="image_3"
                                className="mt-1 block w-full"
                                onChange={(e) => setData('image_3', e.target.files && e.target.files[0] ? e.target.files[0] : null)}
                                autoComplete="image_3"
                                placeholder="Image 3"
                                type="file"
                            />
                            <InputError className="mt-2" message={errors.image_3} />{' '}
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="image_4">Image 4</Label>
                            <Input
                                id="image_4"
                                className="mt-1 block w-full"
                                onChange={(e) => setData('image_4', e.target.files && e.target.files[0] ? e.target.files[0] : null)}
                                autoComplete="image_4"
                                placeholder="Image 4"
                                type="file"
                            />
                            <InputError className="mt-2" message={errors.image_4} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="button_1">Button 1</Label>
                            <Input
                                id="button_1"
                                className="mt-1 block w-full"
                                value={data.button_1}
                                onChange={(e) => setData('button_1', e.target.value)}
                                autoComplete="button_1"
                                placeholder="Button 1"
                            />
                            <InputError className="mt-2" message={errors.button_1} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="button_2">Button 2</Label>
                            <Input
                                id="button_2"
                                className="mt-1 block w-full"
                                value={data.button_2}
                                onChange={(e) => setData('button_2', e.target.value)}
                                autoComplete="button_2"
                                placeholder="Button 2"
                            />
                            <InputError className="mt-2" message={errors.button_2} />
                        </div>
                        <div className="flex items-center gap-4">
                            <Button disabled={processing}>Save</Button>

                            <Transition
                                show={recentlySuccessful}
                                enter="transition ease-in-out"
                                enterFrom="opacity-0"
                                leave="transition ease-in-out"
                                leaveTo="opacity-0"
                            >
                                <p className="text-sm text-neutral-600">Saved</p>
                            </Transition>
                        </div>
                    </form>
                </div>
            </SettingsLayout>
        </AppLayout>
    );
};

export default HeroContent;
