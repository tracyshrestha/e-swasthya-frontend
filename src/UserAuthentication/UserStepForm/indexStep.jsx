import FormContextProvider from './components/formState/State'
import UserStep from './UserStep'

const IndexStep = () => {
   return (
      <FormContextProvider>
           <UserStep/>
      </FormContextProvider>
   )
}

export default IndexStep;