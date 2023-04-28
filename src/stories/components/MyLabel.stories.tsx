import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";


const meta: Meta<typeof MyLabel> = {
    title: 'UI Components/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text'},
        size: {
            options: ['normal', 'h1', 'h2','h3'],
            control: { type: 'select' },
        },
        allCaps: {
           // control: {type: 'radio'},
            options: [true, false]
        },
        color: {
            control: { type: 'select'},
            options: ['primary', 'secondary', 'tertiary']
        },
        fontColor: {
            control: { type: 'color'}
        },
        backgroundColor: {
            control: { type: 'color'}
        }
    }

};
export default meta;

type Story = StoryObj<typeof MyLabel>;

export const Basic: Story = { args: { label: 'this is a basic label', size: 'normal', allCaps: false, color: 'primary'}}

export const AllCaps: Story = { args: { label: 'this text is capitalized', size: 'normal', allCaps: true, color: 'primary'}}

export const Secondary: Story = { args: { label: 'This is a secondary label', size: 'h3', color: 'secondary'}}

export const  Tertiary: Story = { args: { label: 'this is a tertiary text', color: 'tertiary'}}

export const CustomFontColor: Story = { args: { size: 'h1', fontColor: '#778541'}}

export const CustomBackground: Story = { args: { size: 'h2', fontColor: '#ffbf00', label: 'this is a text with background color', backgroundColor: '#212121'}}