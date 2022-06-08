const express = require ('express')
const app = express()
const cors = require ('cors')
const PORT = 8000

app.use(cors())

const resident = {

    'homer simpson': {
    "age": 50,
    "majorDiagnosis": "Type 2 Diabetes",
    "foodTexture": "Pureed Level 4",
    "fluidTexture": "Moderately thick Level 3",
    "fluidThickner": "Thick&Easy",
    "feedingAbility": "Can feed self",
    "mobility": "Independent",
    "mobility": "Independent",
    "image": "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
    },
    'bob belcher': {
        "age": 42,
        "majorDiagnosis": "Dementia",
        "foodTexture": "Soft and bitesized Level 7",
        "fluidTexture": "Slightly thick Level 2",
        "fluidThickner": "Nutilis Clear",
        "feedingAbility": "Has to be fully fed",
        "mobility": "Zimmer frame with assistance of 2 staff",
        "image": "https://static.wikia.nocookie.net/bobsburgerpedia/images/d/dc/Bob-16.jpg/revision/latest/scale-to-width-down/250?cb=20150727145240",
    },
    'glen quagmire': {
        "age": 33,
        "majorDiagnosis": "STI and Dementia",
        "staffAwarenes!": "makes inappropriate sexual advances/remarks. Can touch female care staff inappropriately without notice ",
        "foodTexture": "Soft and bitesized Level 7",
        "fluidTexture": "Thin Level 1",
        "fluidThickner": "Nutilis Clear",
        "feedingAbility": "Can feed self",
        "mobility": "Zimmer frame with assistance of 2 staff",
        "image": "https://upload.wikimedia.org/wikipedia/en/f/fe/Glenn_Quagmire.png",
    },
    
}

app.get('/', (request, response) =>{
 response.sendFile(__dirname + '/index.html')
})

app.get('/api/:homeName', (request, response)=>{
    const homesName = request.params.homeName.toLowerCase()

    if(homes[homesName]){
        response.json(homes[homesName])
    }else {
        response.json(homes['unknown'])
    }
    
})


app.listen(process.env.PORT || PORT, () =>{
    console.log(`The server is running on ${PORT}! Better go catch it!`);
})