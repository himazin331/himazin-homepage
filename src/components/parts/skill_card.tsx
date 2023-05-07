/* スキルカード */

import type { NextPage } from "next";
import Image from "next/image";
import Card from "react-bootstrap/Card";
import style from "@/styles/skills.module.css";

interface SkillCardProps {
  imagePath?: string;
  imageAlt?: string;
  skillName: string;
}

const SkillCard: NextPage<SkillCardProps> = ({imagePath, imageAlt, skillName}) => {
  return (
    <Card className={style.card}>
      {imagePath ? 
        (<Image className="bd-placeholder-img card-img-top" src={imagePath} alt={imageAlt || ""} width={288} height={110} />)
        :
        (<></>)
      }
      <Card.Body>
        <Card.Title className="p-h5replace">{skillName}</Card.Title>
      </Card.Body>
    </Card>
  );
};
export default SkillCard;
