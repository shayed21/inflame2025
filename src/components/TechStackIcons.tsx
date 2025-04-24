import {
  SiReact,
  SiFlutter,
  SiNodedotjs,
  SiFirebase,
  SiMongodb,
  SiAmazon,
  SiMysql,
  SiLaravel,
  SiPython,
  SiTensorflow,
  SiDocker,
  SiGraphql,
  SiNextdotjs,
} from "react-icons/si";

const techs = [
  { icon: <SiReact className="text-cyan-400" />, name: "React" },
  { icon: <SiNextdotjs className="text-black dark:text-white" />, name: "Next.js" },
  { icon: <SiFlutter className="text-blue-400" />, name: "Flutter" },
  { icon: <SiNodedotjs className="text-green-600" />, name: "Node.js" },
  { icon: <SiFirebase className="text-yellow-400" />, name: "Firebase" },
  { icon: <SiMongodb className="text-green-700" />, name: "MongoDB" },
  { icon: <SiAmazon className="text-orange-400" />, name: "AWS" },
  { icon: <SiMysql className="text-blue-600" />, name: "MySQL" },
  { icon: <SiLaravel className="text-red-500" />, name: "Laravel" },
  { icon: <SiPython className="text-yellow-400" />, name: "Python" },
  { icon: <SiTensorflow className="text-orange-500" />, name: "TensorFlow" },
  { icon: <SiDocker className="text-blue-400" />, name: "Docker" },
  { icon: <SiGraphql className="text-pink-500" />, name: "GraphQL" },
];

export default function TechStackIcons() {
  return (
    <div className="flex flex-wrap gap-8 items-center justify-center py-4">
      {techs.map((t, i) => (
        <div
          key={i}
          className="flex flex-col items-center bg-white/5 rounded-lg shadow p-4 w-24"
        >
          <span className="text-4xl mb-2 flex items-center justify-center w-12 h-12">
            {t.icon}
          </span>
          <span className="text-xs mt-1 text-center text-gray-300 font-medium">{t.name}</span>
        </div>
      ))}
    </div>
  );
}