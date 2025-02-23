import * as Initializer from './Initializer';
import * as NeighborsQueryServices from './NeighborsQuery';
import * as PropertiesPanel from './PropertiesPanel';
import * as Save from './Save';

export default {
  id: 'GI',
  type: 'file',
  name: 'Files',
  desc: 'G6VP 提供的文件数据服务，数据存储在浏览器IndexDB，目前已经支持10个接口服务',
  cover: 'https://gw.alipayobjects.com/mdn/rms_0d75e8/afts/img/A*3YEZS6qSRgAAAAAAAAAAAAAAARQnAQ',
  services: {
    ...PropertiesPanel,
    ...NeighborsQueryServices,
    ...Initializer,
    ...Save,
  },
};
