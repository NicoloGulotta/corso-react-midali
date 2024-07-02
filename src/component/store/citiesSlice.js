import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
    name: 'cities',
    initialState: {
        value: [
            {
                id: 0,
                isVisited: true,
                name: "Tokio",
                description: "La capitale di Japon",
                imgUrl: "https://media.istockphoto.com/id/1475082116/it/foto/tokyo-skytree-che-si-affaccia-sui-tetti-del-paesaggio-urbano-delle-case-in-giappone.webp?b=1&s=170667a&w=0&k=20&c=SQeW9UmpRNAnex9WQIlyZGPEQgSQqS9ah5_PFPuc7qQ="
            },
            {
                id: 1,
                isVisited: false,
                name: "New York",
                description: "La capitale del mondo",
                imgUrl: "https://media.istockphoto.com/id/599766748/it/foto/la-citt%C3%A0-dei-sogni-lo-skyline-di-new-york-al-crepuscolo.webp?b=1&s=170667a&w=0&k=20&c=5tOZt4yuyqrB-8w1hVwvq9NAQuFzyztKY3_b2F-oNkw="
            },
            {
                id: 2,
                isVisited: true,
                name: "Paris",
                description: "La capitale della Francia",
                imgUrl: "https://media.istockphoto.com/id/1952253409/it/foto/skyline-paris.webp?b=1&s=170667a&w=0&k=20&c=J2JGEHGE9LlmWy4WuxRY67gTRnGpHcZZ4rPVhov0DAo="
            },
            {
                id: 3,
                isVisited: false,
                name: "Roma",
                description: "La capitale dell'Italia",
                imgUrl: "https://media.istockphoto.com/id/509475506/it/foto/roman-citscape-panorama-al-tramonto-roma-italia.webp?b=1&s=170667a&w=0&k=20&c=tZ5eB_gCgm5WoSyQ-Soo7aqIOvgTi_RFIMeTOpV8fcI="
            },
        ],
    },
    reducers: {
        addCity: (state, action) => {
            state.value = [...state.value, action.payload];
        },
    },
});

export const { addCity } = citiesSlice.actions
export const citiesReducer = citiesSlice.reducer