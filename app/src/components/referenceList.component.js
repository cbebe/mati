import React                            from 'react';
import { genericHtmlClass as htmlClass} from '../constants/htmlClass.constants.js';

export default function ReferenceList ( props )
{
    const { list } = props;

    const references = list.map( ( reference, index ) =>
    {
        return (
                <p 
                key={ index }
                className={ htmlClass.referenceList.reference }>
                    { reference }
                </p>
        )
    } );

    return (
        <div className={ htmlClass.referenceList.list }>
            { references }
        </div>
    );
};