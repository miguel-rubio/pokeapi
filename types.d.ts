export { ActionContext } from "vuex";
export type ApiErrorStructure = {
  /** iconId: test */
  iconId?: string;
  message: string;
  code?: string|number;
  title?: string;
}
export interface ApiError extends Error {
  /** iconId: test */
  iconId?: string;
}

export type ProjectInfo = {
  userId: string;
  projectName: string;
  projectKeywords: string;
  projectIndustry: string;
  productOrService: string;
  projectType: string;
  deliverableType: string;
  logoFullColor: File;
  logoLighter?: File;
  logoDarker?: File;
  /** Json encoded brandColors */
  brandColors: string;
  textColors: string;
  emailContact: string;
  fontPrimary: string;
  fontSecondary: string;
  projectGoal: string;
  projectOffering: string;
}
export type StyleThumbnailBackend = {
  LP: string;
  EMAIL: string;
  AD: string;
}
export type StyleBackend = {
  SK: string;
  PK: string;
  PATH: string;
  STATUS: string;
  LIGHT_PATH: string;
  NAME: string;
  THUMBNAILS: StyleThumbnailBackend;
}
export type Style = {
  name: string;
  id: string;
  thumbnails: StyleThumbnailBackend
}
export type CampaignTypes = "basicleadgen" | "emaildrip";
export type CampaignCreationData = {
  campaignName: string;
  styleId: string;
  brandId: string,
  campaignType: CampaignTypes,
  goal: string
}
export type FontCombo = {
  DECODE_TITLE: string;
  COMBO_NAME: string;
  NAME_PARAGRAPH: string;
  SK: string;
  NAME_TITLE: string;
  DECODE_PARAGRAPH: string;
  PK: string;
  URL_TITLE: string;
  URL_PARAGRAPH: string;
}

export type FontCombosWithTotalAndLast = {
  total: number;
  data: FontCombo[]; 
  last: string;
  error: number;
} 

export type ColorCombo = {
  SK: string;
  COLOR_2: string;
  COLOR_1: string;
  PK: string;
  COLOR_3: string;
}

export type ColorCombosWithTotalAndLast = {
  total: number;
  data: ColorCombo[];
  last:string;
  error: number;
}
export type OsName = "Windows" | "Mac" | "Unix" | "Linux";
export as namespace Bexi;
