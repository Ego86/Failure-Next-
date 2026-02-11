import { Meta, StoryObj } from "@storybook/nextjs-vite";
import {Audio} from "./audio"
const meta = {
    title: "entities/audio/audio",
component: Audio
} satisfies Meta<typeof Audio>

export default meta

type Story = StoryObj<typeof meta>

export const standart:Story = {

}