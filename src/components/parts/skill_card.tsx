/* スキルカード */

import type { NextPage } from "next";
import Image from "next/image";
import Card from "react-bootstrap/Card";
import style from "@/styles/skills.module.css";

interface SkillCardProps {
  image_path?: string;
  image_alt?: string;
  skill_name: string;
}

const SkillCard: NextPage<SkillCardProps> = ({image_path, image_alt, skill_name}) => {
  return (
    <Card className={style.card}>
      {image_path ? 
        (<Image className="bd-placeholder-img card-img-top" src={image_path} alt={image_alt || ""} width={288} height={110} />)
        :
        (<></>)
      }
      <Card.Body>
        <Card.Title className="p-h5replace">{skill_name}</Card.Title>
      </Card.Body>
    </Card>
  );
};
export default SkillCard;
