export default function AsideDonations() {
  return (
    <div className="m-2">
      {/* Add your Mercado Pago checkout form here */}
      {/* You can find the Mercado Pago documentation here: https://www.mercadopago.com.ar/developers/es/guides/checkout-checkout-v2 */}
      {/* You can also use a third-party library like react-mercadopago to simplify the integration */}

      {/* Example using react-mercadopago: */}
      {/* <MercadoPagoCheckout
        publicKey="YOUR_PUBLIC_KEY"
        token="YOUR_TOKEN"
        onPayment={handlePayment}
        onPaymentError={handlePaymentError}
      /> */}

      {/* You can also use the Mercado Pago JavaScript SDK to create the checkout form */}
      <div>
        <span className="font-thin text-sm text-patina-600">Meta de donaciones mes: $100,000.00</span>
        <div className="flex bg-patina-100 w-full h-3 items-center rounded-full shadow-sm">
          <div className="bg-patina-300 w-1/2 h-3 p-1 rounded-full" />
        </div>
        <span className="font-thin text-sm text-patina-600">Meta de apoyo a la plataforma: $50,000.00</span>
        <div className="flex bg-patina-100 w-full h-3 items-center rounded-full shadow-sm">
          <div className="bg-patina-300 w-1/4 h-3 p-1 rounded-full" />
        </div>
        <span className="font-thin text-sm text-patina-600">Fondos totales: $150,000.00</span>
        <div className="flex bg-cello-300 w-full h-3 items-center rounded-full shadow-sm"/>
      </div>
    </div>
  );
}
