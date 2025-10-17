"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Modal from "@/features/modal";
import Button from "@/shared/ui/button/Button";
import PlatfomSection from "@/shared/ui/platformSection/UI/platfomSection";
import ButtonChangeTheme from "@/features/button-change-theme";

export default function SettingsModal() {
  const router = useRouter();
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  // Закрываем при изменении пути
  useEffect(() => {
    if (!pathname.includes("/settings")) setVisible(false);
  }, [pathname]);

  if (!visible) return null;

  return (
    <Modal>
      <PlatfomSection className="w-[500px] p-5 h-[500px] flex flex-col">
        <Button className="mb-5" onClick={() => router.back()}>
          Back
        </Button>
        <Button
          className="mb-4"
          variant="containd"
          onClick={() => router.replace("/auth/login")}
        >
          Exit
        </Button>
        <ButtonChangeTheme />
      </PlatfomSection>
    </Modal>
  );
}
