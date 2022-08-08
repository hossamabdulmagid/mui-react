import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useRef } from "react";
import EditorToolbar, { formats } from "./edit-toolbar";




const SingleRichEditor = ({ onChange, value }: any) => {


    const modules = {
        toolbar: {
            container: [
                ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                ['blockquote', 'code-block'],
                [{ 'header': 1 }, { 'header': 2 }],               // custom button values
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'direction': 'rtl' }],                         // text direction
                [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                [{ 'align': [] }],

            ],
        },
        clipboard: { matchVisual: false }
    };


    return (
        <div className="form-group col-md-12 editor">
            <EditorToolbar Inter={'t1'} />
            <ReactQuill
                theme="snow"
                defaultValue={value}
                onChange={onChange}
                placeholder={"Write something awesome..."}
                modules={modules}
                formats={formats}
                style={{ height: '200px', display: 'block', marginBottom: '40px' }}
            />
        </div>
    );
}







export default SingleRichEditor;