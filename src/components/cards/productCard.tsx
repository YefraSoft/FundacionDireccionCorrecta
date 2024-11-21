import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ButtonIcon from "../menus/buttonIcon";
import { ProductListProps } from "@/utils/interfaces";

export default function ProductList({ ProductBranch }: ProductListProps) {
  const [activeBranchId, setActiveBranchId] = useState<number | null>(null);
  const branchArray = Array.isArray(ProductBranch)
    ? ProductBranch
    : [ProductBranch];
  if (branchArray.length <= 0) {
    return (
      <div className="relative pb-1">
        <span className="text-havelockblue-700 font-semibold text-lg">
          Productos por sucursal
        </span>
        <div
          className="flex flex-col pb-1 m-1 shadow-lg border rounded-md text-sm animate-diagonalPulse
            border-havelockblue-500 text-havelockblue-950 sm:w-1/2 sm:h-40 max-h-1/2 overflow-y-scroll"
        >
          <div
            className="hover:bg-havelockblue-100 mt-3 mx-1 pb-1 rounded-sm transition-all 
              duration-500 hover:shadow active:scale-95 text-center"
          >
            Loading...
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="relative pb-1">
      <span className="text-havelockblue-700 font-semibold text-lg">
        Productos por sucursal
      </span>
      <div
        className="flex flex-col pb-1 m-1 shadow-lg border rounded-md text-sm 
        border-havelockblue-500 text-havelockblue-950 sm:w-1/2 sm:h-40 max-h-1/2 overflow-y-scroll"
      >
        {branchArray.map((branch) => (
          <div
            key={branch.branchID}
            className="hover:bg-havelockblue-100 mt-1 mx-1 pb-1 rounded-sm transition-all 
            duration-500 hover:shadow active:scale-95"
          >
            <div className="flex justify-between px-1 sm:px-5 items-center">
              <span
                className="w-full cursor-pointer text-center"
                onClick={() =>
                  setActiveBranchId(
                    activeBranchId === branch.branchID ? null : branch.branchID
                  )
                }
              >
                {branch.branchName}
              </span>
            </div>
            <AnimatePresence>
              {activeBranchId === branch.branchID &&
                (Array.isArray(branch.branchProducts) ? (
                  branch.branchProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      whileHover={{
                        scale: 1.01,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
                      className="flex text-xs justify-between m-1 p-1 items-center rounded-sm
            shadow-sm border-t border-havelockblue-200 bg-havelockblue-50"
                    >
                      <div className="w-full flex justify-between items-center">
                        <div className="w-full flex items-center">
                          <div className="flex flex-col basis-2/3">
                            <span className="font-bold text-left">
                              {product.productName}
                            </span>
                            <span>{product.productDescription}</span>
                          </div>
                          <span className="font-semibold text-havelockblue-700 basis-1/3 text-center">
                            {`$${product.productPrice}`}
                          </span>
                        </div>

                        <div className="flex gap-3 items-center mt-1">
                          <ButtonIcon icon="pen" />
                          <ButtonIcon icon="add" />
                          <ButtonIcon icon="delete" />
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div>No products available</div>
                ))}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
