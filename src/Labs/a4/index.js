import React from "react";
import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingFunctions from "./PassingFunctions";
import ClickEvents from "./ClickEvents";
import PassingDataOnEvent from "./PassingDataOnEvent";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ReduxExamples from "./redux-examples";

function Assignment4() {
    
    function sayHello() {
        alert("Hello");
    }
    
    return (
        <div>
            <h1>Assignment 4</h1>
            <Add a={1} b={2} />
            <ClickEvent/>
            <PassingFunctions theFunction={sayHello}/>
            <ClickEvents/>
            <PassingDataOnEvent/>
            <EventObject/>
            <Counter/>
            <BooleanStateVariables/>
            <StringStateVariables/>
            <DateStateVariable/>
            <ObjectStateVariable/>
            <ArrayStateVariable/>
            <ReduxExamples/>
        </div>
    );
}

export default Assignment4;