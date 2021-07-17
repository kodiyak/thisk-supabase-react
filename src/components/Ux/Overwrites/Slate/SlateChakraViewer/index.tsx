import { BoxOverlay, Col } from '@friendlyss/react'
import { useMemo } from 'react'
import { createEditor, Editor } from 'slate'
import { Editable, Slate, withReact } from 'slate-react'

interface SlateChakraViewerProps {
  value: any
}

const SlateChakraViewer: React.FC<SlateChakraViewerProps> = ({ value }) => {
  const editor = useMemo(() => withReact(createEditor()), [])

  return (
    <Col pos="relative">
      <BoxOverlay zIndex={10} />
      <Slate editor={editor} value={value} onChange={() => {}}>
        <Editable contentEditable={false} />
      </Slate>
    </Col>
  )
}

export default SlateChakraViewer
