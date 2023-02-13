import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect, useState } from 'react';
import { TextEditorContent } from '../UserPages/4-UpdateUserArticle/UpdateUserArticle';
import backendUrl from '../listsAndReusedConsts/backendUrl';
import {
	GrBold,
	GrItalic,
	GrTextAlignFull,
	GrOrderedList,
	GrUnorderedList,
	GrRedo,
	GrUndo,
	GrVirtualStorage,
} from 'react-icons/gr';

import { RiH1, RiH2, RiTextWrap } from 'react-icons/ri';

const MenuBar = ({ editor }) => {
	if (!editor) {
		return null;
	}

	return (
		<div className='TextEditorMenu'>
			<div className='TextEditorMenuContent'>
				<div className='sectionFirst'>
					<button
						onClick={() => editor.chain().focus().setParagraph().run()}
						className={editor.isActive('paragraph') ? 'is-active' : ''}
					>
						<div className='TipTapIconsStyling'>
							<GrTextAlignFull />
						</div>
					</button>
					<button
						onClick={() => editor.chain().focus().toggleBold().run()}
						disabled={!editor.can().chain().focus().toggleBold().run()}
						className={editor.isActive('bold') ? 'is-active' : ''}
					>
						<div className='TipTapIconsStyling'>
							<GrBold />
						</div>
					</button>
					<button
						onClick={() => editor.chain().focus().toggleItalic().run()}
						disabled={!editor.can().chain().focus().toggleItalic().run()}
						className={editor.isActive('italic') ? 'is-active' : ''}
					>
						<div className='TipTapIconsStyling'>
							<GrItalic />
						</div>
					</button>
					<button
						onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
						className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
					>
						<div className='TipTapIconsStyling'>
							<RiH1 />
						</div>
					</button>
					<button
						onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
						className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
					>
						<div className='TipTapIconsStyling'>
							<RiH2 />
						</div>
					</button>
				</div>
				<div className='sectionSecond'>
					<button
						onClick={() => editor.chain().focus().toggleBulletList().run()}
						className={editor.isActive('bulletList') ? 'is-active' : ''}
					>
						<div className='TipTapIconsStyling'>
							<GrUnorderedList />
						</div>
					</button>
					<button
						onClick={() => editor.chain().focus().toggleOrderedList().run()}
						className={editor.isActive('orderedList') ? 'is-active' : ''}
					>
						<div className='TipTapIconsStyling'>
							<GrOrderedList />
						</div>
					</button>

					<button onClick={() => editor.chain().focus().setHardBreak().run()}>
						<div className='TipTapIconsStyling'>
							<RiTextWrap />
						</div>
					</button>
					<button
						onClick={() => editor.chain().focus().undo().run()}
						disabled={!editor.can().chain().focus().undo().run()}
					>
						<div className='TipTapIconsStyling'>
							<GrUndo />
						</div>
					</button>
					<button
						onClick={() => editor.chain().focus().redo().run()}
						disabled={!editor.can().chain().focus().redo().run()}
					>
						<div className='TipTapIconsStyling'>
							<GrRedo />
						</div>
					</button>
				</div>
			</div>
		</div>
	);
};

let editor;

const TipTapEditor = ({
	getContentFromTextEditor,
	setGetContentFromTextEditor,
	setarticleLengthCheck,
	articleLengthCheck,
}) => {
	editor = useEditor({
		extensions: [StarterKit],
		content: '',
		onUpdate: ({ editor }) => {
			const html = editor.getHTML();
			const plainText = editor.getText().replace(/['\n']/gi, ' ');
			const plainTextShorten = plainText.slice(0, 180);
			globalThis.localStorage.setItem(
				'textEditor',
				JSON.stringify({ html: html, plainTextShorten: plainTextShorten })
			);
			setGetContentFromTextEditor({
				html,
				plainTextShorten,
			});
			setarticleLengthCheck(plainText);
		},
	});

	return (
		<div>
			<MenuBar editor={editor} />
			<EditorContent editor={editor} />
		</div>
	);
};

export default TipTapEditor;
