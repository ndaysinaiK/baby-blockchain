import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import loader from '../../assets/loader.gif'
import { apiBaseUrl } from '../../Utils/Apis';

function Blockcard({reload}) {

    const [data, setdata] =useState([])
    const [loading, setLoading]=useState(false)

    useEffect(() => {

        if (reload){
            const clearme = FetchBlocks()
            return clearme
        
        }
   
    }, [reload]);


    const FetchBlocks=async()=>{

        setLoading(true)
        await axios.get(apiBaseUrl+'/api/getblockchain').then((res)=>{
            setdata(res?.data)
            setLoading(false)
        }).catch((error)=>{

            toast.error(`error occured: ${error}`, {position:toast.POSITION.TOP_RIGHT});
            setLoading(false)

        })
      

    }
    
  return (

    <div className='flex flex-col align-center justify-center p-6'>

        <div className='flex items-center justify-center h-5'>

            {loading&&<p className='dark:text-white'><b className='flex items-center justify-center'>Loading .....</b></p>}

        </div>

        {!loading&&<div><h1 className='dark:text-white text-2xl mb-5'>Distributed Ledger, the only source of truth.</h1></div>}
     

        {!loading&& 
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

        }

    </div>
  
    )
}

export default Blockcard;
