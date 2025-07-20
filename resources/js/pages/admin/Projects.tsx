import EditSkillModal from '@/components/admin/skills/EditSkillModal';
import TextEditor from '@/components/editor/Editor';
import Heading from '@/components/heading';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem, SkillFormData } from '@/types';
import { Head, router } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Home Page Contents',
        href: '',
    },
];
interface ProjectFormData {
    title: string;
    image?: File | null;
    description?: string;
    tags?: string;
    live_url?: string;
    github_url?: string;
}
const Projects = ({ projects }: any) => {
    const [data, setData] = useState<ProjectFormData>({ title: '', image: null, description: '', tags: '', live_url: '', github_url: '' });

    const [errors, setErrors] = useState<Record<string, string | undefined>>({});

    const [processing, setProcessing] = useState(false);
    const [recentlySuccessful, setRecentlySuccessful] = useState(false);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});
        const formData = new FormData();
        formData.append('title', data.title ?? '');
        formData.append('description', data.description ?? '');
        formData.append('tags', data.tags ?? '');
        formData.append('live_url', data.live_url ?? '');
        formData.append('github_url', data.github_url ?? '');
        if (data.image) {
            formData.append('image', data.image);
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
                setData({ title: '', image: null, description: '', tags: '', live_url: '', github_url: '' });
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
            <Head title="Projects" />
            <div className="px-4 py-6">
                <TextEditor />
                <Heading title="Projects Content" description="Manage your skills." />
                <Card className="px-4 py-6">
                    <form onSubmit={submit} className="space-y-6" encType="multipart/form-data">
                        <div className="grid gap-2">
                            <Label htmlFor="project_title">Project Title</Label>
                            <Input
                                id="project_title"
                                className="mt-1 block w-full"
                                value={data.title}
                                onChange={handleChange}
                                autoComplete="project_title"
                                placeholder="Project Title"
                                name="title"
                            />
                            <InputError className="mt-2" message={errors.title} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="project_image">Project Images</Label>
                            <Input id="project_image" className="mt-1 block w-full" onChange={handleChange} type="file" name="project_image" />
                            {data.image instanceof File && <img src={URL.createObjectURL(data.image)} className="mt-2 w-20 p-1 shadow-primary" />}
                            <InputError className="mt-2" message={errors.project_image} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="description">Description</Label>
                            {/* <Input id="description" className="mt-1 block w-full" onChange={handleChange} type="text" name="description" /> */}
                            <Textarea id="description" onChange={handleChange} name="description" />
                            <InputError className="mt-2" message={errors.description} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="tags">Tags</Label>
                            <Input
                                id="tags"
                                className="mt-1 block w-full"
                                value={data.tags}
                                onChange={handleChange}
                                autoComplete="tags"
                                placeholder="Project Title"
                                name="tags"
                            />
                            <InputError className="mt-2" message={errors.tags} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="live_url">Live URL</Label>
                            <Input
                                id="live_url"
                                className="mt-1 block w-full"
                                value={data.live_url}
                                onChange={handleChange}
                                autoComplete="live_url"
                                placeholder="Project Live URL"
                                name="live_url"
                            />
                            <InputError className="mt-2" message={errors.live_url} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="github_url">Github URL</Label>
                            <Input
                                id="github_url"
                                className="mt-1 block w-full"
                                value={data.github_url}
                                onChange={handleChange}
                                autoComplete="github_url"
                                placeholder="Project Github URL"
                                name="github_url"
                            />
                            <InputError className="mt-2" message={errors.github_url} />
                        </div>
                        <div className="flex items-center gap-4">
                            <Button disabled={processing}>Save</Button>
                        </div>
                    </form>
                </Card>

                <Card className="mt-6 px-4 py-6">
                    <Heading title="Projects List" description="List of all skills." />
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
                            {/* {skills.map((skill: any, index: number) => (
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
                            ))} */}
                        </TableBody>
                    </Table>
                </Card>

                <EditSkillModal openEditDialog={openEditDialog} setOpenEditDialog={setOpenEditDialog} editData={editData} setEditData={setEditData} />
            </div>
        </AppLayout>
    );
};

export default Projects;
