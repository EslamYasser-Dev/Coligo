import { useTranslation } from "react-i18next";
import { getData } from "../api/apis";
import { useState, useEffect } from "react";

const Announcments = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const [announcments, setAnnouncments] = useState([]);

  useEffect(() => {
    const fetchAnnouncments = async () => {
      try {
        let response = await getData("announcments");
        setAnnouncments(response.data.data);
      } catch {
        console.error("Api error");
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncments();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center rounded-xl overflow-hidden shadow-xl m-8  bg-white h-fit hover:transition-all hover:duration-500">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-coligo_green"></div>
      </div>
    );
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  if (announcments.length === 0) {
    return <div>No announcements available</div>;
  }

  return (
    <div className="w-3/4 mx-auto rounded-xl overflow-hidden shadow-xl m-1 p-5 flex-col bg-white h-fit hover:transition-all hover:duration-500">
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold text-gray-900">{t("announcement")}</span>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-xl font-semibold text-coligo_blue"
        >
          {showAll ? t("show less") : t("all")}
        </button>
      </div>

      {(showAll ? announcments : announcments.slice(-2)).map((item) => (
        <div key={item._id} className=" mt-4">
          <div className=" mx-8 bg-slate-300 rounded-xl p-3 transition-all  duration-1000 hover:bg-slate-50 hover:transition-all hover:duration-800 shadow-xl">
            <p className="text-lg font-semibold ">{item.author}</p>

            <p>
              {" "}
              {t("topic")}
              {": "}
              {item.title}
            </p>

            <p>
              {`" `}
              {item.message} {` "`}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Announcments;
