function insertProduct() {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: "Olivenolje Dominus",
        price: 199
      });
    
      product
        .save()
        .then(result => {
          console.log("Resultat: " + result);
          res.status(201).json({
            message: "Handling POST requests to /pictures",
            createdPictuer: picture
          });
        })
        .catch(err => {
          console.log("Dette ble feil" + err);
          res.status(500).json({
            error: err
          });
        });
    
}