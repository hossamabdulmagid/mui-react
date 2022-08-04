import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useRef } from "react";
import EditorToolbar, { modules, formats } from "./edit-toolbar";




const RichEditor = ({ onChange, value }: any) => {


    return (
        <div className="form-group col-md-12 editor">
            <EditorToolbar toolbarId={'t1'} />
            <ReactQuill
                theme="snow"
                defaultValue={value}
                onChange={onChange}
                placeholder={"Write something awesome..."}
                modules={modules('t1')}
                formats={formats}
                style={{ height: '200px' }}
            />
        </div>




    );
}







export default RichEditor