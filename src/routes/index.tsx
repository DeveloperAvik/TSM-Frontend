import App from "@/App";
import adminLyouts from "@/components/layout/AdminLyouts";
import About from "@/pages/About";
import Analytics from "@/pages/Analytics";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "about",
                Component: About
            },
        ],
    }, 
    {
        Component: adminLyouts,
        path:"admin",
        children: [
            {
                path:"analytics",
                Component: Analytics
            }
        ]
    }
]);
