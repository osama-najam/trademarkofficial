import PaymentSection from "@/app/compoenent/paymentsection";

export const metadata = {
  title: "Fee 999 - USTPO",
  description: "Payment Method",
};

export default function Page() {
  return (
    <PaymentSection
      invoiceImage="/Invoice-999.jpg"
      paymentLink="https://buy.stripe.com/5kAdUDfoUalnehGeUU" // apna stripe link yahan dal
    />
  );
}


