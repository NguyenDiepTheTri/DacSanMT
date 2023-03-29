// routerConfig: có thể tự đặt,
import config from '~/config';

//Layout
import { HeaderOnly } from '~/layouts';

//Pages
import Home from '~/pages/Home';
// Nem chả
import NemProduct from '~/pages/NemProduct';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
// Đồ khô
import DryProduct from '~/pages/DryProduct';
import ProductDetail from '~/pages/ProductDetail';

//Puclic router
const publicRoute = [
  { path: config.routest.home, component: Home },
  { path: config.routest.nem_product, component: NemProduct },
  { path: config.routest.dry_product, component: DryProduct },
  { path: config.routest.productDetail, component: ProductDetail },
  // profile nó sẽ matches với và nó sẽ cố định, còn :nickname là partten sẽ thay đổi
  { path: config.routest.profile, component: Profile },
  // chỉ có layout là Header
  { path: config.routest.upload, component: Upload, layout: HeaderOnly },
  // k có layout
  { path: config.routest.search, component: Search, layout: null },
];

//Private Router
const privateRoute = [];

export { publicRoute, privateRoute };
