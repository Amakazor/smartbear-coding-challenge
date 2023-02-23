import { Layout } from "@components/layout";
import { Home, Path, Paths, Tag, Tags } from "@routes";
import { stringParameterLoader } from "@utility/loaders/string-parameter-loader";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [{
            path: "/",
            element: <Home/>,
        }, {
            path: "/paths",
            element: <Paths/>,
        }, {
            path: "/paths/:pathId",
            element: <Path/>,
            loader: ({ params }) => stringParameterLoader(params, "pathId"),
        }, {
            path: "/tags",
            element: <Tags/>,
        }, {
            path: "/tags/:tagId",
            element: <Tag/>,
            loader: ({ params }) => stringParameterLoader(params, "tagId"),
        }],
        errorElement: (
            <div className={"text-6xl text-red-600 font-bold flex justify-center items-center min-h-screen font-sans"}>
                404
            </div>
        ),
    },
]);

export const Router = () => <RouterProvider router={router}/>;
