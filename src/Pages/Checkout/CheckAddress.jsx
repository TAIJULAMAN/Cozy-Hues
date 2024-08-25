import { useState, useEffect } from "react";
import CheakoutInput from "./CheakoutInput";
import ChekRadio from "./ChekRadio";

const CheckAddress = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  useEffect(() => {
    const allFieldsFilled = Object.values(formData).every(
      (field) => field.trim() !== ""
    );
    setIsFormValid(allFieldsFilled);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleContinueClick = () => {
    if (isFormValid) {
      setShowPaymentOptions(true);
    }
  };

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  return (
    <div className="font-[sans-serif] bg-[#2d5356] border-2 rounded-2xl p-4 max-w-4xl mx-auto">
      <div className="flex flex-col gap-12 h-full">
        <div className="w-full rounded-md px-4 py-8 ">
          <h2 className="text-2xl font-bold  mb-8 text-white">
            Complete your order
          </h2>
          <form className="space-y-8">
            <div>
              <h3 className="text-base text-white mb-4">Personal Details</h3>
              {/* personal information */}
              <div className="grid md:grid-cols-2 gap-4">
                <CheakoutInput
                  label="First Name"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required={true}
                />
                <CheakoutInput
                  label="Last Name"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required={true}
                />
                <CheakoutInput
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required={true}
                />
                <CheakoutInput
                  label="Phone No."
                  type="number"
                  name="phone"
                  placeholder="Phone No."
                  value={formData.phone}
                  onChange={handleInputChange}
                  required={true}
                />
              </div>
            </div>

            <div>
              <h3 className="text-base text-white mb-4">Shipping Address</h3>

              {/* Address information */}
              <div className="grid md:grid-cols-2 gap-4">
                <CheakoutInput
                  label="Address Line"
                  name="address"
                  placeholder="Address Line"
                  value={formData.address}
                  onChange={handleInputChange}
                  required={true}
                />
                <CheakoutInput
                  label="City"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  required={true}
                />
                <CheakoutInput
                  label="State"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                  required={true}
                />
                <CheakoutInput
                  label="Zip Code"
                  name="zipCode"
                  placeholder="Zip Code"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required={true}
                />
              </div>

              <div className="flex gap-4 max-md:flex-col mt-8">
                <button
                  type="button"
                  onClick={handleContinueClick}
                  className={`${
                    isFormValid
                      ? "bg-[#d09423] hover:bg-[#b0841c]"
                      : "bg-gray-400 cursor-not-allowed"
                  } rounded-full px-4 py-2 flex items-center gap-5 justify-center w-full lg:w-64 h-12 lg:h-16 text-lg lg:text-xl transition duration-300 ease-in-out font-semibold`}
                  disabled={!isFormValid}
                >
                  Continue
                </button>
              </div>
              {/* payment option */}
              {showPaymentOptions && (
                <div className="mt-8">
                  <h3 className="text-base text-white mb-4">
                    Payment Options
                  </h3>
                  <div className="flex flex-col gap-4">
                    <ChekRadio
                      id="paypal"
                      name="paymentMethod"
                      value="paypal"
                      label="Pay with PayPal"
                      onChange={handlePaymentMethodChange}
                      checked={selectedPaymentMethod === "paypal"}
                    />
                    <ChekRadio
                      id="sslcommerz"
                      name="paymentMethod"
                      value="sslcommerz"
                      label="Pay with SSLCommerz Gateway"
                      onChange={handlePaymentMethodChange}
                      checked={selectedPaymentMethod === "sslcommerz"}
                    />
                    <ChekRadio
                      id="cashOnDelivery"
                      name="paymentMethod"
                      value="cashOnDelivery"
                      label="Cash on Delivery"
                      onChange={handlePaymentMethodChange}
                      checked={selectedPaymentMethod === "cashOnDelivery"}
                    />
                  </div>

                  {selectedPaymentMethod && (
                    <div className="mt-8 p-4 border rounded-lg bg-gray-50">
                      {selectedPaymentMethod === "paypal" && (
                        <div>
                          <h4 className="text-lg font-semibold mb-2">
                            Pay with PayPal
                          </h4>
                          <p>
                            You will be redirected to PayPal to complete your
                            purchase securely.
                          </p>
                        </div>
                      )}
                      {selectedPaymentMethod === "sslcommerz" && (
                        <div>
                          <h4 className="text-lg font-semibold mb-2">
                            Pay with SSLCommerz Gateway
                          </h4>
                          <p>
                            You will be redirected to SSLCommerz to complete
                            your purchase securely.
                          </p>
                        </div>
                      )}
                      {selectedPaymentMethod === "cashOnDelivery" && (
                        <div>
                          <h4 className="text-lg font-semibold mb-2">
                            Cash on Delivery
                          </h4>
                          <p>
                            You can pay with cash upon delivery. Please have the
                            exact amount ready.
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckAddress;
