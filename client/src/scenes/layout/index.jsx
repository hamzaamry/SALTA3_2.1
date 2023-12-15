import React, { useState, useEffect } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import Sidebar from "../../components/Sidebar";
import { useGetUserQuery } from "../../state/api.js";
import Navbar from "../../components/Navbar";
import TopBar from "../../components/LandingPage/TopBar";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);
  const location = useLocation();

  useEffect(() => {
    setIsAuthenticated(false); //!!userId
  }, [userId]);

  useEffect(() => {

    const hideSidebarRoutes = ["/Signin", "/Signup" , "/home"];
    setIsSidebarOpen(!hideSidebarRoutes.includes(location.pathname));
  }, [location.pathname]);

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        {isAuthenticated ? (
          <Navbar
            user={data || {}}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        ) : (
          <TopBar />
        )}
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
