import FormContextProvider from './components/formState/State'
import DoctorStep from './DoctorStep'

export const IndexStep = () => {
   return (
      <FormContextProvider>
          <DoctorStep/>
      </FormContextProvider>
   )
}

