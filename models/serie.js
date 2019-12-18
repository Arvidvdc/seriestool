const mongoose = require("mongoose");

const serieSchema = new mongoose.Schema({
    title: String,
    plot: String,
    genre: String,
    subs: String,
    actors: String,
    director: String,
    classification: String,
    ratingIMDb: Number,
    url: String,
    country: String,
    language: String,
    runningTime: Number,
    airDate: String,
    status: String,
    currentSeason: Number,
    nextAirDate: String,
    sizeOnDisk: Number,
    locationOnDisk: String,
    seenAllEpisodes: Boolean,
    registerdInKodi: Boolean,
    searchSubs: Boolean,
    personalNotes: String,
    DateAdded: String,
    DateChanged: String,
    owner: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
});

module.exports = mongoose.model("Serie", serieSchema);