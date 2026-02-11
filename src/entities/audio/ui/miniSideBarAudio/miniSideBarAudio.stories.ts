import type {Meta, StoryObj} from "@storybook/nextjs-vite"
import { MiniSideBarAudio } from "./miniSideBarAudio"
import "./miniSideBarAudio.module.scss"
 const meta = {
    title:"entities/audio/miniSideBar",
component: MiniSideBarAudio
} satisfies Meta<typeof MiniSideBarAudio>

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        audio: {
            image: "car.png",
            name: "NLO",
            src: "NLO22 - MYICE Alternate Version.mp3"
        },
        isAudio: true,
    }
}