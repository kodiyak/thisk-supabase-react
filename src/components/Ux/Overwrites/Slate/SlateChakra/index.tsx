import { useMemo, useState } from 'react'
import { createEditor, Descendant } from 'slate'
import { Editable, Slate, withReact } from 'slate-react'

interface SlateChakraProps {
  onChange?: (value: Descendant[]) => void
}

const SlateChakra: React.FC<SlateChakraProps> = ({ onChange }) => {
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState<Descendant[]>([
    {
      type: 'paragraph',
      children: [{ text: '' }]
    }
  ])

  return (
    <>
      <Slate
        editor={editor}
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
          onChange?.(newValue)
        }}
      >
        <Editable
          style={{ height: 140, padding: '1.3em', overflowY: 'auto' }}
          onKeyDown={(event) => {
            if (event.key === '&') {
              // Prevent the ampersand character from being inserted.
              event.preventDefault()
              // Execute the `insertText` method when the event occurs.
              editor.insertText('and')
            }
          }}
        />
      </Slate>
    </>
  )
}

export default SlateChakra
