import logo from './logo.svg';
import './App.css';
import ParentInput from './ref\'s/refWithClassComp/parentInput';
import FwParentRef from './ref\'s/fwdRef/fwParentRef';
import ParentComp from './props/parentComp';
import ParentFuncComp from './state/ParentFuncComp';
import ParentClassComp from './state/ParentClassComp';
import ParentClassLC from './lifecycles/parentClassLC';
import ClassParentComponent from './PureComponents/Class/ClassParentComponent';

function App() {
  return (
    // Pure Components
    <ClassParentComponent />


    // Life Cycle Methods
    // <ParentClassLC></ParentClassLC>

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
