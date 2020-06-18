import React                      from 'react';
import { groupedComponents }      from '../constants/groupedComponent.constants.js';
import { caseStudy }              from '../constants/caseStudy.constants.js';
import { caseStudyHtmlClass }     from '../constants/htmlClass.constants.js';
import { foreignKeys }            from '../constants/foreignKey.constants.js';
import { headers }                from '../constants/webDisplay.constants.js';
import PromptTextArea             from './promptTextArea.component.js'; 
import PromptTitle                from './promptTitle.component.js'; 
import PromptCheckboxGroup        from './promptCheckboxGroup.component.js';
import PromptRadioGroup           from './promptRadioGroup.component.js';
import PromptPairedRadioGroupList from './promptPairedRadioGroupList.component.js';
import PromptAdditionalPrompts    from './promptAdditionalPrompts.component.js';

export default function EnvironmentCaseStudyModule ( props )
{
    const 
    {
        state,
        visibility,
        additionalPrompts,
        handleModuleChange
    } = props;

    const constants      = caseStudy.fieldPrompts.environment;
    const htmlClass      = caseStudyHtmlClass.fieldPrompts;
    const htmlVisibility = caseStudyHtmlClass.visibility;

    return (
        <div className={ htmlClass.environment }>

            <div className={ htmlClass.header }>
                { headers.environment }
            </div>

            <PromptTitle 
                title={ constants.light_exposure }
                visibility={ htmlVisibility[visibility.light_exposure] }>

                <PromptCheckboxGroup
                    name="light_exposure"
                    value={ state.light_exposure }
                    handleCheckboxChange={ handleModuleChange }
                    foreignKeys={ foreignKeys.environment.light_exposure } />

                <PromptTextArea 
                    name="light_exposure_note"
                    value={ state.light_exposure_note }
                    labelVisibility={ htmlVisibility.on }
                    handleTextAreaChange={ handleModuleChange } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.ambient } 
                visibility={ htmlVisibility[visibility.ambient] }>

                <PromptCheckboxGroup
                    name="ambient"
                    value={ state.ambient }
                    handleCheckboxChange={ handleModuleChange }
                    foreignKeys={ foreignKeys.environment.ambient } />

                <PromptTextArea 
                    name="ambient_note"
                    value={ state.ambient_note }
                    labelVisibility={ htmlVisibility.on }
                    handleTextAreaChange={ handleModuleChange } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.weather_exposure }
                visibility={ htmlVisibility[visibility.weather_exposure] }>

                <PromptCheckboxGroup
                    name="weather_exposure"
                    value={ state.weather_exposure }
                    handleCheckboxChange={ handleModuleChange }
                    foreignKeys={ foreignKeys.environment.weather_exposure } />

                <PromptTextArea 
                    name="weather_exposure_note"
                    value={ state.weather_exposure_note }
                    labelVisibility={ htmlVisibility.on }
                    handleTextAreaChange={ handleModuleChange } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.storage_location }
                visibility={ htmlVisibility[visibility.storage_location] }>

                <PromptCheckboxGroup
                    name="storage_location"
                    value={ state.storage_location }
                    handleCheckboxChange={ handleModuleChange }
                    foreignKeys={ foreignKeys.environment.storage_location } />

                <PromptTextArea 
                    name="storage_location_note"
                    value={ state.storage_location_note }
                    labelVisibility={ htmlVisibility.on }
                    handleTextAreaChange={ handleModuleChange } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.geographic_location } 
                visibility={ htmlVisibility[visibility.geographic_location] }>

                <PromptTextArea 
                    name="geographic_location"
                    value={ state.geographic_location }
                    labelVisibility={ htmlVisibility.on }
                    handleTextAreaChange={ handleModuleChange } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.interaction_stress } 
                visibility={ htmlVisibility[visibility.interaction_stress] }>

                <PromptRadioGroup
                    name="interaction_stress"
                    value={ state.interaction_stress }
                    foreignKeys={ foreignKeys.environment.interaction_stress }
                    handleRadioGroupChange={ handleModuleChange } />

                <PromptTextArea 
                    name="interaction_stress_note"
                    value={ state.interaction_stress_note }
                    labelVisibility={ htmlVisibility.on }
                    handleTextAreaChange={ handleModuleChange } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.interaction_environment } 
                visibility={ htmlVisibility[visibility.interaction_environment] }>

                <PromptRadioGroup
                    name="interaction_environment"
                    value={ state.interaction_environment }
                    foreignKeys={ foreignKeys.environment.interaction_environment }
                    handleRadioGroupChange={ handleModuleChange } />

                <PromptTextArea 
                    name="interaction_environment_note"
                    value={ state.interaction_environment_note }
                    labelVisibility={ htmlVisibility.on }
                    handleTextAreaChange={ handleModuleChange } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.interaction_electromagnetic } 
                visibility={ htmlVisibility[visibility.interaction_electromagnetic] }>

                <PromptRadioGroup
                    name="interaction_electromagnetic"
                    value={ state.interaction_electromagnetic }
                    foreignKeys={ foreignKeys.environment.interaction_electromagnetic }
                    handleRadioGroupChange={ handleModuleChange } />

                <PromptTextArea 
                    name="interaction_electromagnetic_note"
                    value={ state.interaction_electromagnetic_note }
                    labelVisibility={ htmlVisibility.on }
                    handleTextAreaChange={ handleModuleChange } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.interaction_thermal } 
                visibility={ htmlVisibility[visibility.interaction_thermal] }>

                <PromptRadioGroup
                    name="interaction_thermal"
                    value={ state.interaction_thermal }
                    foreignKeys={ foreignKeys.environment.interaction_thermal }
                    handleRadioGroupChange={ handleModuleChange } />

                <PromptTextArea 
                    name="interaction_thermal_note"
                    value={ state.interaction_thermal_note }
                    labelVisibility={ htmlVisibility.on }
                    handleTextAreaChange={ handleModuleChange } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.interaction_tribological } 
                visibility={ htmlVisibility[visibility.interaction_tribological] }>

                <PromptRadioGroup
                    name="interaction_tribological"
                    value={ state.interaction_tribological }
                    foreignKeys={ foreignKeys.environment.interaction_tribological }
                    handleRadioGroupChange={ handleModuleChange } />

                <PromptTextArea 
                    name="interaction_tribological_note"
                    value={ state.interaction_tribological_note }
                    labelVisibility={ htmlVisibility.on }
                    handleTextAreaChange={ handleModuleChange } />
            </PromptTitle>

            <PromptTitle 
                title={ constants.loading }
                visibility={ htmlVisibility[visibility.interaction_loading] }>

                <PromptPairedRadioGroupList
                    statekey="loading"
                    buttonName="loading_button"
                    pairedRadioGroup={ state.loading }
                    pairedData={ groupedComponents.loading }
                    handleChange={ handleModuleChange } />

                <PromptTextArea 
                    name="loading_note"
                    value={ state.loading_note }
                    labelVisibility={ htmlVisibility.on }
                    handleTextAreaChange={ handleModuleChange } />
            </PromptTitle>

            <PromptAdditionalPrompts
                name="environment"
                value={ state.additionalPromptText }
                prompts={ additionalPrompts } 
                handleChange={ handleModuleChange }/>

        </div>  
    )

};