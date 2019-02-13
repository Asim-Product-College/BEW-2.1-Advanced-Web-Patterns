var pet = new Pet(req.body);
pet.save(function (err) {
    if (req.file) {
    client.upload(req.file.path, {}, function (err, versions, meta) {
        if (err) { return res.status(400).send({ err: err }) };

        versions.forEach(function (image) {
        var urlArray = image.url.split('-');
        urlArray.pop();//removes and returns last element in array
        var url = urlArray.join('-');
        pet.avatarUrl = url;
        pet.save();
        });

        res.send({ pet: pet });
    });
    } else {
    res.send({ pet: pet });
    }
})