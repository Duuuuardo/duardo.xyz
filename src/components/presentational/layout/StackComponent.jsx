import TextComponent from "./Text";

function StackComponent() {
  const stack = [
    {
      name: "Java",
      link: "https://www.java.com/pt-BR/",
    },
    {
      name: "Rust",
      link: "https://www.rust-lang.org/",
    },
    {
      name: "Ruby",
      link: "https://www.ruby-lang.org/pt/",
    },
    {
      name: "Node",
      link: "https://nodejs.org/en",
    },
    {
      name: "Go",
      link: "https://go.dev/",
    },
    {
      name: "C",
      link: "https://en.wikipedia.org/wiki/C_(programming_language)",
    },
    {
      name: "C#",
      link: "https://dotnet.microsoft.com/pt-br/languages/csharp",
    },
    {
      name: "LUA",
      link: "https://www.lua.org/",
    },
    {
      name: "Kotlin",
      link: "https://kotlinlang.org/",
    },
  ];

  return (
    <div>
      <TextComponent
        title="Stack"
        position={"text-right"}
        content={[
          "Minha linguagem principal é Java, mas tambem tenho experiencia em ",
          stack.map((item, index) => {
            return (
              <a
                className="hover:underline font-bold text-amber-400"
                href={item.link}
              >
                {Boolean(index === stack.length - 2)
                  ? `${item.name} e `
                  : Boolean(index === stack.length - 1)
                  ? item.name + " "
                  : item.name + ", "}
              </a>
            );
          }),
          "Geralmente utilizo os bancos de dados relacionais como ",
          <a
            className="hover:underline font-bold text-amber-400"
            href="https://www.postgresql.org/"
          >
            PostgreSQL
          </a>,
          " ao lado do ",
          <a
            className="hover:underline font-bold text-amber-400"
            href="https://redis.io/"
          >
            Redis
          </a>,
          " para cache mas tambem já usei ",
          <a
            className="hover:underline font-bold text-amber-400"
            href="https://www.mongodb.com/"
          >
            MongoDB
          </a>,
          ". E para completar tenho vasta experiencia em ",
          <a
            className="hover:underline font-bold text-amber-400"
            href="https://www.docker.com/"
          >
            Docker{" "}
          </a>,
          "e ",
          <a
            className="hover:underline font-bold text-amber-400"
            href="https://linux.org/"
          >
            Linux
          </a>,
        ]}
      />
    </div>
  );
}

export default StackComponent;
