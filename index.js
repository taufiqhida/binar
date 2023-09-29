const express = require('express')
const app = express()
const port = 3001

app.use(express.json({strict: false}))

app.get('/', (req, res) => {
    return res.json({
        message:'Hello World!'
    })
})

//GET

app.get('/tiket', (req, res) => {
    return res.json({
        message: "Data tiket konser"
    })
})

app.get('/tiket/ardhito', (req, res) => {
    return res.json({
        message: "Tiket Konser Ardhito"
    })
})

app.get('/tiket/idgitaf', (req, res) => {
    return res.json({
        message: "Tiket Konser idgitaf"
    })
})

app.get('/tiket/nadin', (req, res) => {
    return res.json({
        message: "Tiket Konser Nadin amizah"
    })
})

app.get('/tiket/BTS', (req, res) => {
    return res.json({
        message: "Tiket Konser BTS"
    })
})

app.get('/tiket/TWICE', (req, res) => {
    return res.json({
        message: "Tiket Konser TWICE"
    })
})

app.get('/tiket/NewJeans', (req, res) => {
    return res.json({
        message: "Tiket Konser NewJeans"
    })
})

app.get('/tiket/Tulus', (req, res) => {
    return res.json({
        message: "Tiket Konser Tulus"
    })
})

app.get('/tiket/Sule', (req, res) => {
    return res.json({
        message: "Tiket Konser Sule"
    })
})

app.get('/tiket/Andre', (req, res) => {
    return res.json({
        message: "Tiket Konser Andre"
    })
})

app.get('/tiket/Naruto', (req, res) => {
    return res.json({
        message: "Tiket Konser Naruto"
    })
})

app.get('/tiket/Sasuke', (req, res) => {
    return res.json({
        message: "Tiket Konser Sasuke"
    })
})

app.get('/tiket/Kakashi', (req, res) => {
    return res.json({
        message: "Tiket Konser Kakashi"
    })
})

app.get('/tiket/Sakura', (req, res) => {
    return res.json({
        message: "Tiket Konser Sakura"
    })
})

app.get('/tiket/pokemon', (req, res) => {
    return res.json({
        message: "Tiket Konser pokemon"
    })
})

app.get('/tiket/pikachu', (req, res) => {
    return res.json({
        message: "Tiket Konser pikachu"
    })
})


app.get('/kota', (req, res) => {
    return res.json({
        message: "Data kota yang tersedia"
    })
})

app.get('/kota/jakarta', (req, res) => {
    return res.json({
        message: "Kota jakarta"
    })
})


app.get('/kota/medan', (req, res) => {
    return res.json({
        message: "Kota medan"
    })
})


app.get('/kota/surabaya', (req, res) => {
    return res.json({
        message: "Kota surabaya"
    })
})


app.get('/kota/makassar', (req, res) => {
    return res.json({
        message: "Kota makassar"
    })
})


app.get('/kota/ikn', (req, res) => {
    return res.json({
        message: "Kota nusantara"
    })
})

app.get('/kota/bandaaceh', (req, res) => {
    return res.json({
        message: "Kota Banda Aceh"
    })
})

app.get('/kota/jayapura', (req, res) => {
    return res.json({
        message: "Kota Jayapura"
    })
})

app.get('/kota/denpasar', (req, res) => {
    return res.json({
        message: "Kota Denpasar"
    })
})

app.get('/user', (req, res) => {
    return res.json({
        message: "Data pengguna"
    })
})
app.get('/user/jokowi', (req, res) => {
    return res.json({
        nama: "Jokowi",
        umur: "50"
    })
})
app.get('/user/prabowo', (req, res) => {
    return res.json({
        nama: "prabowo",
        umur: "50"
    })
})
app.get('/user/soekarno', (req, res) => {
    return res.json({
        nama: "Soekarno",
        umur: "50"
    })
})
app.get('/user/Megawati', (req, res) => {
    return res.json({
        nama: "Megawati",
        umur: "50"
    })
})
app.get('/user/ganjar', (req, res) => {
    return res.json({
        nama: "ganjar",
        umur: "50"
    })
})
app.get('/user/Ahok', (req, res) => {
    return res.json({
        nama: "Ahok",
        umur: "50"
    })
})
app.get('/user/Anies', (req, res) => {
    return res.json({
        nama: "Anies",
        umur: "50"
    })
})
app.get('/user/puan', (req, res) => {
    return res.json({
        nama: "puan",
        umur: "50"
    })
})

//DELETE



//PUT


//POST



// app.get('/test', (req, res) => {
//     return res.json({
//         message: "test"
//     })
// })

// app.post('/test-post', (req, res) => {
//     return res.json(req.body)
// })

// app.put('/test-put', (req, res) => {
//     return res.json(req.body)
// })

// app.delete('/test-delete', (req, res) => {
//     return res.json(req.body)
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})