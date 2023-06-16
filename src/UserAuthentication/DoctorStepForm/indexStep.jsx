import FormContextProvider from './components/formState/State'
import DoctorStep from './DoctorStep'

const IndexStep = () => {
   return (
      <FormContextProvider>
          <DoctorStep/>
      </FormContextProvider>
   )
}

export default IndexStep;