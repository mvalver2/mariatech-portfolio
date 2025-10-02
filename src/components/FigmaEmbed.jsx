const FigmaEmbed = ({ url }) => {
  return (
    <div className="w-full max-w-5xl mx-auto my-10 px-4">
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-lg shadow-blue-500/20 border border-white/10">
        <iframe
          src={`https://www.figma.com/embed?embed_host=share&url=${url}`}
          className="absolute top-0 left-0 w-full h-full rounded-2xl"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default FigmaEmbed;
