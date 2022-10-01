import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { Navbar, Footer, Sidebar, ThemeSettings, Settings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";

import "./App.css";
import { getContext } from "./contexts/ContextProvider";

const App = () => {
  const { activeMenu } = getContext();
  return (
    <div>
      <BrowserRouter>
        <main className="relative flex dark:bg-main-dark-bg">
          {/* Settings */}
          <Settings />

          {/* Sidebar */}
          {activeMenu ? (
            <div className="fixed h-screen overflow-auto bg-white w-72 sidebar dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0"> sidebar-w0</div>
          )}

          {/* Navbar */}
          <div
            className={`w-full bg-main-bg min-h-screen ${
              activeMenu ? "ml-72" : "flex-1"
            }`}
          >
            <div className="fixed w-full md:static bg-main-bg navbar">
              <Navbar />
            </div>
          </div>

          {/* routes */}
          <div>
            <Routes>
              {/* dashboard  */}
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />

              {/* pages  */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />

              {/* apps  */}
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />

              {/* charts  */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
