import ButtonChangeTheme from "@/features/button-change-theme";

import LinkButton from "@/shared/ui/linkButton/linkbuttom";
import Main from "@/shared/ui/main";
import PlatfomSection from "@/shared/ui/platformSection/UI/platfomSection";

const Settings = () => {
  return (
    <Main className="w-full flex justify-center items-center">
      <PlatfomSection className="w-[500px] p-5 h-[500px] flex flex-col">
        <LinkButton className="mb-4" variant="containd" href="/auth/login">Exit</LinkButton>
        <ButtonChangeTheme />
      </PlatfomSection>
    </Main>
  );
};

export default Settings;
