import { get } from "@/plugins/request";

export const getSettingMenus = () => get("/settings/menu");
