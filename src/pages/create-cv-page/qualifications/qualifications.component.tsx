import { useState, useRef, ChangeEvent } from 'react';
import { Box } from "@mui/material";
// @ts-ignore
import { convertFromRaw } from 'draft-js';
// @ts-ignore
import MUIEditor, { MUIEditorState, toolbarControlTypes } from 'react-mui-draft-wysiwyg'

const QualificationsInformation: React.FC = (): JSX.Element => {
    const config = {
        toolbar: {
            style: {
                padding: 25,
                background: 'white',
            },
            controls: [
                toolbarControlTypes.undo,
                toolbarControlTypes.redo,
                toolbarControlTypes.divider,
                toolbarControlTypes.bold,
                toolbarControlTypes.italic,
                toolbarControlTypes.underline,
                toolbarControlTypes.strikethrough,
                // Include all of the default toolbar options except for fontColor
                // toolbarControlTypes.fontColor,
                // toolbarControlTypes.fontBackgroundColor,
                toolbarControlTypes.divider,
                // toolbarControlTypes.linkAdd,
                // toolbarControlTypes.linkRemove,
                // toolbarControlTypes.image,
                // toolbarControlTypes.divider,
                // toolbarControlTypes.blockType,
                toolbarControlTypes.fontSize,
                // toolbarControlTypes.fontFamily,
                toolbarControlTypes.textAlign,
                toolbarControlTypes.divider,
                toolbarControlTypes.unorderedList,
                toolbarControlTypes.orderedList
            ]
        },
    }
    const rawContent = {
        blocks: [
            {
                data: {},
                depth: 0,
                entityRanges: [],
                inlineStyleRanges: [],
                key: '2vm6d',
                text: 'Hello world',
                type: 'header-one',
            },
        ],
        entityMap: {},
    }

    const [editorState, setEditorState] = useState(
        MUIEditorState.createWithContent(
            config,
            convertFromRaw(rawContent),
        ))


    const onChange = (newState: any) => {
        setEditorState(newState)
        console.log(newState);
        console.log(editorState.data);
    }
    let ref = useRef();
    return (
        <>
            <MUIEditor
                editorState={editorState}
                onChange={onChange}
                config={config}
                ref={ref}
                onEditorStateChange={(e:ChangeEvent<HTMLInputElement>) => setEditorState(e.target.value)}


            />
        </>
    )
}

export default QualificationsInformation;