import PaymentSection from "@/app/compoenent/paymentsection";

export const metadata = {
  title: "Fee 999 - USTPO",
  description: "Payment Method",
};

export default function Page() {
  return (
    <PaymentSection
      invoiceImage="/Invoice-999.jpg"
      paymentLink="https://buy.stripe.com/aFa00c5BRb6e0WLcaR0co01" // apna stripe link yahan dal
    />
  );
}



