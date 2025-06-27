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

type SummaryForm = {
    summary_1: string;
    summary_2: string;
    summary_3: string;
    summary_4: string;
    image_1?: File | undefined;
    image_2?: File | undefined;
    image_3?: File | undefined;
    image_4?: File | undefined;
};

const SummaryContent = ({ contents }: { contents: SummaryForm | null }) => {
    const [data, setData] = useState<SummaryForm>({
        summary_1: contents?.summary_1 ?? '',
        summary_2: contents?.summary_2 ?? '',
        summary_3: contents?.summary_3 ?? '',
        summary_4: contents?.summary_4 ?? '',
        image_1: undefined,
        image_2: undefined,
        image_3: undefined,
        image_4: undefined,
    });

    const [errors, setErrors] = useState<Record<string, string | undefined>>({});
    const [processing, setProcessing] = useState(false);
    const [recentlySuccessful, setRecentlySuccessful] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});
        const formData = new FormData();

        const textFields = ['summary_1', 'summary_2', 'summary_3', 'summary_4'] as const;

        textFields.forEach((field) => {
            formData.append(field, data[field] ?? '');
        });

        const fileFields = ['image_1', 'image_2', 'image_3', 'image_4'] as const;
        fileFields.forEach((field) => {
            if (data[field]) {
                formData.append(field, data[field]!);
            }
        });

        router.post('/admin-ag/home-contents/summary', formData, {
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

    const renderField = (index: number) => {
        const summaryKey = `summary_${index}` as keyof SummaryForm;
        const imageKey = `image_${index}` as keyof SummaryForm;
        const imageValue = data[imageKey];
        const oldImage = contents?.[imageKey];

        return (
            <div className="grid gap-2" key={index}>
                <Label htmlFor={summaryKey}>Summary {index}</Label>
                <Input
                    id={summaryKey}
                    name={summaryKey}
                    value={typeof data[summaryKey] === 'string' ? data[summaryKey] : ''}
                    onChange={handleChange}
                    className="mt-1 block w-full"
                    placeholder={`Summary ${index}`}
                />
                <InputError className="mt-2" message={errors[summaryKey as string]} />

                <Input id={imageKey} type="file" name={imageKey} onChange={handleChange} className="mt-1 block w-full" />
                {imageValue instanceof File ? (
                    <img src={URL.createObjectURL(imageValue)} className="mt-2 w-20 p-1 shadow-primary" />
                ) : oldImage ? (
                    <img src={`/storage/uploads/summary/${oldImage}`} className="mt-2 w-20 p-1 shadow-primary" />
                ) : null}
                <InputError className="mt-2" message={errors[imageKey as string]} />
            </div>
        );
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Summary Content" />
            <SettingsLayout type="home">
                <div className="space-y-6">
                    <HeadingSmall title="Summary Content" description="Update your summary section content" />
                    <form onSubmit={submit} className="space-y-6" encType="multipart/form-data">
                        {[1, 2, 3, 4].map(renderField)}
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

export default SummaryContent;
