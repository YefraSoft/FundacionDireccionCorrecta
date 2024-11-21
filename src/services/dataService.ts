import {
  Attendant,
  attendantsBranch,
  branchsProducts,
  products,
} from "@/utils/interfaces";
import axios from "axios";

const bkURL = process.env.BACK_URL
  ? process.env.BACK_URL
  : "http://localhost:8080/api";

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
