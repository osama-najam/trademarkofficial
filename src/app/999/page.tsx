import PaymentSection from "@/app/compoenent/paymentsection";

export const metadata = {
  title: "Fee 999 - USTPO",
  description: "Payment Method",
};

export default function Page() {
  return (
    <PaymentSection
      amount={999}
      invoiceImage="/Invoice-999.jpg"
      paymentLink="https://buy.stripe.com/3cI9AS49C1isaCDa2W53O00" // apna stripe link yahan dal
    />
  );
}
