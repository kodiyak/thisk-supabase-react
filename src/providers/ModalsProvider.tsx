import ModalPickFiles from '../components/Ux/Modals/ModalPickFiles'

const ModalsProvider: React.FC = () => {
  const Modals = [ModalPickFiles]
  return (
    <>
      {Modals.map((Component, keyComponent) => (
        <Component key={keyComponent} />
      ))}
    </>
  )
}

export default ModalsProvider
