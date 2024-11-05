import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
initMercadoPago("YOUR_PUBLIC_KEY");

export default function MercadoPago() {
  return (
    <div id="wallet_container">
      <Wallet
        initialization={{ preferenceId: "asd4" }}
        customization={{ texts: { valueProp: "smart_option" } }}
      />
    </div>
  );
}
