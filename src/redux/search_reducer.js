let initialState = {
    cities:[
        {id: "1", value: "Moscow"},
        {id: "2", value: "Krasnodar"},
        {id: "3", value: "Saint Petersburg"},
        {id: "4", value: "London"},
        {id: "5", value: "Paris"},
        {id: "6", value: "Tokyo"},
        {id: "7", value: "Pekin"},
        {id: "9", value: "Kazan"},
        {id: "10", value: "Oslo"},
        {id: "11", value: "Sydney"},
        {id: "12", value: "Rome"},
        {id: "13", value: "Braga"},
        {id: "14", value: "Venice"},
        {id: "15", value: "Madrid"},
        {id: "16", value: "Barcelona"},
        {id: "17", value: "Saratov"},
        {id: "18", value: "Liverpool"},
        {id: "19", value: "Amsterdam"},
        {id: "20", value: "Florida"},
        {id: "21", value: "Krasnoyarsk"},
        {id: "22", value: "Vologda"},
        {id: "23", value: "Kishinev"},
        {id: "24", value: "Kiev"},
        {id: "25", value: "Minsk"},
        {id: "26", value: "Dublin"},
        {id: "27", value: "Riga"},
        {id: "28", value: "Praga"}
        ]
}

const searchReducer = (state = initialState, action) => {
    switch (action.type){
        default :
            return state
    }
}

export default searchReducer