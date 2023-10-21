function TextComponent({ content, title, position }) {
  return (
    <div className="flex max-w-xl items-start flex-col">
      <div>
        <h1 className={`text-4xl mb-3 font-bold ${position}`}>{title}</h1>
        <div className={`text-xl mb-1 ${position}`}>{content}</div>
      </div>
    </div>
  );
}

export default TextComponent;
