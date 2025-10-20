import PaymentSection from "@/app/compoenent/paymentsection";

export const metadata = {
  title: "Fee 499 - USTPO",
  description: "Payment Method",
};

export default function Page() {
  return (
    <PaymentSection
      invoiceImage="/Invoice-499.png"
      paymentLink="https://www.paypal.com/ncp/payment/JKYG7QWE2XPTA"
    />
  );
}




