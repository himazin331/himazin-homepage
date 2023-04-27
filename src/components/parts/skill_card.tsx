/* スキルカード */

import type { NextPage } from "next";
import Image from "next/image";
import style from "@/styles/skills.module.css";

interface SkillCardProps {
  image_path?: string;
  image_alt?: string;
  skill_name: string;
}

const SkillCard: NextPage<SkillCardProps> = ({image_path, image_alt, skill_name}) => {
  return (
    <div className={`${style.card} card`}>
      {image_path ? 
        (<Image className="bd-placeholder-img card-img-top" src={image_path} alt={image_alt || ""} width={288} height={110} />)
        :
        (<></>)
      }
      <div className="card-body">
        <p className="card-title p-h5replace">{skill_name}</p>
      </div>
    </div>
  );
};
export default SkillCard;
