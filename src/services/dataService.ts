import { formatAddress, formatDate } from "@/utils/funtions";
import {
  Attendant,
  attendantsBranch,
  branchsProducts,
  products,
  reportForm,
  companyData,
  companyDataBK,
  dataPost,
} from "@/utils/interfaces";
import axios from "axios";

const bkURL = "https://direccioncorrecta.up.railway.app/api";

export async function getBranchesWidthAttendants() {
  try {
    const response = await axios.get(bkURL + "/allBranchAtendants");
    const branchesWithAttendants: attendantsBranch[] = response.data.map(
      (branch: attendantsBranch) => ({
        branchID: String(branch.branchID),
        branchName: branch.branchName,
        attendants: branch.attendatsDTOs.map((attendant: Attendant) => ({
          name: `${attendant.name} ${attendant.lastName}`,
          shift: attendant.shift,
        })),
      })
    );
    return branchesWithAttendants;
  } catch (error) {
    console.log("Error al obtener las sucursales con encargados", error);
    return [];
  }
}
export async function getBranchesWidthProducts() {
  try {
    const response = await axios.get(bkURL + "/allBranchProducts");
    const branchesWithProducts: branchsProducts[] = response.data.map(
      (branch: branchsProducts) => ({
        branchID: String(branch.branchID),
        branchName: branch.branchName,
        branchProducts: branch.branchProducts.map((product: products) => ({
          id: product.id,
          productClass: product.productClass,
          productName: product.productName,
          productDescription: product.productDescription,
          productPrice: product.productPrice,
        })),
      })
    );

    return branchesWithProducts;
  } catch (error) {
    console.log("Error al obtener las sucursales con encargados", error);
    return [];
  }
}
export async function getAliados() {
  try {
    const response = await axios.get(bkURL + "/getAliados");
    const businessClassMap: { [key: string]: string } = {
      FOOD: "Comida",
      CLOTHING: "Ropa",
      SCHOOL: "Escuela",
      GROCERIES: "Abarrotes",
    };
    const companyData: companyData[] = response.data.map(
      (companyData: companyDataBK) => ({
        logo: companyData.logo || "https://",
        branch_name: companyData.branch_name,
        address: formatAddress(companyData.address),
        business_class: businessClassMap[companyData.businessClass],
        reg_date: formatDate(companyData.regDate),
      })
    );

    return companyData;
  } catch (error) {
    console.log("Error: ", error);
    return [];
  }
}
export async function saveReportInBD(reportData: reportForm) {
  try {
    const response = await axios.post(bkURL + "/saveReport", reportData);
    return response.status;
  } catch {
    return 500;
  }
}

export async function getPostData() {
  try {
    const response = await axios.get(bkURL + "/payment");
    const post: dataPost[] = response.data.map((data: dataPost) => ({
      id: data.id,
      title: data.title,
      subTitle: data.subTitle,
      description: data.description,
      image: data.image,
    }));
    return post;
  } catch (error) {
    console.log("Error: ", error);
    return [];
  }
}
