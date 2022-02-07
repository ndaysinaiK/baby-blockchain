import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import loader from '../../assets/loader.gif'

function Blockcard({reload}) {

    const [data, setdata] =useState([])
    const [loading, setLoading]=useState(false)


    useEffect(() => {
    const clearme = FetchBlocks()
    return clearme
    
    }, [reload]);


    const FetchBlocks=async()=>{

        setLoading(true)
        await axios.get(`https://bch-simple.herokuapp.com/api/getblockchain`).then((res)=>{
            setdata(res?.data)
            setLoading(false)
        }).catch((error)=>{

            toast.error(`error occured: ${error}`, {position:toast.POSITION.TOP_RIGHT});
            setLoading(false)

        })
      

    }
    
  return (

    <div className='flex align-center justify-center p-6'>

      {loading&&<div className='flex flex-col align-center items-center justify-center'><img className='h-20' src={loader} loading='lazy'/> <br /> <p className='ml-4 dark:text-white'>loading ...</p></div> }
      

        <div className="grid-cols-1 grid sm:grid-cols-4 grid-flow-row-dense gap-4 ">


            {data?.map((bc, i) =>
            
            <div className='p-4 border-[1px] border-[#3d4f7c] rounded-md hover:bg-slate-50 dark:text-white dark:hover:bg-slate-800' key={i}>
                <p>Block ID: {bc.index} </p>
                <p className='break-all'>Timestamp: {bc.timestamp}</p>
                <p className='break-all'>Previous Hash: {bc.prevhash}</p>
                <p className='break-all'>Block Hash :{bc.hash}</p> <br />

                <p>Transaction Info:</p> < hr /><br/>

                <p>From : {bc.transactions['from']}</p>
                <p>To : {bc.transactions['to']}</p>
                <p>Amount : {bc.transactions['amount']}</p>
            

            </div>

            )}

        </div>

    </div>
  
    )
}

export default Blockcard;
