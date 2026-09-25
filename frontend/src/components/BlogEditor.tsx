"use client";

import { useRef, useState } from "react";
import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableHeader from "@tiptap/extension-table-header";
import TableCell from "@tiptap/extension-table-cell";
import { api, API_ORIGIN } from "@/lib/api";

interface Props {
  value: string;
  onChange: (html: string) => void;
}

function ToolbarButton({
  onClick,
  active,
  disabled,
  label,
  title,
}: {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  label: string;
  title: string;
}) {
  return (
    <button
      type="button"
      title={title}
      disabled={disabled}
      onClick={onClick}
      className={`rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-30 ${
        active
          ? "bg-brand-600 text-white"
          : "text-slate-600 hover:bg-slate-100 hover:text-navy-900"
      }`}
    >
      {label}
    </button>
  );
}

function Divider() {
  return <span className="mx-1 h-5 w-px self-center bg-slate-200" />;
}

function Toolbar({ editor }: { editor: Editor | null }) {
  const fileInput = useRef<HTMLInputElement>(null);

  if (!editor) return null;

  const addLink = () => {
    const prev = editor.getAttributes("link").href as string | undefined;
    const url = window.prompt("Link URL", prev ?? "https://");
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  };

  const pickImage = () => fileInput.current?.click();

  const onImageSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    try {
      const { url } = await api.upload<{ url: string }>(
        "/admin/blog/upload-image",
        file
      );
      editor.chain().focus().setImage({ src: `${API_ORIGIN}${url}` }).run();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Image upload failed");
    }
  };

  const insertTable = () =>
    editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();

  return (
    <div className="flex flex-wrap items-center gap-0.5 border-b border-slate-200 bg-slate-50 px-2 py-2">
      <ToolbarButton
        label="B"
        title="Bold"
        active={editor.isActive("bold")}
        onClick={() => editor.chain().focus().toggleBold().run()}
      />
      <ToolbarButton
        label="I"
        title="Italic"
        active={editor.isActive("italic")}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      />
      <ToolbarButton
        label="U"
        title="Underline"
        active={editor.isActive("underline")}
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      />
      <ToolbarButton
        label="S"
        title="Strikethrough"
        active={editor.isActive("strike")}
        onClick={() => editor.chain().focus().toggleStrike().run()}
      />
      <Divider />
      <ToolbarButton
        label="H2"
        title="Heading 2"
        active={editor.isActive("heading", { level: 2 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      />
      <ToolbarButton
        label="H3"
        title="Heading 3"
        active={editor.isActive("heading", { level: 3 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      />
      <ToolbarButton
        label="H4"
        title="Heading 4"
        active={editor.isActive("heading", { level: 4 })}
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
      />
      <ToolbarButton
        label="¶"
        title="Paragraph"
        active={editor.isActive("paragraph")}
        onClick={() => editor.chain().focus().setParagraph().run()}
      />
      <Divider />
      <ToolbarButton
        label="Quote"
        title="Blockquote"
        active={editor.isActive("blockquote")}
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
      />
      <ToolbarButton
        label="Code"
        title="Code block"
        active={editor.isActive("codeBlock")}
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
      />
      <ToolbarButton
        label="•—"
        title="Bullet list"
        active={editor.isActive("bulletList")}
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      />
      <ToolbarButton
        label="1—"
        title="Numbered list"
        active={editor.isActive("orderedList")}
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      />
      <Divider />
      <ToolbarButton
        label="Left"
        title="Align left"
        active={editor.isActive({ textAlign: "left" })}
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
      />
      <ToolbarButton
        label="Center"
        title="Align center"
        active={editor.isActive({ textAlign: "center" })}
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
      />
      <Divider />
      <ToolbarButton
        label="Link"
        title="Insert link"
        active={editor.isActive("link")}
        onClick={addLink}
      />
      <ToolbarButton label="Image" title="Insert image" onClick={pickImage} />
      <ToolbarButton label="Table" title="Insert table" onClick={insertTable} />
      <input
        ref={fileInput}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/gif"
        className="hidden"
        onChange={onImageSelected}
      />
      <Divider />
      <ToolbarButton
        label="Undo"
        title="Undo"
        disabled={!editor.can().undo()}
        onClick={() => editor.chain().focus().undo().run()}
      />
      <ToolbarButton
        label="Redo"
        title="Redo"
        disabled={!editor.can().redo()}
        onClick={() => editor.chain().focus().redo().run()}
      />
    </div>
  );
}

function TableControls({ editor }: { editor: Editor | null }) {
  if (!editor || !editor.isActive("table")) return null;

  return (
    <div className="flex flex-wrap items-center gap-0.5 border-b border-slate-200 bg-brand-50 px-2 py-1.5">
      <span className="mr-1 text-xs font-semibold uppercase tracking-wide text-brand-600">
        Table
      </span>
      <ToolbarButton
        label="+ Row"
        title="Add row after"
        onClick={() => editor.chain().focus().addRowAfter().run()}
      />
      <ToolbarButton
        label="+ Col"
        title="Add column after"
        onClick={() => editor.chain().focus().addColumnAfter().run()}
      />
      <ToolbarButton
        label="− Row"
        title="Delete current row"
        onClick={() => editor.chain().focus().deleteRow().run()}
      />
      <ToolbarButton
        label="− Col"
        title="Delete current column"
        onClick={() => editor.chain().focus().deleteColumn().run()}
      />
      <Divider />
      <ToolbarButton
        label="Delete Table"
        title="Delete the whole table"
        onClick={() => editor.chain().focus().deleteTable().run()}
      />
    </div>
  );
}

function uploadImageIntoView(
  view: import("@tiptap/pm/view").EditorView,
  file: File,
  pos: number,
  onStart: () => void,
  onDone: () => void
) {
  onStart();
  api
    .upload<{ url: string }>("/admin/blog/upload-image", file)
    .then(({ url }) => {
      const node = view.state.schema.nodes.image.create({
        src: `${API_ORIGIN}${url}`,
      });
      const tr = view.state.tr.insert(Math.min(pos, view.state.doc.content.size), node);
      view.dispatch(tr);
    })
    .catch((err) => {
      alert(err instanceof Error ? err.message : "Image upload failed");
    })
    .finally(onDone);
}

export default function BlogEditor({ value, onChange }: Props) {
  const [uploadingCount, setUploadingCount] = useState(0);
  const bumpUploading = (delta: number) =>
    setUploadingCount((c) => Math.max(0, c + delta));

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({ heading: { levels: [2, 3, 4] } }),
      Underline,
      Link.configure({ openOnClick: false, autolink: true }),
      Image,
      Placeholder.configure({ placeholder: "Start writing your story…" }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: value,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
    editorProps: {
      attributes: {
        class: "blog-content min-h-[420px] px-6 py-6 focus:outline-none",
      },
      handleDrop(view, event, _slice, moved) {
        if (moved) return false; // reordering existing content, not a file drop
        const files = Array.from(event.dataTransfer?.files ?? []).filter((f) =>
          f.type.startsWith("image/")
        );
        if (files.length === 0) return false;
        event.preventDefault();
        const coords = view.posAtCoords({ left: event.clientX, top: event.clientY });
        const pos = coords?.pos ?? view.state.selection.from;
        files.forEach((file) =>
          uploadImageIntoView(view, file, pos, () => bumpUploading(1), () => bumpUploading(-1))
        );
        return true;
      },
      handlePaste(view, event) {
        const files = Array.from(event.clipboardData?.items ?? [])
          .filter((item) => item.type.startsWith("image/"))
          .map((item) => item.getAsFile())
          .filter((f): f is File => f !== null);
        if (files.length === 0) return false;
        event.preventDefault();
        const pos = view.state.selection.from;
        files.forEach((file) =>
          uploadImageIntoView(view, file, pos, () => bumpUploading(1), () => bumpUploading(-1))
        );
        return true;
      },
    },
  });

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <Toolbar editor={editor} />
      <TableControls editor={editor} />
      <div className="relative">
        <EditorContent editor={editor} />
        {uploadingCount > 0 && (
          <div className="absolute right-3 top-3 rounded-full bg-navy-900/90 px-3 py-1 text-xs font-medium text-white shadow">
            Uploading image…
          </div>
        )}
      </div>
      <p className="border-t border-slate-100 px-4 py-2 text-xs text-slate-400">
        Tip: paste a screenshot or drag an image file straight into the text — it uploads automatically.
      </p>
    </div>
  );
}
