import MainCard from "../components/MainCard";
import englishData from "../englishData.json";

console.log(englishData);

const Main = () => {
  return (
    <div className="bg-black container">
      <h1 className="text-center text-4xl font-bold text-gray-300 mb-8 font-serif">
        Study English
      </h1>
      <ul className="space-y-4">
        {englishData.map((v, i) => (
          <MainCard key={i} title={v.title} day={v.day} />
        ))}
      </ul>
    </div>
  );
};

export default Main;
