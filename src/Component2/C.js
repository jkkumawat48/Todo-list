import React,{useEffect ,useState} from 'react'

const C = () => {
const[data, setData]=useState([]);

    const getCovidData = async()=> {
        try {
            const res = await fetch('https://data.covid19india.org/data.json')
          const actualdata = await res.json();
          console.log(actualdata.statewise[0])
          setData(actualdata.statewise[0])
        } catch (err){
console.log(err)
        }
 
    }
    useEffect(() => {
        getCovidData();
    }, [])
    
  return (
    <>
    <section>
<h1>LIVE</h1>
<h2>Covid Live Tracker</h2>
<ul>
    <li className='card'>
        <div className='card_main'>
            <div className='card_inner'>
                <p className='card-name'><span> OUR </span> COUNTRY </p>
                <p className='card__total card__small'>INDIA</p>
            </div>
        </div>
    </li>
    <li className='card'>
        <div className='card_main'>
            <div className='card_inner'>
                <p className='card-name'><span> TOTAl </span> RECOVERED </p>
                <p className='card__total card__small'>{data.recovered}</p>
            </div>
        </div>
    </li>
    <li className='card'>
        <div className='card_main'>
            <div className='card_inner'>
                <p className='card-name'><span> TOTAl </span> CONFIRMED </p>
                <p className='card__total card__small'>{data.confirmed}</p>
            </div>
        </div>
    </li>
    <li className='card'>
        <div className='card_main'>
            <div className='card_inner'>
                <p className='card-name'><span> TOTAl </span> DEATH </p>
                <p className='card__total card__small'>{data.deltadeaths}</p>
            </div>
        </div>
    </li>
    <li className='card'>
        <div className='card_main'>
            <div className='card_inner'>
                <p className='card-name'><span> TOTAl </span> ACTIVE </p>
                <p className='card__total card__small'>{data.active}</p>
            </div>
        </div>
    </li>
    <li className='card'>
        <div className='card_main'>
            <div className='card_inner'>
                <p className='card-name'><span> LAST </span> UPDATED </p>
                <p className='card__total card__small'>{data.lastupdatedtime}</p>
            </div>
        </div>
    </li>
</ul>
</section>
    </>
  )
}

export default C