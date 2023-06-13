import Image from "next/image";
import FaceHappy from "@/stories/Icon/FaceHappy";
import Badge from "../Badge";
import { AnimalListBox, UL, Div } from "./styled";

const PossibleAnimalList = () => {
  const ANIMALS = ["토끼", "고슴도치", "햄스터", "조류"];
  const getAnimalIconImage = (animal: string) => {
    switch (animal) {
      case "토끼":
        return "/img/rabbit.png";
      case "햄스터":
        return "/img/hamster.png";
      case "고슴도치":
        return "/img/hedgehog.png";
      default:
        return "/img/hamster.png";
    }
  };
  return (
    <AnimalListBox>
      <Div>
        <h2>
          <FaceHappy /> 진료 가능한 동물
        </h2>
        <Badge textColor="#ED9B00" bgColor="#FFE0A7">
          펫북 인증 완료
        </Badge>
      </Div>
      <UL>
        {ANIMALS.slice(0, 3).map((animal) => (
          <li key={animal}>
            <span className="icon">
              <Image
                width={16}
                height={16}
                alt="hamster"
                src={getAnimalIconImage(animal)}
              />
            </span>
            <span>{animal}</span>
          </li>
        ))}
        {ANIMALS.length > 3 && (
          <li>
            <span className="icon">
              <Image
                width={16}
                height={16}
                alt="hamster"
                src="/img/hamster.png"
              />
            </span>
            <span>+{ANIMALS.length - 3}</span>
          </li>
        )}
      </UL>
    </AnimalListBox>
  );
};

export default PossibleAnimalList;
