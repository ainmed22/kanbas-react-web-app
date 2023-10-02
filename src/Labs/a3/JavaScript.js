import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import { ES5Functions, ArrowFunctions, ImpliedReturn, FunctionParenthesisAndParameters } from './WorkingWithFunctions';
import {
  WorkingWithArrays,
  ArrayIndexAndLength,
  AddingAndRemovingDataToFromArrays,
  ForLoops,
  MapFunction,
  JsonStringify,
  FindFunction,
  FindIndex,
  FilterFunction,
} from './WorkingWithArrays';
import TemplateLiterals from "./TemplateLiterals";
import House from "./House";
import Spread from "./Spread";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";

function JavaScript() {
    console.log('Hello World!');
    return(
        <div>
            <h1>JavaScript</h1>
            <VariablesAndConstants/>
            <VariableTypes/>
            <BooleanVariables/>
            
            <IfElse/>
            <TernaryOperator/>
            
            <ES5Functions/>
            <ArrowFunctions/>
            <ImpliedReturn/>
            <FunctionParenthesisAndParameters/>

            <WorkingWithArrays/>
            <ArrayIndexAndLength/>
            <AddingAndRemovingDataToFromArrays/>
            <ForLoops/>
            <MapFunction/>
            <JsonStringify/>
            <FindFunction/>
            <FindIndex/>
            <FilterFunction/>
            
            <TemplateLiterals/>
            
            <House/>
            <Spread/>
            
            <Destructing/>
            <FunctionDestructing/>

        </div>
    );
}
export default JavaScript