import { Injectable } from "@angular/core";

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENU = [];
const MENUITEMS = [
  { state: "dashboard", name: "Dashboard", type: "link", icon: "av_timer" },
  { state: "button", type: "link", name: "Buttons", icon: "crop_7_5" },
  { state: "grid", type: "link", name: "Grid List", icon: "view_comfy" },
  { state: "lists", type: "link", name: "Lists", icon: "view_list" },
  { state: "menu", type: "link", name: "Menu", icon: "view_headline" },
  { state: "tabs", type: "link", name: "Tabs", icon: "tab" },
  { state: "stepper", type: "link", name: "Stepper", icon: "web" },
  {
    state: "expansion",
    type: "link",
    name: "Expansion Panel",
    icon: "vertical_align_center"
  },
  { state: "chips", type: "link", name: "Chips", icon: "vignette" },
  { state: "toolbar", type: "link", name: "Toolbar", icon: "voicemail" },
  {
    state: "progress-snipper",
    type: "link",
    name: "Progress snipper",
    icon: "border_horizontal"
  },
  {
    state: "progress",
    type: "link",
    name: "Progress Bar",
    icon: "blur_circular"
  },
  {
    state: "dialog",
    type: "link",
    name: "Dialog",
    icon: "assignment_turned_in"
  },
  { state: "tooltip", type: "link", name: "Tooltip", icon: "assistant" },
  { state: "snackbar", type: "link", name: "Snackbar", icon: "adb" },
  { state: "slider", type: "link", name: "Slider", icon: "developer_mode" },
  {
    state: "slide-toggle",
    type: "link",
    name: "Slide Toggle",
    icon: "all_inclusive"
  },
  { state: "form", type: "link", name: "Forms", icon: "developer_mode" },
  { state: "video", type: "link", name: "Video Play", icon: "movie" },
  { state: "multi-select", type: "link", name: "Multi Select", icon: "check" },
  {
    state: "image-compress",
    type: "link",
    name: "Image Compress",
    icon: "donut_large"
  }
];

const menu = [
  {
    name: "Dashboard",
    icon: "av_timer",
    subMenu: [
      { state: "dashboard", name: "Dashboard", type: "link", icon: "av_timer" }
    ]
  },
  {
    name: "App",
    icon: "apps",
    subMenu: [
      { state: "form", type: "link", name: "Forms", icon: "developer_mode" },
      { state: "video", type: "link", name: "Video Play", icon: "movie" },
      {
        state: "multi-select",
        type: "link",
        name: "Multi Select",
        icon: "check"
      },
      {
        state: "image-compress",
        type: "link",
        name: "Image Compress",
        icon: "donut_large"
      },
      {
        state: "list-comment",
        type: "link",
        name: "List Comment",
        icon: "comment"
      },
      {
        state: "scroll-pagination",
        type: "link",
        name: "Scroll Pagination",
        icon: "comment"
      },
      {
        state: "webcam",
        type: "link",
        name: "Webcam",
        icon: "camera_enhance"
      },
      {
        state: "social-share",
        type: "link",
        name: "Social Share",
        icon: "camera_enhance"
      }
    ]
  },
  {
    name: "Payments",
    icon: "money",
    subMenu: [
      { state: "stripe-checkout", name: "Stripe", type: "link", icon: "money" },
      { state: "stripe-account", name: "Stripe ", type: "link", icon: "money" }
    ]
  },
  {
    name: "Material",
    icon: "bubble_chart",
    subMenu: [
      { state: "button", type: "link", name: "Buttons", icon: "crop_7_5" },
      { state: "grid", type: "link", name: "Grid List", icon: "view_comfy" },
      { state: "lists", type: "link", name: "Lists", icon: "view_list" },
      { state: "menu", type: "link", name: "Menu", icon: "view_headline" },
      { state: "tabs", type: "link", name: "Tabs", icon: "tab" },
      { state: "stepper", type: "link", name: "Stepper", icon: "web" },
      {
        state: "expansion",
        type: "link",
        name: "Expansion Panel",
        icon: "vertical_align_center"
      },
      { state: "chips", type: "link", name: "Chips", icon: "vignette" },
      { state: "toolbar", type: "link", name: "Toolbar", icon: "voicemail" },
      {
        state: "progress-snipper",
        type: "link",
        name: "Progress snipper",
        icon: "border_horizontal"
      },
      {
        state: "progress",
        type: "link",
        name: "Progress Bar",
        icon: "blur_circular"
      },
      {
        state: "dialog",
        type: "link",
        name: "Dialog",
        icon: "assignment_turned_in"
      },
      { state: "tooltip", type: "link", name: "Tooltip", icon: "assistant" },
      { state: "snackbar", type: "link", name: "Snackbar", icon: "adb" },
      { state: "slider", type: "link", name: "Slider", icon: "developer_mode" },
      {
        state: "slide-toggle",
        type: "link",
        name: "Slide Toggle",
        icon: "all_inclusive"
      }
    ]
  }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }

  getMenuWithSubmenu(): any[] {
    return menu;
  }
}
