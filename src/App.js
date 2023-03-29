import { Fragment } from 'react';
// Routes là cha, Route là con
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//import './App.css';
// publicRoute trong ~/routers/index.js
import { publicRoute } from '~/routes';
// đã cấu hình bên index.js của layouts, do đã cấu hình bên index.js nên k cần {}
import DefaultLayout from '~/layouts';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {publicRoute.map((route, index) => {
            // ban đầu để là DefaultLayout
            let Layout = DefaultLayout;

            //nếu có layout
            if (route.layout) {
              Layout = route.layout;
              //ngoài ra nếu layout === null
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            // Page viết hoa : JSX, route.component tức là các page
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  // layout đã ôm cái Page lại
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
