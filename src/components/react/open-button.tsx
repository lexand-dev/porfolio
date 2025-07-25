import { useStore } from "@nanostores/react";
import { MoveRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { currentProject, isModalOpen } from "@/lib/store";

interface OpenButtonProps {
  project: {
    id: string;
    name: string;
    description: string;
    cover: string;
  };
}

export const OpenButton = ({ project }: OpenButtonProps) => {
  // lee el valor del store con el hook `useStore`
  const $isModalOpen = useStore(isModalOpen);
  const onClick = () => {
    // cambia el valor del store al hacer click
    currentProject.set({
      project: {
        id: project.id,
        name: project.name,
        description: project.description,
        cover: project.cover
      }
    });
    isModalOpen.set(!$isModalOpen);
  };
  // escribe en el store importado usando `.set`
  return (
    <Button variant="secondary" onClick={onClick}>
      <MoveRightIcon className="h-4 w-4" />
    </Button>
  );
};
