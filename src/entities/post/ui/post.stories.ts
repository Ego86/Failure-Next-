import type {Meta, StoryObj} from "@storybook/nextjs-vite"
import Post from "./post"
const meta = {
    title:"entities/post",
component: Post
} satisfies Meta<typeof Post>

export default meta

type Story = StoryObj<typeof meta>

export const standart: Story  = {

}