import { defer } from "react-router-dom";
import apiService from "../api.service";

export const loadContacts = () => {
  const contacts = apiService.index();

  return defer({ contacts });
};
