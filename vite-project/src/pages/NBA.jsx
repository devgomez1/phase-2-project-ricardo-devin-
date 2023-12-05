import { useState, useEffect } from 'react'

function NBA () {

    // const[startMonth, setStartMonth] = useState('')
    // const[startYear, setStartYear] = useState('')
    // const[startDay, setStartDay] = useState('')

    // const[searchDate, setSearchDate] = useState('')

    // const[gamesFromDay, setGamesFromDay] = useState([])

    // useEffect(() => {
    //     fetch(`https://www.balldontlie.io/api/v1/games/?start_date=${searchDate}&end_date=${searchDate}`)
    //         .then(response => response.json())
    //         .then(data => setGamesFromDay(data))
    //         .catch(error => console.error(error));
    //     }, [searchDate])

    // function handleSubmitDate(e) {
    //     e.preventDefault()
    //     const date = `${startYear}-${startMonth}-${startDay}`
    //     setSearchDate(date)
    // }

    // function mapGames() {
    //     if (!Array.isArray(gamesFromDay.data)) {
    //         // If data is not an array (initial state or API error), return a message or null
    //         return <p>No games available</p>;
    //     }
    //     return gamesFromDay.data.map(game => {
    //         return (
    //         <div key={game.id} className='score'>{game.home_team_score} {game.home_team.abbreviation} vs {game.visitor_team.abbreviation} {game.visitor_team_score}</div>
    //         );
    //     })
    // }



    
    const[firstNameInput, setFirstNameInput] = useState('')

    const[lastNameInput, setLastNameInput] = useState('')

    const[searchFirstName, setSearchFirstName] = useState('')
    const[searchLastName, setSearchLastName] = useState('')

    const[playerList, setPlayerList] = useState({})

    const[playerData, setPlayerData] = useState([])

    function handleSubmitName(e) {
        e.preventDefault()
        setSearchFirstName(firstNameInput)
        setSearchLastName(lastNameInput)
    }

    console.log(firstNameInput)
    console.log(lastNameInput)
    console.log(searchFirstName)
    console.log(searchLastName)

    useEffect(() => {
        fetch ('https://www.balldontlie.io/api/v1/players')
        .then(res => res.json())
        .then(data => {
            setPlayerData(data)
        })
    }, [])

// data[1].first_name

console.log(playerData)

useEffect(() => {
    if (searchFirstName && playerData.data) {
        const filteredPlayers = playerData.data.filter(item => item.first_name.toLowerCase().includes(searchFirstName.toLowerCase()));
        console.log(filteredPlayers);
    }
}, [searchFirstName, playerData]);


    //     console.log(filteredPlayers);

    //     // const mappedPlayers = filteredPlayers.map(player => );
        
    // }, [playerData])

    // console.log(filteredPlayers);



    return (
        <div>

        <div>
            <div>Search Player Stats</div>
            <form onSubmit={handleSubmitName}>
                <input type='text' onChange={(e) => setFirstNameInput(e.target.value)}></input>
                <input type='text' onChange={(e) => setLastNameInput(e.target.value)}></input>
                <button>Search for Players</button>
            </form>
        </div>


        {/* <div>
            <div className='searchDiv'>Search For Games From Previous Dates</div>
            <form onSubmit={handleSubmitDate}>
                <input type='text' onChange={(e) => setStartMonth(e.target.value)} placeholder='Month'></input>
                <input type='text' onChange={(e) => setStartDay(e.target.value)} placeholder='Day'></input>
                <input type='text' onChange={(e) => setStartYear(e.target.value)} placeholder='Year'></input>
                <button>Search for Games</button>
            </form>
            {mapGames()}
        </div> */}


        </div>
    )
}

export default NBA