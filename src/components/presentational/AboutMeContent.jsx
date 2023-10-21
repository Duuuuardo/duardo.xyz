import TextComponent from "./layout/Text";

function AboutMeContent() {
  return (
    <div className="flex flex-col items-center min-h-screen space-y-[10%] pt-[20%]">
      <TextComponent
        title="Sobre mim"
        position={"text-left"}
        content="Sou um programador Backend apaixonado por programação e tecnologia
            em geral. gosto muito de enfrentar desafios e resolver problemas
            utilizando codigo."
      />
      <TextComponent
        title="Stack"
        position={"text-right"}
        content="Minha linguagem principal é Java, mas tambem tenho experiencia em Rust, Go, Javascript, Kotlin, C e C#. Geralmente utilizo os bancos de
          dados relacionais como PostgreSQL ao lado do Redis para cache mas
          tambem já usei MongoDB. E para completar tenho vasta experiencia em
          Docker e Linux!"
      />
    </div>
  );
}
export default AboutMeContent;
