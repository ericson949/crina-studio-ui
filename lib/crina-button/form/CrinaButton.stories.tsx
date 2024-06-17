import {Meta, StoryObj} from "@storybook/react"

import {CrinaButton} from "./CrinaButton"

const meta: Meta<typeof CrinaButton> ={
    component: CrinaButton
}

export default meta

type Story = StoryObj<typeof CrinaButton>

export const Default:Story = {
    args :{
        children :"Click me!"
    }
}

export const Emoji:Story = {
    args :{
        children :":)"
    }
}