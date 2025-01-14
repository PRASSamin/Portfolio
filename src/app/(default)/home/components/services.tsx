import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReactIcon } from "../../../components/icons/react";
import { PythonIcon } from "../../../components/icons/python";
import { FlutterIcon } from "../../../components/icons/flutter";

const ServiceSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="bg-[#31004d] p-1.5 rounded-full">
              <ReactIcon size={28} color="#ff0090" />
            </div>
            Web development
          </CardTitle>
          <CardDescription className="text-md">
            Bringing ideas to life through clean, functional code, I craft
            intuitive user interfaces and robust back-end systems. I’m driven by
            a passion for learning and solving challenges, creating seamless
            digital experiences with modern technologies.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="bg-[#31004d] p-2 rounded-full">
              <PythonIcon size={26} color="#ff0090" />
            </div>
            Python development
          </CardTitle>{" "}
          <CardDescription className="text-md">
            Python empowers me to build scalable solutions, automate tasks, and
            explore data analysis. Its versatility inspires me to solve
            problems, embrace innovation, and deliver impactful results through
            clean, maintainable code.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="bg-[#31004d] pl-1.5 pr-2 py-2 rounded-full">
              <FlutterIcon size={26} color="#ff0090" />
            </div>
            Flutter development
          </CardTitle>{" "}
          <CardDescription className="text-md">
            Flutter enables me to create visually stunning, high-performance
            apps for iOS and Android. I thrive on crafting seamless,
            feature-rich experiences that merge creativity with cutting-edge
            technology.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default ServiceSection;
