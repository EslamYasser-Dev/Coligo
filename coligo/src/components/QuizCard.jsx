import { useTranslation } from "react-i18next";
import { getData } from "../api/apis";
import { useState, useEffect } from "react";

const QuizCard = () => {
  const { t } = useTranslation();
  const [quizes, setQuizes] = useState([]);
  const [loading, setLoading] = useState(true);
const [showAll, setShowAll] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuizes = async () => {
      try {
        let response = await getData("Quizes");
        setQuizes(response.data.data);
      } catch (error) {
        console.error("Api error", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizes();
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

  if (quizes.length === 0) {
    return <div>No Quizes available</div>;
  }

  return (
    <div className="w-2/5 mx-auto rounded-xl overflow-hidden shadow-xl m-1 p-5 flex-col bg-white h-fit hover:transition-all hover:duration-500">
       <div className="flex justify-between items-center">
        <span className="text-xl font-bold">{t("whats-due")}</span>
        <button onClick={() => setShowAll(!showAll)} className="text-xl font-semibold text-coligo_blue">{showAll ? t("show less") : t("all")}</button>
      </div>
      {(showAll ? quizes : quizes.slice(-3)).map((quiz) => (
        <div key={quiz._id} className="border-b border-gray-300 flex flex-col mx-5 my-5">
          <div className="font-semibold p-1" >
            <p>
              {t("title")}
              {": "} {quiz.title}
            </p>
            <p>
              {" "}
              {t("course")}
              {": "}
              {quiz.course}
            </p>
            <p>
              {t("topic")}
              {": "}
              {quiz.topic}
            </p>
            <p>
              {t("due-to")}
              {": "}
              {quiz.dueDate}
            </p>
           
          </div>
          <div className="px-6 py-4 flex justify-center">
  <button className="bg-coligo_green hover:bg-coligo_blue text-white font-bold py-2 px-4 rounded-lg transition-all duration-500 hover:transition-all hover:duration-500">
    {t('solve-assignments')}
  </button>
</div>

        </div>
      ))}
    </div>
  );
  
  
};

export default QuizCard;
