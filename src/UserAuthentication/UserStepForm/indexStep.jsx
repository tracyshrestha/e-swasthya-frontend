import FormContextProvider from './components/formState/State'
import UserStep from './UserStep'

export const IndexStep = () => {
   return (
      <FormContextProvider>
           <UserStep/>
      </FormContextProvider>
   )
}

