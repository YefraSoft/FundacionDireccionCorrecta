import { buttonsVariantsExit } from "@/utils/funtions";
import ButtonIcon from "./buttonIcon";
import { detailWindowProps } from "@/utils/interfaces";
import MarkdownRenderer from "./markDowRender";

export default function DetailWindow({
  description,
  button,
}: detailWindowProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-30 px-4 sm:px-15 sm:py-20 w-dvw">
      <div className="flex flex-col items-center justify-center w-full md:h-screen rounded-3xl shadow-lg">
        <div className="relative top-4 z-50 left-28 lg:left-64">
          <ButtonIcon
            icon="exit"
            variants={buttonsVariantsExit}
            onClick={button.onClick}
          />
        </div>
        <MarkdownRenderer content={description} />
      </div>
    </div>
  );
}
