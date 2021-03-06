exports.headers =
[
    'object', 
    'material', 
    'processing', 
    'environment', 
    'use',
    'reference',
    'manifest',
    'conclusion',
    'fault_tree'
];

exports.visibility =
{
    on  : 'on',
    off : 'off'
};

exports.defaultCaseStudyTables =
[
    'manifest',
    'object_additional_prompt',
    'object_overwrite_prompt',
    'material_additional_prompt',
    'material_overwrite_prompt',
    'processing_additional_prompt',
    'processing_overwrite_prompt',
    'environment_additional_prompt',
    'environment_overwrite_prompt',
    'use_additional_prompt',
    'use_overwrite_prompt'
];

exports.defaultRecordTables =
[
    'reference',
    'manifest',
    'fault_tree',
    'conclusion',
    'object_rating',
    'object_inscription',
    'object_serial_number',
    'object_feature',
    'object_fracture_path',
    'object_fracture_mode',
    'object_fracture_surface',
    'object_fracture_feature',
    'object_fracture_loading',
    'material_alloy_designation',
    'material_grade',
    'material_full_name',
    'material_class',
    'material_crystallinity',
    'material_recyclability',
    'material_biodegradability',
    'material_toxicity',
    'processing_manufacturer',
    'processing_date',
    'processing_location',
    'processing_plant',
    'processing_treatment',
    'processing_joining',
    'processing_machining',
    'processing_shaping',
    'processing_residual_stress',
    'environment_ambient',
    'environment_light_exposure',
    'environment_geographic_location',
    'environment_weather_exposure',
    'environment_storage_location',
    'environment_interaction_stress',
    'environment_interaction_environment',
    'environment_interaction_electromagnetic',
    'environment_interaction_thermal',
    'environment_interaction_tribological',
    'environment_interaction_loading',
    'use_problem_statement',
    'use_functionality_loss',
    'use_failure_moment',
    'use_failure_operation_stage',
    'use_specification',
    'use_record',
    'use_operation',
    'use_operator',
    'use_operational_factor'
];

exports.excludedColumns =
[
    'id',
    'object_id'
];

exports.errorMessages =
{
    nullValue : 'Field cannnot have a null value',
    noFields  : 'Row does not have fields'
};
