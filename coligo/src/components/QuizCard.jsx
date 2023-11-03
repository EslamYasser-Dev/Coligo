import { useTranslation } from "react-i18next";
import axios from "axios";
import { useState, useEffect } from "react";

const QuizCard = () => {
  const { t } = useTranslation();
  const [quizes, setQuizes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5555/quizes");
        setQuizes(response.data);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
        // Handle the error if needed
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-3/5 mx-auto rounded-xl overflow-hidden shadow-xl m-8 flex bg-white h-fit hover:transition-all hover:duration-500">
      <div className="flex justify-between items-center">
        <span className="text-xl">{t("whats-due")}</span>
        <span className="text-xl">{t("all")}</span>
      </div>

      {loading ? (
        // Render a loading animation or message here
        <div className="flex items-center justify-center rounded-xl overflow-hidden shadow-xl m-8  bg-white h-fit hover:transition-all hover:duration-500">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-coligo_green">loading</div>
        </div>
      ) : (
        quizes.map((quiz) => (
          <div key={quiz.id} className="border-b border-gray-300">
            <p> {t('course')}{": "}{quiz.course}</p>
            <p>{t('topic')}{": "}{quiz.topic}</p>
            <p>{t('due-to')}{": "}{quiz.duedate}</p>
            <div className="px-6 py-4">
          <button className="bg-coligo_green hover:bg-green-950 text-white font-bold py-2 px-4 rounded-lg transition-all duration-500 hover:transition-all hover:duration-500">
           Start Quiz
          </button>
        </div>
          </div>
        ))
      )}
    </div>
  );
};

export default QuizCard;
