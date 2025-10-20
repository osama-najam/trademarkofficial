import PaymentSection from "@/app/compoenent/paymentsection";

export const metadata = {
  title: "Fee 999 - USTPO",
  description: "Payment Method",
};

export default function Page() {
  return (
    <PaymentSection
      invoiceImage="/Invoice-999.jpg"
      paymentLink="https://www.paypal.com/paypalme/DigiclubPH?locale.x=en_US" // apna stripe link yahan dal
    />
  );
}




