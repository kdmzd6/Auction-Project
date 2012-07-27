var AuctionDefaults = {}
  , Auction = QStrike.make('Auction', { subob: ['items', 'seats'], sync: {'title':""} }
      
          , { addSeat: QStrike.CreateType('Seat', 'seats')
              , addItem: QStrike.CreateType('Item', 'items')
              })
  , Item = QStrike.make('Item', { sync: {'itemNumber':"", 'itemName':"" , 'itemDescription':"" , 'startingBid':"" } }
            , { close: QStrike.Closable})
  , Seat = QStrike.make('Seat', { sync: {'name':""} }
            , { close: QStrike.Closable})

QStrike.start({ appName: 'retractors-stitches-f50'
              , token: '13cf072b7d3c48988857fac20656c3d5'
              , bucket: 'auctionFu'
              , defaultType: 'Auction' })
