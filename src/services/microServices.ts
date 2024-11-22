import { reportForm } from "@/utils/interfaces";
import axios from "axios";

export async function sendReport(reportData: reportForm) {
  try {
    const response = await axios.post(
      "https://getform.io/f/bvrrmxyb",
      reportData
    );
    return response.status;
  } catch {
    return 500;
  }
}
