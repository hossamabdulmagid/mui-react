import { Editor } from '@tinymce/tinymce-react';
import { useRef } from "react";



const RichEditor = ({ initVal, onChange }: any) => {
    const editorRef = useRef(null);

    const log = () => {
        if (editorRef.current) {
            // console.log(editorRef.current.getContent());
        }
    };

    const editorChanged = (a: any) => {
        if (a && onChange) {
            onChange(a);
        }
    }
    // onEditorChange: (a: string, editor: TinyMCEEditor) => void;
    return (
        <>
            <Editor

                apiKey="d40cl0u08wbotr0vyoqfsipstatgwi9p629vpfdpoa9zdrt1"
                onInit={(evt, editor: any) => editorRef.current = editor}
                onEditorChange={editorChanged}
                initialValue={initVal}
                init={{
                    height: 300,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: 'undo redo | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />
        </>
    );
}

export default RichEditor