"use client"

import { EDITOR_JS_TOOLS } from "./utils/tools";
import { createReactEditorJS } from "react-editor-js";
import { useState } from "react";

export default function Home() {
  const [blocks, setBlocks] = useState([
    {
      id: 'sheNwCUP5A',
      type: 'header',
      data: {
        text: 'Editor.js',
        level: 2,
      },
    },
    {
      id: '12iM3lqzcm',
      type: 'paragraph',
      data: {
        text: 'Hey. Meet the new Editor. On this page you can see it in action — try to edit this text.',
      },
    },
    // ...tambahkan blocks lain seperti di contoh Anda
  ]);

  const ReactEditorJS = createReactEditorJS()

  return (
    <ReactEditorJS
      tools={EDITOR_JS_TOOLS}
      defaultValue={{
        time: 1635603431943,
        blocks: blocks, // Gunakan state blocks di sini
      }}
    />
  );
}
