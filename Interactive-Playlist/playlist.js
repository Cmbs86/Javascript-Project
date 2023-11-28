import rs from "readline-sync"
import fs from "fs"

class Playlist {
    constructor(title, artist, genre, year, duration){
        this.title = title
        this.artist = artist
        this.genre = genre
        this.year = year
        this.duration = duration
    }

    describe(){
        return `
        ----------------------------
        - Title: ${this.title}
        - Artist: ${this.artist}
        - Genre: ${this.genre}
        - Year: ${this.year}
        - Duration: ${this.duration}
        ----------------------------
        
        `
    }
}

class PlaylistDB{
    constructor(filename){
        this.filename = filename
        this.songs = this.readSongsFromJson() // array
    }

    //Importing the data from songs.json
    readSongsFromJson(){
        if (fs.existsSync(this.filename)){
        let rawData = fs.readFileSync(this.filename)
        let playlistObjects = JSON.parse(rawData)
        return playlistObjects.map(song => new Playlist(song.title, song.artist, song.genre, song.year, song.duration))
        }
        else {
            return []

        }
    }
    // method to show all the songs - "2"
    ShowSongs(){
        this.songs.forEach( song => console.log(song.describe())) // it shows the songs of playlist accordingly with "describe" method

    }
    saveSongstoJson(){
        fs.writeFileSync(this.filename, JSON.stringify(this.songs)) // take the array and convert into a string and write the content insid the JSON file
    }
    addSong(song){
        this.songs.push(song)
        this.saveSongstoJson()
    }

    filterSongs(){
        const filterBy = rs.question("Filter by (title | artist | genre | year | duration): ").toLowerCase()
        if(filterBy != "title" && filterBy != "artist" && filterBy != "genre" && filterBy != "year" && filterBy != "duration"){
            console.log("NOT A VALID OPTION")
            return
        }else {
            const searchTerm = rs.question(`Enter ${filterBy}: `)
            // create
            let filteredSongs = this.songs.filter(song => song[filterBy].toLowerCase().includes(searchTerm.toLowerCase()))
            filteredSongs.forEach( song => console.log(song.describe()))
        }
    }
}





const playlistDB = new PlaylistDB("songs.json") // refers to the json file of same name.
// console.log(playlistDB)


//Interaction section
while(true){
    console.clear()
    console.log("** My Winter Playlist**")
    console.log("1. Add a new song")
    console.log("2. Show all songs")
    console.log("3. Filter songs")
    console.log("4. Close Playlist")
    let choice = rs.question("Enter your choice: ")

    switch(choice){
        case "1": 
        const title = rs.question("Enter title: ")
        const artist = rs.question("Enter artist: ")
        const genre = rs.question("Enter genre: ")
        const year = rs.question("Enter year: ")
        const duration = rs.question("Enter duration: ")
        const song = new Playlist(title, artist, genre, year, duration)
        playlistDB.addSong(song)
        console.log("Song added to the list")
        break

        case "2":
            playlistDB.ShowSongs() // call the method when option 2 is chosen
        break

        case "3":
            playlistDB.filterSongs()
        break

        case "4":
            console.log("Exiting...")
            process.exit()
        default: 
            console.log("Invalid choice!")
    }

    rs.question("Press enter to continue...")
}




