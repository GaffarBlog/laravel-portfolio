import HeadingSmall from '@/components/heading-small';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { type BreadcrumbItem } from '@/types';
import { Transition } from '@headlessui/react';
import { Head, router } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';
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
    image_1: File | undefined;
    image_1_text: string;
    image_2: File | undefined;
    image_2_text: string;
    image_3: File | undefined;
    image_3_text: string;
    image_4: File | undefined;
    image_4_text: string;
    button_1: string;
    button_2: string;
    resume: File | undefined;
};

const HeroContent = ({ contents }: { contents: ProfileForm | null }) => {
    const [data, setData] = useState<ProfileForm>({
        badge: contents?.badge ?? '',
        sub_title: contents?.sub_title ?? '',
        title: contents?.title ?? '',
        image_1: undefined,
        image_1_text: contents?.image_1_text ?? '',
        image_2: undefined,
        image_2_text: contents?.image_2_text ?? '',
        image_3: undefined,
        image_3_text: contents?.image_3_text ?? '',
        image_4: undefined,
        image_4_text: contents?.image_4_text ?? '',
        button_1: contents?.button_1 ?? '',
        button_2: contents?.button_2 ?? '',
        resume: undefined,
    });

    const [errors, setErrors] = useState<Record<string, string | undefined>>({});
    const [processing, setProcessing] = useState(false);
    const [recentlySuccessful, setRecentlySuccessful] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        setProcessing(true);

        const formData = new FormData();

        const textFields = [
            'badge',
            'sub_title',
            'title',
            'image_1_text',
            'image_2_text',
            'image_3_text',
            'image_4_text',
            'button_1',
            'button_2',
        ] as const;

        textFields.forEach((field) => {
            formData.append(field, data[field] ?? '');
        });

        const fileFields = ['image_1', 'image_2', 'image_3', 'image_4', 'resume'] as const;
        fileFields.forEach((field) => {
            if (data[field]) {
                formData.append(field, data[field]!);
            }
        });

        router.post('/admin-ag/home-contents/hero', formData, {
            preserveScroll: true,
            forceFormData: true,
            onError: (errors) => {
                setProcessing(false);
                setErrors(errors);
            },
            onSuccess: () => {
                setProcessing(false);
                setRecentlySuccessful(true);
                setTimeout(() => setRecentlySuccessful(false), 2000);
            },
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files, type } = e.target;
        if (type === 'file') {
            setData((prevData) => ({
                ...prevData,
                [name]: files && files[0] ? files[0] : undefined,
            }));
        } else {
            setData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
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
                                onChange={handleChange}
                                autoComplete="badge"
                                placeholder="Badge"
                                name="badge"
                            />
                            <InputError className="mt-2" message={errors.badge} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="title">Title</Label>
                            <Input
                                id="title"
                                className="mt-1 block w-full"
                                value={data.title}
                                onChange={handleChange}
                                autoComplete="title"
                                placeholder="Title"
                                name="title"
                            />
                            <InputError className="mt-2" message={errors.title} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="sub_title">Sub Title</Label>
                            <Input
                                id="sub_title"
                                className="mt-1 block w-full"
                                value={data.sub_title}
                                onChange={handleChange}
                                autoComplete="sub_title"
                                placeholder="Sub Title"
                                name="sub_title"
                            />
                            <InputError className="mt-2" message={errors.sub_title} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="image_1">Image 1</Label>
                            <Input
                                id="image_1_text"
                                className="mt-1 block w-full"
                                value={data.image_1_text}
                                onChange={handleChange}
                                autoComplete="image_1_text"
                                placeholder="Image 1 Text"
                                name="image_1_text"
                            />

                            <InputError className="mt-2" message={errors.image_1_text} />
                            <Input id="image_1" className="mt-1 block w-full" onChange={handleChange} type="file" name="image_1" />
                            {contents?.image_1 && (
                                <img src={`/storage/uploads/home/${contents?.image_1}`} alt="" className="mt-2 w-20 p-1 shadow-primary" />
                            )}
                            <InputError className="mt-2" message={errors.image_1} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="image_2">Image 2</Label>
                            <Input
                                id="image_2_text"
                                className="mt-1 block w-full"
                                value={data.image_2_text}
                                onChange={handleChange}
                                autoComplete="image_2_text"
                                placeholder="Image 2 Text"
                                name="image_2_text"
                            />
                            <InputError className="mt-2" message={errors.image_2_text} />
                            <Input id="image_2" className="mt-1 block w-full" onChange={handleChange} type="file" name="image_2" />
                            {contents?.image_2 && (
                                <img src={`/storage/uploads/home/${contents?.image_2}`} alt="" className="mt-2 w-20 p-1 shadow-primary" />
                            )}
                            <InputError className="mt-2" message={errors.image_2} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="image_3">Image 3</Label>
                            <Input
                                id="image_3_text"
                                className="mt-1 block w-full"
                                value={data.image_3_text}
                                onChange={handleChange}
                                autoComplete="image_3_text"
                                placeholder="Image 3 Text"
                                name="image_3_text"
                            />
                            <InputError className="mt-2" message={errors.image_3_text} />
                            <Input id="image_3" className="mt-1 block w-full" onChange={handleChange} type="file" name="image_3" />
                            {contents?.image_3 && (
                                <img src={`/storage/uploads/home/${contents?.image_3}`} alt="" className="mt-2 w-20 p-1 shadow-primary" />
                            )}
                            <InputError className="mt-2" message={errors.image_3} />{' '}
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="image_4">Image 4</Label>
                            <Input
                                id="image_4_text"
                                className="mt-1 block w-full"
                                value={data.image_4_text}
                                onChange={handleChange}
                                autoComplete="image_4_text"
                                placeholder="Image 4 Text"
                                name="image_4_text"
                            />
                            <InputError className="mt-2" message={errors.image_4_text} />
                            <Input id="image_4" className="mt-1 block w-full" onChange={handleChange} type="file" name="image_4" />
                            {contents?.image_4 && (
                                <img src={`/storage/uploads/home/${contents?.image_4}`} alt="" className="mt-2 w-20 p-1 shadow-primary" />
                            )}
                            <InputError className="mt-2" message={errors.image_4} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="resume">Resume (PDF)</Label>

                            <Input id="resume" className="mt-1" onChange={handleChange} type="file" accept="application/pdf" name="resume" />

                            <InputError className="mt-2" message={errors.resume} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="button_1">Button 1</Label>
                            <Input
                                id="button_1"
                                className="mt-1 block w-full"
                                value={data.button_1}
                                onChange={handleChange}
                                autoComplete="button_1"
                                placeholder="Button 1"
                                name="button_1"
                            />
                            <InputError className="mt-2" message={errors.button_1} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="button_2">Button 2</Label>
                            <Input
                                id="button_2"
                                className="mt-1 block w-full"
                                value={data.button_2}
                                onChange={handleChange}
                                autoComplete="button_2"
                                placeholder="Button 2"
                                name="button_2"
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
