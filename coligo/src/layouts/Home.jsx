import { useDispatch, useSelector } from "react-redux";
import { handleLogin, handleLogout } from "../redux/features/authSlice";
import { useTranslation } from "react-i18next";
import SideNav from "./sideNav";
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import Banner from "../components/banner";
import QuizCard from "../components/QuizCard";
import Announcments from "../components/announcments";

// This is your Higher Order Component (HOC)
function requireAuth(Component) {
  return function WrappedComponent(props) {
    const isLogged = useSelector((state) => state.auth.isLogged);
    const dispatch = useDispatch();

    if (!isLogged) {
      return (
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(handleLogin())}
        >
          Login
        </button>
      );
    }

    return <Component {...props} />;
  };
}

function HomeContent() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <div>
      <nav className="flex justify-between items-center p-5 bg-white shadow-xl h-15">
        <h1 className="text-3xl font-bold text-coligo_blue">Coligo</h1>
        <h2 className="text-xl">{t("welcome") + " " + "Eslam"} </h2>
        <div className="flex items-center space-x-4">
          <input
            className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-56 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            type="text"
            placeholder="Search"
          />
          <button>
            <SearchIcon />
          </button>
          <button>
            <ChatBubbleOutlineIcon />
          </button>
          <button
            className="bg-red-500 hover:bg-coligo_blue text-white font-bold py-2 px-4 rounded ml-4"
            onClick={() => dispatch(handleLogout())}
          >
            {t("logout")}
          </button>
        </div>
      </nav>
      <div className="flex flex-row">
        <SideNav className="m-6" />
        <div className="flex flex-col">
          <Banner />
          <QuizCard />
          <Announcments/>
                  </div>
      </div>
    </div>
  );
}

const Home = requireAuth(HomeContent);

export default Home;
