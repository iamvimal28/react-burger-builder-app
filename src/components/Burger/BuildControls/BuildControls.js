import React from 'react';
import './BuildControls.scss';
import BuildControl from '../BuildControls/BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    <div className="BuildControls">
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                added={() => props.addIngredients(ctrl.type)}
                removed={() => props.removeIngredients(ctrl.type)}
                disabledInfo = {props.disabledInfo[ctrl.type]}
                />
        ))}
        <button className="OrderButton" disabled={!props.purchasebale}>ORDER NOW</button>
    </div>
);

export default buildControls;