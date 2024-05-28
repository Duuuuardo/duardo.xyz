function TextComponent({ content, title, position }) {
  return (
    <div className="flex max-w-xl items-start flex-col text-white">
      <div>
        <h1 className={`text-4xl mb-3 text-white font-bold ${position}`}>{title}</h1>
        <div className={`text-xl mb-1 text-white ${position}`}>{content}</div>
      </div>
    </div>
  );
}

export default TextComponent;
