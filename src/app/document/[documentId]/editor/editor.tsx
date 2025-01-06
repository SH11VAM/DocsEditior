'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'


const Editor = () => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: '<p>Hello World! 🌎️</p>',
        immediatelyRender:false,
      })
  return (
    <div><EditorContent editor={editor} />
</div>
  )
}

export default Editor