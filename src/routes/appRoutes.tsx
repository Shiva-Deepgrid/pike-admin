import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";
import DefaultPage from "../pages/dashboard/DefaultPage";
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import Submission from "../pages/Submissions/ChangelogPage";
import Inbox from "../pages/Inbox/Inbox";
import AnalyticsPage from "../pages/dashboard/AnalyticsPage";
import AdminPage from "../pages/dashboard/AdminPage";
import ComponentPageLayout from "../pages/component/ComponentPageLayout";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import PersonIcon from '@mui/icons-material/Person';
import ExistingForm from "../pages/component/ExistingForm";
import CreateForm from "../pages/component/CreateForm";
import Usermanagment from "../pages/Usermanagment/UsermanagmentPage";
import DocumentationPage from "../pages/documentation/DocumentationPage";
import InboxIcon from '@mui/icons-material/Inbox';
import EditNoteIcon from '@mui/icons-material/EditNote';
import NotesIcon from '@mui/icons-material/Notes';
const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/usermanagment",
    element: <Usermanagment />,
    state: "Usermanagment",
    sidebarProps: {
      displayText: "User Management",
      icon: <PersonIcon />
    }
  },
  {
    path: "/dashboard",
    element: <DashboardPageLayout />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardOutlinedIcon />
    },
    child: [
      // {
      //   index: true,
      //   element: <DashboardIndex />,
      //   state: "dashboard.index"
      // },
      // {
      //   path: "/dashboard/default",
      //   element: <DefaultPage />,
      //   state: "dashboard.default",
      //   sidebarProps: {
      //     displayText: "Default"
      //   },
      // },
      // {
      //   path: "/dashboard/analytics",
      //   element: <AnalyticsPage />,
      //   state: "dashboard.analytics",
      //   sidebarProps: {
      //     displayText: "Analytic"
      //   }
      // },
      {
        path: "/dashboard/Admin",
        element: <AdminPage />,
        state: "dashboard.admin",
        sidebarProps: {
          displayText: "Admin"
        }
      }
    ]
  },
  {
    path: "/Form",
    element: <ComponentPageLayout />,
    state: "component",
    sidebarProps: {
      displayText: "Forms",
      icon: <AppsOutlinedIcon />
    },
    child: [
      {
        path: "/Form/ExistingForm",
        element: <ExistingForm />,
        state: "Form.ExistingForm",
        sidebarProps: {
          displayText: "Existing Forms",
          icon:<NotesIcon/>
        },
      },
      {
        path: "/Form/CreateForm",
        element: <CreateForm />,
        state: "Form.CreateForm",
        sidebarProps: {
          displayText: "Create New Form",
          icon:<EditNoteIcon/>
        }
      }
    ]
  },
 
  {
    path: "/submission",
    element: <Submission />,
    state: "changelog",
    sidebarProps: {
      displayText: "Submissions",
      icon: <FormatListBulletedOutlinedIcon />
    }
  },
  {
    path: "/Inbox",
    element: <Inbox />,
    state: "changelog",
    sidebarProps: {
      displayText: "Inbox",
      icon: <InboxIcon />
    }
  },
  {
    path: "/documentation",
    element: <DocumentationPage />,
    state: "documentation",
    sidebarProps: {
      displayText: "Documents",
      icon: <ArticleOutlinedIcon />
    }
  },
];

export default appRoutes;