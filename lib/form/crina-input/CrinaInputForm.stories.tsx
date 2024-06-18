import {Meta, StoryObj} from "@storybook/react"

import CrinaInputForm from "./CrinaInputForm"

const meta: Meta<typeof CrinaInputForm> ={
    component: CrinaInputForm
}

export default meta

type Story = StoryObj<typeof CrinaInputForm>

export const Default:Story = {
    args :{
        type :"text"
    }
}

