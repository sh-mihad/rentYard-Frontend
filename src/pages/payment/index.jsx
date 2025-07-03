import { useRef, useState } from "react";
import CommonLayout from "../../components/layouts/CommonLayout";
import Button from "../../components/ui/Button";
import { CreditCard, Plus } from "lucide-react";
import Modal from "../../components/layouts/Modal";
import AddNewCardForm from "./components/AddNewCardForm";
const initialPaymentMethod = [
  { id: 1, name: "Alex Jones", type: "Amex card", last4: "8565" },
  { id: 2, name: "Alex Jones", type: "Amex card", last4: "8565" },
  { id: 3, name: "Alex Jones", type: "Amex card", last4: "8565" },
];
export default function PaymentPage() {
  const [billingPeriod, setBillingPeriod] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState("regular");
  const [autoPayEnabled, setAutoPayEnabled] = useState(true);
  const [paymentOption, setPaymentOption] = useState(null);
  const [paymentMethods, setPaymentMethods] = useState(initialPaymentMethod);
  const formRef = useRef();
  const [showModal, setShowModal] = useState(false);
  const plans = [
    {
      id: "regular",
      name: "Regular",
      price: "$99.99",
      period: "/mo",
      description: "Price for 1-50 unit",
      hasAutoPay: true,
    },
    {
      id: "platinum",
      name: "Platinum",
      price: "$129.99",
      period: "/mo",
      description: "Price for 1-50 unit",
      hasAutoPay: false,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "$199.99",
      period: "/mo",
      description: "Price for 1-50 unit",
      hasAutoPay: false,
    },
  ];
  const handleAction = () => {
    formRef.current.requestSubmit();
  };
  const handleSubmit = (formData) => {
    setPaymentMethods([
      ...paymentMethods,
      {
        name: "Alex Jones",
        type: formData.nameOnCard,
        last4: formData.cardNumber.slice(0, 4),
      },
    ]);
    setShowModal(false)
  };
  const paymentMethodsLastIndex = paymentMethods.length - 1;

  return (
    <CommonLayout
      renderFooterLastButton={() => (
        <div className="flex items-center gap-3">
          <p>
            Total with card charge: <b>$970</b>
          </p>
          <Button onClick={() => console.log("sara")} type="button" isBg={true}>
            Pay & add property
          </Button>
        </div>
      )}
      renderTopCornerButton={() => (
        <Button onClick={() => console.log("exit button clicked")}>
          Save & Exit
        </Button>
      )}
    >
      <div className="w-full mx-auto p-6 bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-medium text-gray-900 mb-6">
            Choose a plan for after 30-days free trial
          </h1>

          {/* Billing Toggle */}
          <div className=" border border-[#E0E0E0] rounded-lg py-4 px-2 inline">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 rounded-lg font-medium ${
                billingPeriod === "monthly" && "bg-[#E2EBFF]  text-[#316EED]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("annually")}
              className={`font-medium px-6 py-2 rounded-lg ${
                billingPeriod === "annually" && "bg-[#E2EBFF]  text-[#316EED]"
              }`}
            >
              Annually (save 57%)
            </button>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`p-6 cursor-pointer rounded-lg transition-all duration-200 ${
                selectedPlan === plan.id
                  ? "border-2 border-blue-500 bg-blue-50"
                  : "border border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => setSelectedPlan(plan.id)}
            >
              <div className="flex items-center justify-between mb-4">
                <h3
                  className={`${
                    selectedPlan !== plan.id && "bg-[#F4F4F4]"
                  }  text-lg border border-[#E0E0E0] rounded-lg py-3 px-4  font-medium text-gray-900`}
                >
                  {plan.name}
                </h3>
                {plan.hasAutoPay && (
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={autoPayEnabled}
                      onChange={(e) => setAutoPayEnabled(e.target.checked)}
                    />
                    <span className="text-sm text-blue-600 font-medium">
                      Auto Pay
                    </span>
                  </label>
                )}
              </div>

              <div className="mb-4">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-lg text-gray-600 ml-1">
                    {plan.period}
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-600">{plan.description}</p>
            </div>
          ))}
        </div>

        {/* Payment Options */}
        <div className="bg-white rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-medium text-gray-900">
              Payment option
            </h2>
            <button
              onClick={() => setShowModal(true)}
              className="text-blue-600 cursor-pointer hover:text-blue-700 flex items-center"
            >
              <Plus className="w-4 h-4 mr-1" />
              Add new card
            </button>
          </div>

          <div className="space-y-4">
            {paymentMethods.map((method, index) => (
              <div
                key={method.id}
                className={`${
                  index !== paymentMethodsLastIndex &&
                  "border-b border-[#F0F1F3]"
                } flex items-center justify-between p-4   hover:border-gray-300 transition-colors`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-6 bg-gray-100 rounded flex items-center justify-center">
                    <CreditCard className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <span className="text-gray-900 font-medium">
                      {method.name}
                    </span>{" "}
                    <span className="text-gray-600">({method.type})</span>{" "}
                    <span className="text-gray-600 ml-2">
                      ********{method.last4}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setPaymentOption(method);
                  }}
                  className={`${
                    paymentOption?.id === method.id
                      ? "bg-[#316EED] text-white"
                      : "text-[#316EED]"
                  } px-6 py-2 border font-medium hover:text-white hover:bg-[#316EED]  border-[#316EED] rounded-lg `}
                >
                  Select
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showModal && (
        <Modal
          title="Add new card"
          onClose={() => setShowModal(false)}
          actionLabel={"Save"}
          onAction={handleAction}
        >
          <AddNewCardForm ref={formRef} onSubmit={handleSubmit} />
        </Modal>
      )}
    </CommonLayout>
  );
}
