if(Positions.find().count() === 0)
{
  var positionId = Positions.insert({
    stock: 'AEP',
    expiration: '10/21/2016',
    entryPrice: 65,
    currentValue: 130,
    roi: 1.00
  });
  Positions.insert({
    stock: 'NFLX',
    expiration: '12/16/2016',
    entryPrice: 905,
    currentValue: 1357.5,
    roi: 0.50
  });
  Positions.insert({
    stock: 'SMPL',
    expiration: '12/16/2016',
    entryPrice: 40,
    currentValue: 80,
    roi: 1.00
  });

  Legs.insert({
    positionId: positionId,
    type: 'Long',
    direction: 'Call',
    strikePrice: 62.5,
    expiration: '10/21/2016',
    entryPrice: 0.65,
    currentValue: 0.80,
    roi: 0.25
  })
}
