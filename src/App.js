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
import ParentClassCompHOC from './HOC/ParentClassCompHOC';
import ParentRenderProp from './renderProps/ParentRenderProp';
import ParentContextComponent from './Context/ClassComponents/ParentContextComponent';
import ParentContextFucntional from './HOOKS/Context/FunctionalComponents/ParentContextFucntional';
import ParentStateFunctional from './HOOKS/State/ParentStateFunctional';
import ParentuseEffects from './HOOKS/useEffect/ParentuseEffect';
import ParentReducer from './HOOKS/Reducer/ParentReducer';
import UseCallBackParent from './HOOKS/useCallback/UseCallBackParent';
import UseMemoParent from './HOOKS/useMemo/UseMemoParent';
import UseRefParent from './HOOKS/useRef/UseRefParent';
import CustomParentHook from './HOOKS/customHooks/CustomParentHook';
import UseState from './reactRendering/UseState/UseState';
import UseReducer from './reactRendering/UseReducer/UseReducer';
import UseStateObject from './reactRendering/UseState/UseStateObject';

function App() {
  return (
    // React Render
    <UseStateObject></UseStateObject>
    // <UseReducer />
    // <UseState></UseState>


    //Hooks
    // <CustomParentHook></CustomParentHook>
    // <UseRefParent></UseRefParent>
    // <UseMemoParent></UseMemoParent>
    // <UseCallBackParent></UseCallBackParent>
    // <ParentReducer></ParentReducer>
    // <ParentContextFucntional></ParentContextFucntional>
    // <ParentuseEffects></ParentuseEffects>
    // <ParentStateFunctional></ParentStateFunctional>

    // Context
    // <ParentContextComponent></ParentContextComponent>

    // Render Props
    // <ParentRenderProp></ParentRenderProp>


    // HOC
    // <ParentClassCompHOC></ParentClassCompHOC>

    // Portals
    // <ParentPortal />


    // Pure Components
    // <ClassParentComponent />
    // <ClassParentComp />
    // <FunctionalParentComp />


    // Life Cycle Methods
    // <ParentClassLC></ParentClassLC>
    // <ParentError></ParentError>

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
