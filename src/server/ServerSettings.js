import { get } from "@/plugins/request";

export default class ServerSettings {
  static getRouleGroups() {
    return get("/settings/rouleGroups");
  }
}
