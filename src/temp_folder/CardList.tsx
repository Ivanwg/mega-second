import Image from "next/image";
import ArrowBottomIcon from "~/assets/svg/ArrowBottomIcon";
import PowerIcon from "~/assets/svg/PowerIcon";
import SecurityIcon from "~/assets/svg/SecurityIcon";
import SimIcon from "~/assets/svg/SimIcon";
import Card from "~/components/common/Card/Card";
import { Specification } from "~/components/common/Card/Specification";
import { SpecificationGroup } from "~/components/common/Card/SpecificationGroup";
import Button, { ButtonVariants } from "~/components/ui/Button";

export default function CardList() {
  return (
    <>
      <Card>
        <Image
          width={265}
          height={330}
          objectFit="cover"
          src={"/Mega_1.png"}
          alt="Mega_1"
        />
        <Card.Head>
          <Card.Title>Mega</Card.Title>
          <Card.Description>Модульный охранный прибор</Card.Description>
        </Card.Head>
        <SpecificationGroup>
          <Specification>
            2 SIM карты + Ethernet
            <SimIcon />
          </Specification>
          <Specification>
            80 проводных/беспроводных зон
            <SecurityIcon />
          </Specification>
          <Specification>
            Блок питания 2.5 А 12 В <PowerIcon />
          </Specification>
        </SpecificationGroup>
        <Button
          variant={ButtonVariants.whiteOutline}
          className="rotate-svg-90 mt-5 w-full px-5 py-3.5"
        >
          Узнать больше
          <span className="ml-2.5">
            <ArrowBottomIcon />
          </span>
        </Button>
      </Card>
      <Card>
        <Image
          width={265}
          height={330}
          objectFit="cover"
          src={"/Mega_1.png"}
          alt="Mega_1"
        />
        <Card.Head>
          <Card.Title>Mega</Card.Title>
          <Card.Description>Модульный охранный прибор</Card.Description>
        </Card.Head>
        <SpecificationGroup>
          <Specification>
            2 SIM карты + Ethernet
            <SimIcon />
          </Specification>
          <Specification>
            80 проводных/беспроводных зон
            <SecurityIcon />
          </Specification>
          <Specification>
            Блок питания 2.5 А 12 В <PowerIcon />
          </Specification>
        </SpecificationGroup>
        <Button
          variant={ButtonVariants.whiteOutline}
          className="rotate-svg-90 mt-5 w-full px-5 py-3.5"
        >
          Узнать больше
          <span className="ml-2.5">
            <ArrowBottomIcon />
          </span>
        </Button>
      </Card>
      <Card>
        <Image
          width={265}
          height={330}
          objectFit="cover"
          src={"/Mega_1.png"}
          alt="Mega_1"
        />
        <Card.Head>
          <Card.Title>Mega Light 433</Card.Title>
          <Card.Description>Беспроводной охранный прибор</Card.Description>
        </Card.Head>
        <SpecificationGroup>
          <Specification>
            2 SIM карты
            <SimIcon />
          </Specification>
          <Specification>
            32 беспроводных зоны
            <SecurityIcon />
          </Specification>
          <Specification>
            Адаптер питания 1А 12B
            <PowerIcon />
          </Specification>
        </SpecificationGroup>
        <Button
          variant={ButtonVariants.whiteOutline}
          className="rotate-svg-90 mt-5 w-full px-5 py-3.5"
        >
          Узнать больше
          <span className="ml-2.5">
            <ArrowBottomIcon />
          </span>
        </Button>
      </Card>
      <Card>
        <Image
          width={265}
          height={330}
          objectFit="cover"
          src={"/Mega_1.png"}
          alt="Mega_1"
        />
        <Card.Head>
          <Card.Title>Mega Keyboard</Card.Title>
          <Card.Description>
            Охранный прибор в корпусе кливиатуры <br />
            проводной | беспроводной
          </Card.Description>
        </Card.Head>
        <SpecificationGroup>
          <Specification>
            2 SIM карты
            <SimIcon />
          </Specification>
          <Specification>
            8 проводных или 32 беспроводных зоны
            <SecurityIcon />
          </Specification>
          <Specification>
            Адаптер 1 А 12 В + АКБ 18650
            <PowerIcon />
          </Specification>
        </SpecificationGroup>
        <Button
          variant={ButtonVariants.whiteOutline}
          className="rotate-svg-90 mt-5 w-full px-5 py-3.5"
        >
          Узнать больше
          <span className="ml-2.5">
            <ArrowBottomIcon />
          </span>
        </Button>
      </Card>
      ;
    </>
  );
}
