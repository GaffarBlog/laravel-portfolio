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

type AboutForm = {
    title: string;
    subtitle: string;
    description: string;
    about_image: File | undefined;
};

const AboutContent = ({ contents }: { contents: AboutForm | null }) => {
    const [data, setData] = useState<AboutForm>({
        title: contents?.title ?? '',
        subtitle: contents?.subtitle ?? '',
        description: contents?.description ?? '',
        about_image: undefined,
    });

    const [errors, setErrors] = useState<Record<string, string | undefined>>({});
    const [processing, setProcessing] = useState(false);
    const [recentlySuccessful, setRecentlySuccessful] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});
        const formData = new FormData();

        const textFields = ['title', 'subtitle', 'description'] as const;

        textFields.forEach((field) => {
            formData.append(field, data[field] ?? '');
        });

        formData.append('about_image', data.about_image!);

        router.post('/admin-ag/home-contents/about', formData, {
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
            <Head title="Summary Content" />
            <SettingsLayout type="home">
                <div className="space-y-6">
                    <HeadingSmall title="Summary Content" description="Update your summary section content" />
                    <form onSubmit={submit} className="space-y-6" encType="multipart/form-data">
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
                            <Label htmlFor="subtitle">Subtitle</Label>
                            <Input
                                id="subtitle"
                                className="mt-1 block w-full"
                                value={data.subtitle}
                                onChange={handleChange}
                                autoComplete="subtitle"
                                placeholder="Subtitle"
                                name="subtitle"
                            />
                            <InputError className="mt-2" message={errors.subtitle} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="description">Description</Label>
                            <Input
                                id="description"
                                className="mt-1 block w-full"
                                value={data.description}
                                onChange={handleChange}
                                autoComplete="description"
                                placeholder="Description"
                                name="description"
                            />
                            <InputError className="mt-2" message={errors.description} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="about_image">Image</Label>
                            <Input id="about_image" className="mt-1 block w-full" onChange={handleChange} type="file" name="about_image" />

                            {data['about_image'] instanceof File ? (
                                <img src={URL.createObjectURL(data['about_image'])} className="mt-2 w-30 p-1 shadow-primary" />
                            ) : contents?.about_image ? (
                                <img src={`/storage/uploads/about/${contents?.about_image}`} className="mt-2 w-30 p-1 shadow-primary" />
                            ) : null}
                            <InputError className="mt-2" message={errors.about_image} />
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

export default AboutContent;
