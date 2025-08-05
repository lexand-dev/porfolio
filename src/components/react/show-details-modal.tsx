import { ResponsiveModal } from "@/components/react/responsive-modal";
import Project from "@/components/react/Project";

import { currentProject, isModalOpen } from "@/lib/store";
import { useStore } from "@nanostores/react";

const ShowDetailsModal = () => {
  const $isModalOpen = useStore(isModalOpen);
  const $curentProject = currentProject.get();

  if (!$isModalOpen || !$curentProject.project) {
    return null; // No modal to show
  }

  console.log("ShowDetailsModal", $curentProject);

  return (
    <ResponsiveModal
      open={$isModalOpen}
      onOpenChange={() => isModalOpen.set(!$isModalOpen)}
    >
      <Project project={$curentProject.project} />
    </ResponsiveModal>
  );
};

export default ShowDetailsModal;
