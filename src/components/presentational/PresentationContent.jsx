import Image from "next/image";
import Link from "next/link";

function PresentationContent() {
  return (
    <div className="flex min-h-screen flex-col items-center text-center align-middle justify-center">
      <h1 className="text-7xl mb-3 font-bold">Olá, eu sou o Eduardo</h1>
      <p className="text-xl mb-1">
        Desenvolvedor Backend e apaixonado por tecnologia
      </p>
      <div className="w-full flex justify-center space-x-1">
        <Link href="https://twitter.com/duuuuardo">
          <Image
            width="38"
            height="38"
            className="duration-300 transition delay-150 hover:scale-150"
            src="/social/twitter.svg"
          />
        </Link>
        <Link href="https://github.com/duuuuardo">
          <Image
            width="38"
            height="38"
            src="/social/github.svg"
            className="duration-300 transition delay-150 hover:scale-150"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/eduardo-enrique-fabisiak-5b9196213/">
          <Image
            width="38"
            height="38"
            src="/social/linkedin.svg"
            className="duration-300 transition delay-150 hover:scale-150"
          />
        </Link>
      </div>
      <div className="arrow !z-0"></div>
    </div>
  );
}
export default PresentationContent;
