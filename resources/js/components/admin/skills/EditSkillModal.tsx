import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { router } from '@inertiajs/react';
import { FormEventHandler, useState } from 'react';
type EditSkillModalProps = {
    openEditDialog: boolean;
    setOpenEditDialog: (open: boolean) => void;
    editData: any;
    setEditData: (data: any) => void;
};
const EditSkillModal = ({ openEditDialog, setOpenEditDialog, editData, setEditData }: EditSkillModalProps) => {
    const [errors, setErrors] = useState<Record<string, string | undefined>>({});
    const [processing, setProcessing] = useState(false);
    const [recentlySuccessful, setRecentlySuccessful] = useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, files, type } = e.target as HTMLInputElement;
        if (type === 'file') {
            setEditData((prevData: any) => ({
                ...prevData,
                [name]: files && files[0] ? files[0] : undefined,
            }));
        } else {
            setEditData((prevData: any) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});
        const formData = new FormData();
        formData.append('name', editData.name ?? '');
        formData.append('description', editData.description ?? '');
        formData.append('type', editData.type ?? 'skill');
        formData.append('parent_id', editData.parent_id?.toString() ?? '');

        if (editData.icon) {
            formData.append('icon', editData.icon);
        }

        router.post('/admin-ag/skills-update', formData, {
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
                setOpenEditDialog(false);
            },
        });
    };
    return (
        <>
            <Dialog open={openEditDialog} onOpenChange={setOpenEditDialog}>
                <form>
                    <DialogContent className="sm:max-w-[425px] md:max-w-[600px]">
                        <DialogHeader>
                            <DialogTitle>Edit Skill</DialogTitle>
                            <DialogDescription>Make changes to the skill here. </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="skill_name">Name</Label>
                                <Input
                                    id="skill_name"
                                    className="mt-1 block w-full"
                                    value={editData.name}
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
                                    onValueChange={(value) => setEditData((prev: any) => ({ ...prev, type: value as 'featured' | 'tab' | 'skill' }))}
                                >
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="skill" id="edit_skill" />
                                        <Label htmlFor="edit_skill">Skill</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="featured" id="edit_featured" />
                                        <Label htmlFor="edit_featured">Featured</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="tab" id="edit_tab" />
                                        <Label htmlFor="edit_tab">Tab</Label>
                                    </div>
                                </RadioGroup>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="skill_icon">Icon</Label>
                                <Input id="icon" className="mt-1 block w-full" onChange={handleChange} type="file" name="icon" />
                                {editData.icon instanceof File && (
                                    <img src={URL.createObjectURL(editData.icon)} className="mt-2 w-20 p-1 shadow-primary" />
                                )}
                                <InputError className="mt-2" message={errors.icon} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="description">Description</Label>
                                {/* <Input id="description" className="mt-1 block w-full" onChange={handleChange} type="text" name="description" /> */}
                                <Textarea id="description" onChange={handleChange} name="description" />
                                <InputError className="mt-2" message={errors.description} />
                            </div>
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <Button disabled={processing} type="submit">
                                Save changes
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </form>
            </Dialog>
        </>
    );
};

export default EditSkillModal;
