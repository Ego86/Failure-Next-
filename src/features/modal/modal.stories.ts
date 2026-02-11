import { Meta, StoryObj } from "@storybook/nextjs-vite";
import Modal from "./index"
const meta = {
    title: "features/modal",
component: Modal
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>
export const why:Story = {

}