import PaymentSection from "@/app/compoenent/paymentsection";

export const metadata = {
  title: "Fee 499 - USTPO",
  description: "Payment Method",
};

export default function Page() {
  return (
    <PaymentSection
      amount={499}
      invoiceImage="/Invoice-499.png"
      paymentLink="https://buy.stripe.com/7sY3cn0HSbp1ao648ifYY02"
    />
  );
}
