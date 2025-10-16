"use client"
import ButtonChangeTheme from "@/features/button-change-theme";
import Modal from "@/features/modal";
import Button from "@/shared/ui/button/Button";
import PlatfomSection from "@/shared/ui/platformSection/UI/platfomSection";
import { useRouter } from "next/navigation";

const Settings = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back(); 
  };

  const handleExit = () => {
    router.replace("/auth/login", { scroll: false }); // правильный вызов
  };

  return (
    <Modal>
      <PlatfomSection className="w-[500px] p-5 h-[500px] flex flex-col">
        <Button className="mb-5" onClick={handleBack}>Back</Button>
        <Button className="mb-4" variant="containd" onClick={handleExit}>
          Exit
        </Button>
        <ButtonChangeTheme />
      </PlatfomSection>
    </Modal>
  );
};

export default Settings;
