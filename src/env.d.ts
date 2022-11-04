/// <reference types="astro/client" />

import { AVATAR, TOOL_BOX } from "./Data"

export type IAvatar = typeof AVATAR
export type IToolbox = typeof TOOL_BOX
export type IProject = {
  title: string
  githubUrl: string
  liveUrl?: string
  description: string
  tags?: string[]
}
