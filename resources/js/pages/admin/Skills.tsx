import EditSkillModal from '@/components/admin/skills/EditSkillModal';
import Heading from '@/components/heading';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, SkillFormData } from '@/types';
import { Transition } from '@headlessui/react';
import { Head, router } from '@inertiajs/react';
import { NotebookPen, Trash } from 'lucide-react';
import { FormEventHandler, useState } from 'react';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Home Page Contents',
        href: '',
    },
];

const Skills = ({ skills, parent_id }: any) => {
    const [data, setData] = useState<SkillFormData>({ name: '', icon: null, parent_id, type: 'skill' });

    const [errors, setErrors] = useState<Record<string, string | undefined>>({});

    const [processing, setProcessing] = useState(false);
    const [recentlySuccessful, setRecentlySuccessful] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});
        const formData = new FormData();
        formData.append('name', data.name ?? '');
        formData.append('description', data.description ?? '');
        formData.append('type', data.type ?? 'skill');
        formData.append('parent_id', data.parent_id?.toString() ?? '');

        if (data.icon) {
            formData.append('icon', data.icon);
        }

        router.post('/admin-ag/skills-add', formData, {
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
                setData({ name: '', icon: null, parent_id, type: 'skill' });
            },
        });
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, files, type } = e.target as HTMLInputElement;
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

    const [editData, setEditData] = useState<SkillFormData>({ name: '', icon: null, description: '', parent_id: undefined, type: 'skill' });
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const editSkill = (skill: any) => {
        setEditData({
            name: skill.name,
            icon: null,
            description: skill.description,
            parent_id: skill.parent_id,
            type: skill.type,
            editId: skill.id,
        });
        setOpenEditDialog(true);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Skills" />
            <div className="px-4 py-6">
                <Heading title="Skills Content" description="Manage your skills." />
                <Card className="px-4 py-6">
                    <form onSubmit={submit} className="space-y-6" encType="multipart/form-data">
                        <div className="grid gap-2">
                            <Label htmlFor="skill_name">Name</Label>
                            <Input
                                id="skill_name"
                                className="mt-1 block w-full"
                                value={data.name}
                                onChange={handleChange}
                                autoComplete="skill_name"
                                placeholder="Skill Name"
                                name="name"
                            />
                            <InputError className="mt-2" message={errors.name} />
                        </div>
                        <div className="grid gap-2">
                            <RadioGroup
                                defaultValue="skill"
                                name="type"
                                className="flex items-center space-x-2"
                                onValueChange={(value) => setData((prev) => ({ ...prev, type: value as 'featured' | 'tab' | 'skill' }))}
                            >
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="skill" id="skill" />
                                    <Label htmlFor="skill">Skill</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="featured" id="featured" />
                                    <Label htmlFor="featured">Featured</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="tab" id="tab" />
                                    <Label htmlFor="tab">Tab</Label>
                                </div>
                            </RadioGroup>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="skill_icon">Icon</Label>
                            <Input id="icon" className="mt-1 block w-full" onChange={handleChange} type="file" name="icon" />
                            {data.icon instanceof File && <img src={URL.createObjectURL(data.icon)} className="mt-2 w-20 p-1 shadow-primary" />}
                            <InputError className="mt-2" message={errors.icon} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="description">Description</Label>
                            {/* <Input id="description" className="mt-1 block w-full" onChange={handleChange} type="text" name="description" /> */}
                            <Textarea id="description" onChange={handleChange} name="description" />
                            <InputError className="mt-2" message={errors.description} />
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
                </Card>

                <Card className="mt-6 px-4 py-6">
                    <Heading title="Skills List" description="List of all skills." />
                    <Table>
                        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">#</TableHead>
                                <TableHead>Skill Name</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Icon</TableHead>
                                <TableHead className="w-5">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {skills.map((skill: any, index: number) => (
                                <TableRow key={skill.id}>
                                    <TableCell className="font-medium">{index + 1}</TableCell>
                                    <TableCell>{skill.name}</TableCell>
                                    <TableCell>{skill.type}</TableCell>
                                    <TableCell>
                                        {skill.icon && (
                                            <img src={`/storage/uploads/skills/${skill.icon}`} alt={skill.name} className="w-12 p-1 shadow-primary" />
                                        )}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <button onClick={() => editSkill(skill)} className="mr-2 text-blue-600">
                                            <NotebookPen className="h-4 w-4" />
                                        </button>
                                        <button className="text-primary">
                                            <Trash className="h-4 w-4" />
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Card>

                <EditSkillModal openEditDialog={openEditDialog} setOpenEditDialog={setOpenEditDialog} editData={editData} setEditData={setEditData} />
            </div>
        </AppLayout>
    );
};

export default Skills;
