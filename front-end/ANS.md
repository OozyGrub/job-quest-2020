
### folder

Page => PersonalPage, RunningInfoPage, EmergencyPage, MedicalPage, SouvenirPage, SummaryPage
each of PersonalPage will also have component that would extend from components
Action => UserAction
Common => Common.component.tsx
Components
Helper => Store, Validator
Reducer => UserReducer, PersonalReducer, RunningInfoReducer, EmergencyReducer, MedicalReducer, SouvenirReducer
Service => UserService
index.tsx

### library

* useForm 'react-hook-form' => for create register state
* yup => for create file schema and validate file size which must be square and must has at least 300*300 pixel
* redux => handle all state
* thunk-redux => handle async dispatching (for request)
* axios => http protocol for request and response

### manage data

Using redux for create a store which will handle all the states, define action for dispatching and mutate the current state.
User store will keep state about userId and the step which has 5 steps. userId will be used to join with 5 stores.

### saving draft

Using validator first by checking each input with provided schema e.g. id number, phone number using regex
and image using yup for create file schema

after all, set the cookie header for the server to remember the session before send the request to the server. 
