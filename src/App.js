import logo from './logo.svg';
import './App.css';
import ParentInput from './ref\'s/refWithClassComp/parentInput';
import FwParentRef from './ref\'s/fwdRef/fwParentRef';
import ParentComp from './props/parentComp';
import ParentFuncComp from './state/ParentFuncComp';
import ParentClassComp from './state/ParentClassComp';
import ParentClassLC from './lifecycles/parentClassLC';
import ClassParentComponent from './PureComponents/Class/ClassParentComponent';
import FunctionalParentComp from './PureComponents/functional/FunctionalParentComp';
import ClassParentComp from './PureComponents/functional/ClassParentComp';
import ParentPortal from './Portals/ParentPortal';
import ParentError from './lifecycles/Errors/ParentError';
function App() {
  return (



    // Portals
    // <ParentPortal />


    // Pure Components
    // <ClassParentComponent />
    // <ClassParentComp />
    // <FunctionalParentComp />


    // Life Cycle Methods
    // <ParentClassLC></ParentClassLC>
    <ParentError></ParentError>

    //State
    // <ParentClassComp></ParentClassComp>
    // <ParentFuncComp></ParentFuncComp>

    // Props
    // <ParentComp></ParentComp>

    // Refs
    // <FwParentRef />
    // <ParentInput />
  );
}

export default App;
