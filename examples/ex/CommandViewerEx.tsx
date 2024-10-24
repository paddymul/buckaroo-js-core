import * as React from 'react';

import { bakedData, extraComponents } from 'buckaroo-js-core';


export default function Simple() {
    return (
        <extraComponents.OperationViewer
            operations={bakedData.bakedOperations}
            setOperations={(foo: unknown) => {
                console.log('setCommands sent', foo);
            }}
            activeColumn={'foo-column'}
            allColumns={['foo-col', 'bar-col', 'baz-col']}
            commandConfig={bakedData.bakedCommandConfig}
        />
    );
}
