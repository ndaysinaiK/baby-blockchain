import React,{useState} from 'react';
import Blockcard from './Blockcard';
import loader from '../../assets/loader.gif'
import axios from 'axios';
import { toast } from 'react-toastify';

import { apiBaseUrl } from '../../Utils/Apis';

function Body() {

  const [stateLoad, setStateLoad]=useState(true)

  const [sender, setSender]=useState('')
  const [receiver, setReceiver]=useState('')
  const [amount, setAmount]=useState(0)
  

  const NewTx = async () =>{

    if(sender==='' && receiver==='' && amount==='') {

      toast.error(`Please fill out all the fields`, {position:toast.POSITION.TOP_RIGHT});

    }else if (sender==='' || receiver==='' || amount===''){

      toast.error(`Please fill out all the fields`, {position:toast.POSITION.TOP_RIGHT});

    }

    else {

        setStateLoad(false)

        const postMe = JSON.stringify({from:sender, to:receiver, amount:Number(amount)})

        await axios.post(apiBaseUrl+'/api/sendtransaction',postMe).then((res)=>{
    
        
          toast.info(`Sent successfully`, {position:toast.POSITION.TOP_RIGHT});

          setStateLoad(true)
        
        }).catch((error)=>{
      
            toast.error(`error occured: ${error}`, {position:toast.POSITION.TOP_RIGHT});
            setStateLoad(false)
      
        })
      

    }

  }

  return (
    <div className='dark:bg-slate-900'>
        
        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
        <h1 className="text-gray-600 text-3xl mt-2 mb-5 text-gradient dark:text-white">WALLET FORM</h1>
          
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism bg-slate-50 dark:bg-slate-900 shadow-sm">

         
                <input onChange={(e)=>setSender(e.target.value)} placeholder="what's your name? Ezekiel?" type="text" className="my-2 w-full rounded-md p-2 outline-none bg-transparent dark:text-white border-[1px] border-[#3d4f7c]  text-sm white-glassmorphism"  />
                <input onChange={(e)=>setReceiver(e.target.value)} placeholder="what's your friend's name? Tony?" type="text" className="my-2 w-full rounded-md p-2 outline-none bg-transparent dark:text-white border-[1px] border-[#3d4f7c]  text-sm white-glassmorphism"  />
                <input onChange={(e)=>setAmount(e.target.value)} placeholder="How much do you wanna send? 10$ for coffee?" type="number" className="my-2 w-full rounded-md p-2 outline-none bg-transparent dark:text-white border-[1px] border-[#3d4f7c]  text-sm white-glassmorphism"  />

                <h1 className="dark:text-white text-sm mt-4">Free blockchain, no gas fees</h1>
                <p className="text-gray-500 text-sm mt-4"> Decentralized database and network all in one </p>

                <div className="h-[1px] w-full bg-gray-400 my-2" />
              
                  <button
                    type="button"
                    onClick={()=>NewTx()}
                  
                    className="dark:text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#dce4f1] dark:hover:bg-slate-800 rounded-full cursor-pointer"
                  >
                    Send

                  </button>

        
             
          </div>


        </div>
      
        
        <div className='txresult flex align-center justify-center w-full mb-10 h-2 dark:text-gray-400'>

          {!stateLoad&&<span>Processing ...</span>}

        </div>

        <Blockcard reload={stateLoad}/>

    </div>
  );
}

export default Body;
