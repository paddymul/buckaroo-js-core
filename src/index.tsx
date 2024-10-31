import {ColumnsEditor} from './components/ColumnsEditor';
import {WidgetDCFCell} from './components/DCFCell';
import {DFViewer} from './components/DFViewerParts/DFViewer';
import {HistogramCell} from './components/DFViewerParts/HistogramCell';
import {DependentTabs} from './components/DependentTabs';
import {OperationViewer} from './components/Operations';
import * as CommandUtils from './components/CommandUtils';
import * as utils from './components/utils';
import {StatusBar} from './components/StatusBar';



export const extraComponents = {
    ColumnsEditor,
    DependentTabs,
    OperationViewer,
    WidgetDCFCell,
    DFViewer,
    StatusBar,
    HistogramCell,
    CommandUtils,
    utils
};

//export {bakedData, extraComponents} from './buckaroo_js/index';
//export default ReactEditList;
