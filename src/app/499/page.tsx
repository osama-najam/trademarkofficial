import PaymentSection from "@/app/compoenent/paymentsection";

export const metadata = {
  title: "Fee 499 - USTPO",
  description: "Payment Method",
};

export default function Page() {
  return (
    <PaymentSection
      invoiceImage="/Invoice-499.png"
      paymentLink="https://buy.stripe.com/fZubIU3tJ5LU5d13El0co00"
    />
  );
}


