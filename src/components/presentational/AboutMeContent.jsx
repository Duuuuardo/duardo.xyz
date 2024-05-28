import TextComponent from "./layout/Text";
import StackComponent from "./layout/StackComponent";

function AboutMeContent() {
  return (
    <div className="flex text-white flex-col min-h-screen space-y-[10%] pt-[20%]">
      <TextComponent
        title="Sobre mim"
        position={"text-left"}
        content="Sou um programador Backend apaixonado por programação e tecnologia
            em geral. gosto muito de enfrentar desafios e resolver problemas
            utilizando codigo."
      />
      <div className="ml-auto">
        <StackComponent />
      </div>
    </div>
  );
}
export default AboutMeContent;
