import HeadingSmall from '@/components/heading-small';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';
import { type BreadcrumbItem } from '@/types';
import { Transition } from '@headlessui/react';
import { Head, router } from '@inertiajs/react';
import { Plus } from 'lucide-react';
import { FormEventHandler, useState } from 'react';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Home Page Contents',
        href: '',
    },
];
type SkillFormData = {
    title: string;
    image: File | null;
};
const SkillsContent = ({ contents }: any) => {
    const [data, setData] = useState<SkillFormData[]>([...contents]);

    const [errors, setErrors] = useState<Record<string, string | undefined>>({});

    const [processing, setProcessing] = useState(false);
    const [recentlySuccessful, setRecentlySuccessful] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});
        const formData = new FormData();

        data.forEach((field, index) => {
            formData.append(`skills[${index}]`, field.title ?? '');
            if (field.image instanceof File) {
                formData.append(`images[${index}]`, field.image);
            }
        });

        router.post('/admin-ag/home-contents/skills', formData, {
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { name, value, files, type } = e.target;

        if (type === 'file') {
            setData((prevData) => {
                const newData = [...prevData];
                newData[index] = {
                    ...newData[index],
                    [name]: files && files[0] ? files[0] : undefined,
                };
                return newData;
            });
        } else {
            setData((prevData) => {
                const newData = [...prevData];
                newData[index] = {
                    ...newData[index],
                    [name]: value,
                };
                return newData;
            });
        }
    };

    // add skills inputs
    const addSkill = () => {
        setData((prevData) => [
            ...prevData,
            {
                title: '',
                image: null,
            },
        ]);
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Summary Content" />
            <SettingsLayout type="home">
                <div className="space-y-6">
                    <Button size="icon" className="float-right" onClick={addSkill}>
                        <Plus className="h-4 w-4" />
                    </Button>
                    <HeadingSmall title="Summary Content" description="Update your summary section content" />

                    <form onSubmit={submit} className="space-y-6" encType="multipart/form-data">
                        {data.map((item, index) => (
                            <div className="grid gap-2" key={index}>
                                {index > 0 && <Separator className="my-6" />}
                                <Label htmlFor={`title-${index}`}>Skill {index + 1} Title</Label>
                                <Input
                                    id={`title-${index}`}
                                    className="mt-1 block w-full"
                                    value={item?.title}
                                    onChange={(event) => handleChange(event, index)}
                                    autoComplete="title"
                                    placeholder="Title"
                                    name="title"
                                />
                                <InputError className="mt-2" message={errors[`skills.${index}`]} />
                                <Label htmlFor={`image-${index}`}>Skill {index + 1} Image</Label>
                                <Input
                                    id={`image-${index}`}
                                    className="mt-1 block w-full"
                                    onChange={(event) => handleChange(event, index)}
                                    type="file"
                                    name="image"
                                />
                                {/* {item?.image && <img src={`/storage/uploads/skills/${item?.image}`} className="mt-2 w-30 p-1 shadow-primary" />} */}
                                {item?.image instanceof File ? (
                                    <img src={URL.createObjectURL(item?.image)} className="mt-2 w-20 p-1 shadow-primary" />
                                ) : (
                                    item?.image && <img src={`/storage/uploads/skills/${item?.image}`} className="mt-2 w-20 p-1 shadow-primary" />
                                )}
                                <InputError className="mt-2" message={errors[`images.${index}`]} />
                            </div>
                        ))}
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

export default SkillsContent;
