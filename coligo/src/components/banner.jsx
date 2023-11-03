const Banner = () => {
  return (
    <div className="max-w-full rounded-xl overflow-hidden shadow-xl m-8 flex bg-white h-fit hover:transition-all hover:duration-500">
      <div className="w-1/2">
        <div className="px-6 py-4">
          <p className="font-bold text-5xl mb-2 mt-5 text-gradient-text">Exams Time</p>
          <p className="text-gray-700 text-base mb-2 mt-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis pariatur, deleniti doloribus praesentium, natus iste illum incidunt perspiciatis nihil eius aliquam repellat, nobis at voluptatem optio ipsam adipisci et repellendus?
          </p>
        </div>
        <div className="px-6 py-4">
          <button className="bg-coligo_green hover:bg-green-950 text-white font-bold py-2 px-4 rounded-lg transition-all duration-500 hover:transition-all hover:duration-500">
            View Exam Tips
          </button>
        </div>
      </div>
      <div className="w-1/2">
        <img src="/assets/bannerimg.svg" alt="Card Background" className="w-full h-60 object-cover" />
      </div>
    </div>
  );
};

export default Banner;
