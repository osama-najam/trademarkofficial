import PaymentSection from "@/app/compoenent/paymentsection";

export const metadata = {
  title: "Fee 299 - USTPO",
  description: "Payment Method",
};

export default function Page() {
  return (
    <PaymentSection
      invoiceImage="/Invoice-299.jpg"
      paymentLink="https://buy.stripe.com/4gM6oz3U42Svao69sCfYY01"
    />
  );
}

