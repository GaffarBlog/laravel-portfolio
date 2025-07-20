// TextEditor.tsx
import CodeBlock from '@tiptap/extension-code-block';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
const TextEditor = () => {
    const editor = useEditor({
        extensions: [StarterKit, CodeBlock],
        content: '',
        autofocus: true,
        editable: true,
        // injectCSS: false, // remove default styling, optional
    });

    return <EditorContent editor={editor} className="min-h-[150px] border-none p-2 whitespace-pre-wrap outline-none" />;
};

export default TextEditor;
