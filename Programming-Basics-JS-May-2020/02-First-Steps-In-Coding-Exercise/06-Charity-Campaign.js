function charityCampaign(
  campaignLength,
  confectioner,
  cakes,
  waffles,
  pancakes
) {
  const totalCakes = +cakes * 45;
  const totalWaffles = +waffles * 5.8;
  const totalPancakes = +pancakes * 3.2;
  const totalPerDay =
    (totalCakes + totalWaffles + totalPancakes) * +confectioner;
  const totalPerCampaign = totalPerDay * +campaignLength;
  const finalSum = totalPerCampaign - totalPerCampaign / 8;
  console.log(finalSum);
}

charityCampaign('23', '8', '14', '30', '16');
charityCampaign('131', '5', '9', '33', '46');
