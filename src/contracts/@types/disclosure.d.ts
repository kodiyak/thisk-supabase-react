declare module '@friendlyss/disclosure/types' {
  export interface Type {
    'Modal.FilePicker': {
      types: string[]
      message: string
      onSelect: (files: File[]) => void
    }
  }
}
