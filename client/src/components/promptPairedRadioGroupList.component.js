import React                  from 'react';
import { createUniqueId }     from '../helpers.js';
import { caseStudy }          from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass } from '../constants/htmlClass.constants.js'; 
import PromptRadioGroup       from './promptRadioGroup.component.js';

export default function PromptPairedRadioGroupList ( props )
{
    const 
    {
        statekey,
        buttonName,
        pairedData,
        pairedRadioGroup,
        handleChange
    } = props;

    const radioGroups = [];
    const htmlClass   = caseStudyHtmlClass.fieldPrompts;

    // pairedRadioGroup is a Map. Group is an object at an 
    // key in the map, mapkey is the key.
    pairedRadioGroup.forEach( ( group, mapkey ) =>
    {
        radioGroups.push( 
            <div
                className={ htmlClass.pairedRadioGroup } 
                key={ createUniqueId() }>
                <PromptRadioGroup
                    mapkey={ mapkey }
                    statekey={ statekey }
                    name={ pairedData[0].name }
                    value={ group[pairedData[0].name] }
                    foreignKeys={ pairedData[0].foreignKeys }
                    handleRadioGroupChange={ handleChange } />
                <PromptRadioGroup 
                    mapkey={ mapkey }
                    statekey={ statekey }
                    name={ pairedData[1].name }
                    value={ group[pairedData[1].name] }
                    foreignKeys={ pairedData[1].foreignKeys }
                    handleRadioGroupChange={ handleChange } />
            </div>
        ) 
    } );

    return (
        <div>
            { radioGroups }
            <button
                className={ htmlClass.button }
                type="button" 
                name={ buttonName }
                statekey={ statekey }
                onClick={ handleChange }>
                { caseStudy.add }
            </button>
        </div>
    );

};