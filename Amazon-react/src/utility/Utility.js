

export const deliveryOptions = [
  {
    id: "1",
    deliveryDays: 7,
    priceCents: 0,
  },
  {
    id: "2",
    deliveryDays: 3,
    priceCents: 499,
  },
  {
    id: "3",
    deliveryDays: 1,
    priceCents: 999,
  },
];

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });

  return deliveryOption || deliveryOptions[0];
}


export const formatCurrency = (priceCents) => {
  return (Math.round(priceCents) / 100).toFixed(2);
};

export const getPrice = (product) => {
  return `$${formatCurrency(product.priceCents)}`;
};

export const extraInfoHTML = () => {
  return "";
};
